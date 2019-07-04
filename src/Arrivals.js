import React, { Component } from 'react';
import PropTypes from 'prop-types';
import FlightsTable from './FlightsTable';
import { getData } from './service';

class Arrivals extends Component {
  constructor(props) {
    super(props);
    this.takeData();
    this.state = {
      arrival: [],
    };
  }

  async takeData() {
    const fetchedArrival = await getData('arrival');

    this.setState({ arrival: fetchedArrival });
  }

  render() {
    const { arrival } = this.state;
    const { currentDay, dateMap } = this.props;
    const arrivalsData = arrival.filter((flight) => {
      const arrivalDate = new Date(flight.timeArrShedule)
        .toLocaleDateString('ru-RU');
      const lookupDate = new Date();

      const currentDayCheck = (day) => {
        if (dateMap.hasOwnProperty(day)) {
          lookupDate.setDate(lookupDate.getDate() + dateMap[day]);
        }
      };
      currentDayCheck(currentDay);

      return (
        arrivalDate.slice(0, 5)
        === lookupDate.toLocaleDateString('ru-Ru').slice(0, 5)
      );
    });
    return (
      <FlightsTable
        flightsList={arrivalsData}
      />
    );
  }
}

Arrivals.propTypes = {
  currentDay: PropTypes.string.isRequired,
  dateMap: PropTypes.object.isRequired,
};

export default Arrivals;
