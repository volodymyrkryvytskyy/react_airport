import React, { Component } from 'react';
import PropTypes from 'prop-types';
import FlightsTable from './FlightsTable';
import getData from './service';
import flightsData from './helper';

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
    const { currentDay, dateMap, type } = this.props;
    const departuresData = flightsData(departure, dateMap, currentDay);

    return <FlightsTable flightsList={departuresData} pageType={type} />;
  }
}

Departures.propTypes = {
  currentDay: PropTypes.string.isRequired,
  dateMap: PropTypes.objectOf(PropTypes.number).isRequired,
  type: PropTypes.string.isRequired,
};

export default Departures;
