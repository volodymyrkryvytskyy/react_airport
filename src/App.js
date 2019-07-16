import React, { Component } from 'react';
import './App.css';
import Flights from './Flights';

const TYPE_DEPARTURES = 'departure';
const TYPE_ARRIVALS = 'arrival';
const YESTERDAY = 'Yesterday';
const TODAY = 'Today';
const TOMORROW = 'Tomorrow';

class App extends Component {
  constructor() {
    super();
    this.state = {
      currentPage: TYPE_ARRIVALS,
      currentDay: TODAY,
    };
  }

  setCurrentPage = (pageType) => {
    this.setState({ currentPage: pageType });
  }

  setCurrentDay = (day) => {
    this.setState({ currentDay: day });
  }

  render() {
    const { currentDay, currentPage } = this.state;
    return (
      <div className="app">
        <div className="app__type-container">
          <img
            src="https://bit.ly/2YB0YpL"
            alt="departures"
            className="app__type-container-img"
          />
          <button
            onClick={() => this.setCurrentPage(TYPE_DEPARTURES)}
            className="app__type-container-button"
            type="button"
          >
            Departures
          </button>
          <button
            onClick={() => this.setCurrentPage(TYPE_ARRIVALS)}
            className="app__type-container-button"
            type="button"
          >
            Arrivals
          </button>
          <img
            src="https://bit.ly/2xrC5Ri"
            alt="arrivals"
            className="app__type-container-img"
          />
        </div>
        <div className="app__date-container">
          <button
            type="button"
            onClick={() => this.setCurrentDay(YESTERDAY)}
            className="app__date-container-button"
          >
            Yesterday
          </button>
          <button
            type="button"
            onClick={() => this.setCurrentDay(TODAY)}
            className="app__date-container-button"
          >
            Today
          </button>
          <button
            type="button"
            onClick={() => this.setCurrentDay(TOMORROW)}
            className="app__date-container-button"
          >
            Tomorrow
          </button>
        </div>
        <h3>{`${currentPage}s for ${currentDay}`}</h3>
        <table className="app__table">
          <thead className="app__table-head">
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
            <Flights
              currentDay={currentDay}
              type={currentPage}
            />
          </tbody>
        </table>
      </div>
    );
  }
}

export default App;
