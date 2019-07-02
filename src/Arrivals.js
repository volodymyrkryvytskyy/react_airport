import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Arrivals extends Component {
  constructor(props) {
    super(props);
    this.getData();
    this.state = {
      arrivals: [],
    };
  }

  async getData() {
    const currentDate = new Date()
      .toLocaleDateString('ru-RU')
      .replace(/[^0-9]/gi, '-');
    const url = `https://api.iev.aero/api/flights/${currentDate}`;
    const dataPromise = await fetch(url);
    const fetchedData = await dataPromise.json();
    this.setState({
      arrivals: [...fetchedData.body.arrival],
    });
  }

  render() {
    const { arrivals } = this.state;
    const { currentDay } = this.props;
    const arrivalsData = [...arrivals]
      .filter((flight) => {
        const arrivalDate = new Date(flight.timeArrShedule).toLocaleDateString(
          'ru-RU'
        );
        const lookupDate = new Date();
        if (currentDay === 'Yesterday') {
          lookupDate.setDate(lookupDate.getDate() - 1);

          return (
            arrivalDate.slice(0, 5)
            === lookupDate.toLocaleDateString('ru-Ru').slice(0, 5)
          );
        }
        if (currentDay === 'Today') {
          return (
            arrivalDate.slice(0, 5)
            === lookupDate.toLocaleDateString('ru-Ru').slice(0, 5)
          );
        }
        if (currentDay === 'Tomorrow') {
          lookupDate.setDate(lookupDate.getDate() + 1);

          return (
            arrivalDate.slice(0, 5)
            === lookupDate.toLocaleDateString('ru-Ru').slice(0, 5)
          );
        }

        return flight;
      })
      .map((flight) => {
        const localTime = new Date(flight.timeArrShedule)
          .toTimeString()
          .match(/\b[0-1][0-9]:[0-5][0-9]\b|\b2[0-3]:[0-5][0-9]\b/);
        return (
          <tr className="arrivals">
            <td>{flight.term}</td>
            <td>{localTime}</td>
            <td>{flight['airportFromID.city']}</td>
            <td>{flight.status}</td>
            <td>{flight.airline.ua.name}</td>
            <td>{flight.codeShareData['0'].icao + flight.fltNo}</td>
          </tr>
        );
      });
    return arrivalsData;
  }
}

Arrivals.propTypes = {
  currentDay: PropTypes.string,
};

Arrivals.defaultProps = {
  currentDay: 'Today',
};

export default Arrivals;
