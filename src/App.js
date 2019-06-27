import React, { Component } from "react";
import "./App.css";
import Arrivals from "./Arrivals";
import Departures from "./Departures";

class App extends Component {
  constructor() {
    super()
    this.state = {
      currentPage: 'Arrivals'
    }
    this.handleClick = this.handleClick.bind(this)
  }
  

  handleClick(event) {
    event.persist();
    this.setState({currentPage: event.target.textContent})
  }

  render() {
    return (
      <div className="App">
        <button onClick={this.handleClick}>Departures</button>
        <button onClick={this.handleClick}>Arrivals</button>
        <table className="AppTable">
          <thead>
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
            {this.state.currentPage === 'Arrivals' ? <Arrivals /> : <Departures />}
          </tbody>
        </table>
      </div>
    );
  }
}

export default App;
