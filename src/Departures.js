import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Departures extends Component {
  constructor(props) {
    super(props);
    this.state = {
      departure: [],
    };
    this.getData();
  }

  async getData() {
    const stringCurrentDate = new Date()
      .toLocaleDateString('ru-RU')
      .replace(/[^0-9]/gi, '-');
    const url = `https://api.iev.aero/api/flights/${stringCurrentDate}`;
    const dataPromise = await fetch(url);
    const fetchedData = await dataPromise.json();
    this.setState({
      departure: [...fetchedData.body.departure],
    });
  }

  render() {
    const { departure } = this.state;
    const { currentDay } = this.props;
    const departuresData = [...departure]
      .filter((flight) => {
        const departureDate = new Date(
          flight.timeDepShedule
        ).toLocaleDateString('ru-RU');
        const lookupDate = new Date();
        if (currentDay === 'Yesterday') {
          lookupDate.setDate(lookupDate.getDate() - 1);

          return (
            departureDate.slice(0, 5)
            === lookupDate.toLocaleDateString('ru-Ru').slice(0, 5)
          );
        }
        if (currentDay === 'Today') {
          return (
            departureDate.slice(0, 5)
            === lookupDate.toLocaleDateString('ru-Ru').slice(0, 5)
          );
        }
        if (currentDay === 'Tomorrow') {
          lookupDate.setDate(lookupDate.getDate() + 1);

          return (
            departureDate.slice(0, 5)
            === lookupDate.toLocaleDateString('ru-Ru').slice(0, 5)
          );
        }

        return flight;
      })
      .map((flight) => {
        const localTime = new Date(flight.timeDepShedule)
          .toTimeString()
          .match(/\b[0-1][0-9]:[0-5][0-9]\b|\b2[0-3]:[0-5][0-9]\b/);

        return (
          <tr className="departures">
            <td>{flight.term}</td>
            <td>{localTime}</td>
            <td>{flight['airportToID.city']}</td>
            <td>{flight.status}</td>
            <td>{flight.airline.ua.name}</td>
            <td>{flight.codeShareData['0'].icao + flight.fltNo}</td>
          </tr>
        );
      });

    return departuresData;
  }
}

Departures.propTypes = {
  currentDay: PropTypes.string,
};

Departures.defaultProps = {
  currentDay: 'Today',
};

export default Departures;
