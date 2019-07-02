import React, { Component } from 'react';
import './App.css';
import Arrivals from './Arrivals';
import Departures from './Departures';

class App extends Component {
  constructor() {
    super();
    this.state = {
      currentPage: 'Arrivals',
      currentDay: 'Today',
    };
  }

  handleClick(eventClick) {
    eventClick.persist();
    this.setState({ currentPage: eventClick.target.textContent });
  }

  render() {
    const { currentDay, currentPage } = this.state;
    return (
      <div className="App">
        <div className="typeContainer">
          <img
            src="https://bit.ly/2YB0YpL"
            alt="departures"
            className="departureImg"
          />
          <button
            onClick={eventClick => this.handleClick(eventClick)}
            className="typeButton"
            type="submit"
          >
            Departures
          </button>
          <button
            onClick={eventClick => this.handleClick(eventClick)}
            className="typeButton"
            type="submit"
          >
            Arrivals
          </button>
          <img
            src="https://bit.ly/2xrC5Ri"
            alt="arrivals"
            className="arrivalImg"
          />
        </div>
        <div className="pickADate">
          <button
            type="submit"
            onClick={() => this.setState({ currentDay: 'Yesterday' })}
            className="dateButton"
          >
            Yesterday
          </button>
          <button
            type="submit"
            onClick={() => this.setState({ currentDay: 'Today' })}
            className="dateButton"
          >
            Today
          </button>
          <button
            type="submit"
            onClick={() => this.setState({ currentDay: 'Tomorrow' })}
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
            {currentPage === 'Arrivals' ? (
              <Arrivals currentDay={currentDay} />
            ) : (
              <Departures currentDay={currentDay} />
            )}
          </tbody>
        </table>
      </div>
    );
  }
}

export default App;
