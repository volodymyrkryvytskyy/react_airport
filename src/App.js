import React, { Component } from "react";
import "./App.css";
import Arrivals from "./Arrivals";
import Departures from "./Departures";

class App extends Component {
  constructor() {
    super()
    this.state = {
      currentPage: 'Arrivals',
      currentDay: 'Today'
    }
  }

  handleClick = (event) => {
    event.persist();
    this.setState({currentPage: event.target.textContent})
  }

  render() {
    return (
      <div className="App">
        <div className="typeContainer">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/2/23/Flugzeug_mit_Nase_nach_oben.svg"
          alt="departures"
          className="departureImg"
        />
        <button onClick={this.handleClick} className="typeButton">Departures</button>
        <button onClick={this.handleClick} className="typeButton">Arrivals</button>
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/0/03/Flugzeug_mit_Nase_nach_unten.svg"
          alt="arrivals"
          className="arrivalImg"
        />
        </div>
        <div className="pickADate">
          <button
            onClick={() => this.setState({ currentDay: 'Yesterday' })}
            className='dateButton'
          >
            Yesterday
          </button>
          <button
            onClick={() => this.setState({ currentDay: 'Today' })}
            className='dateButton'
          >
            Today
          </button>
          <button
            onClick={() => this.setState({ currentDay: 'Tomorrow' })}
            className='dateButton'
          >
            Tomorrow
          </button>
        </div>
        <h3>{this.state.currentPage + ` for ` + this.state.currentDay}</h3>
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
            {this.state.currentPage === 'Arrivals'
              ? <Arrivals currentDay={this.state.currentDay} />
              : <Departures currentDay={this.state.currentDay} />}
          </tbody>
        </table>
      </div>
    );
  }
}

export default App;
