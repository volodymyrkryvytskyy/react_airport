import React, { Component } from 'react';
import PropTypes from 'prop-types';
import FlightsTable from './FlightsTable';
import getData from './service';
import flightsData from './helper';

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
    const { currentDay, dateMap, type } = this.props;
    const arrivalsData = flightsData(arrival, dateMap, currentDay);

    return <FlightsTable flightsList={arrivalsData} pageType={type} />;
  }
}

Arrivals.propTypes = {
  currentDay: PropTypes.string.isRequired,
  dateMap: PropTypes.objectOf(PropTypes.number).isRequired,
  type: PropTypes.string.isRequired,
};

export default Arrivals;
