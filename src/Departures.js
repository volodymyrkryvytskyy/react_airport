import React, { Component } from 'react';
import PropTypes from 'prop-types';
import FlightsTable from './FlightsTable';
import { getData } from './service';

class Departures extends Component {
  constructor(props) {
    super(props);
    this.state = {
      departure: [],
    };
    this.takeData();
  }

  async takeData() {
    const fetchedDeparture = await getData('departure');

    this.setState({ departure: fetchedDeparture });
  }

  render() {
    const { departure } = this.state;
    const { currentDay, dateMap } = this.props;
    const departuresData = departure.filter((flight) => {
      const departureDate = new Date(
        flight.timeDepShedule
      ).toLocaleDateString('ru-RU');
      const lookupDate = new Date();

      const currentDayCheck = (day) => {
        if (dateMap.hasOwnProperty(day)) {
          lookupDate.setDate(lookupDate.getDate() + dateMap[day]);
        }
      };
      currentDayCheck(currentDay);

      return (
        departureDate.slice(0, 5)
        === lookupDate.toLocaleDateString('ru-Ru').slice(0, 5)
      );
    });

    return <FlightsTable flightsList={departuresData} />;
  }
}

Departures.propTypes = {
  currentDay: PropTypes.string.isRequired,
  dateMap: PropTypes.object.isRequired,
};

export default Departures;
