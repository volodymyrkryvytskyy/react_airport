import React, { Component } from 'react';
import PropTypes from 'prop-types';
import FlightsTable from './FlightsTable';
import flightsData from './helper';
import getData from './service';

class Arrivals extends Component {
  constructor(props) {
    super(props);
    this.state = {
      arrival: [],
      arrivalsData: [],
    };
  }

  componentDidMount() {
    this.takeData();
  }

  componentDidUpdate(prevProps) {
    const { currentDay, dateMap } = this.props;
    if (currentDay !== prevProps.currentDay) {
      this.setState((prevState) => {
        return {
          arrivalsData: flightsData(prevState.arrival, dateMap, currentDay),
        };
      });
    }
  }

  async takeData() {
    const { arrival } = await getData();
    const { currentDay, dateMap } = this.props;
    this.setState({
      arrival,
      arrivalsData: flightsData(arrival, dateMap, currentDay),
    });
  }

  render() {
    const { type } = this.props;
    const { arrivalsData } = this.state;

    return <FlightsTable flightsList={arrivalsData} pageType={type} />;
  }
}

Arrivals.propTypes = {
  currentDay: PropTypes.string.isRequired,
  dateMap: PropTypes.objectOf(PropTypes.number).isRequired,
  type: PropTypes.string.isRequired,
};

export default Arrivals;
