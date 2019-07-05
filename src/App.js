import React, { Component } from 'react';
import './App.css';
import Arrivals from './Arrivals';
import Departures from './Departures';


const TYPE_DEPARTURES = 'Departures'
const TYPE_ARRIVALS = 'Arrivals'
const YESTERDAY = 'Yesterday'
const TODAY = 'Today'
const TOMORROW = 'Tomorrow'


class App extends Component {
  constructor() {
    super();
    this.state = {
      currentPage: TYPE_ARRIVALS,
      currentDay: TODAY,
      dateMap : {
        'Yesterday': -1,
        'Tomorrow': +1
      },
    };
  }

  handleClick = (target) => {
    this.setState({ currentPage: target });
  }

  setCurrentDay = (day) => {
    this.setState({ currentDay: day})
  }

  render() {
    const { currentDay, currentPage, dateMap} = this.state;
    return (
      <div className="App">
        <div className="typeContainer">
          <img
            src="https://bit.ly/2YB0YpL"
            alt="departures"
            className="departure-bg-img"
          />
          <button
            onClick={() => this.handleClick(TYPE_DEPARTURES)}
            className="typeButton"
            type="submit"
          >
            Departures
          </button>
          <button
            onClick={() => this.handleClick(TYPE_ARRIVALS)}
            className="typeButton"
            type="submit"
          >
            Arrivals
          </button>
          <img
            src="https://bit.ly/2xrC5Ri"
            alt="arrivals"
            className="arrival-bg-img"
          />
        </div>
        <div className="pickADate">
          <button
            type="submit"
            onClick={() => this.setCurrentDay(YESTERDAY)}
            className="dateButton"
          >
            Yesterday
          </button>
          <button
            type="submit"
            onClick={() => this.setCurrentDay(TODAY)}
            className="dateButton"
          >
            Today
          </button>
          <button
            type="submit"
            onClick={() => this.setCurrentDay(TOMORROW)}
            className="dateButton"
          >
            Tomorrow
          </button>
        </div>
        <h3>{`${currentPage} for ${currentDay}`}</h3>
        <table className="AppTable">
          <thead className="tableHead">
            <tr>
              <th>Terminal</th>
              <th>Local Time</th>
              <th>Destination</th>
              <th>Status</th>
              <th>Airline</th>
              <th>Flight</th>
            </tr>
          </thead>
          <tbody>
            {currentPage === TYPE_ARRIVALS ? (
              <Arrivals
                currentDay={currentDay}
                dateMap={dateMap}
                type={TYPE_ARRIVALS}
              />
            ) : (
                <Departures
                  currentDay={currentDay}
                  dateMap={dateMap}
                  type={TYPE_DEPARTURES}
                />
            )}
          </tbody>
        </table>
      </div>
    );
  }
}

export default App;
