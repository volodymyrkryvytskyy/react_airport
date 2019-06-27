import React, { Component } from 'react'

class Departures extends Component {
  constructor(props) {
    super(props)
    this.getData()
    this.state = {
      departure: []
    }
  }

  async getData() {
    const currentDate = new Date().toLocaleDateString('ru-RU').replace(/[^0-9]/gi, '-');
    const url = `https://api.iev.aero/api/flights/${currentDate}`
    const dataPromise = await fetch(url);
    const fetchedData = await dataPromise.json();
    this.setState({
      departure : [...fetchedData.body.departure]
    })
  }


  render() {
    const departuresData = [...this.state.departure]
      .map(flight => {
        const localTime = new Date(flight.timeDepShedule)
          .toTimeString()
          .match(/\b[0-1][0-9]:[0-5][0-9]\b|\b2[0-3]:[0-5][0-9]\b/);
      return (
        <tr className="departures">
          <td>{flight.term}</td>
          <td>{localTime}</td>
          <td>{flight["airportToID.city"]}</td>
          <td>{flight.status}</td>
          <td>{flight.airline.ua.name}</td>
          <td>{flight['codeShareData']['0']['icao']+flight.fltNo}</td>

        </tr>
      )
      })
    return (
      departuresData
    )
  }
}

export default Departures