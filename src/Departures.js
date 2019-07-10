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
      departuresData: [],
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
          departuresData: flightsData(prevState.departure, dateMap, currentDay),
        };
      });
    }
  }

  async takeData() {
    const { departure } = await getData();
    const { currentDay, dateMap } = this.props;
    this.setState({
      departure,
      departuresData: flightsData(departure, dateMap, currentDay),
    });
  }

  render() {
    const { type } = this.props;
    const { departuresData } = this.state;

    return <FlightsTable flightsList={departuresData} pageType={type} />;
  }
}

Departures.propTypes = {
  currentDay: PropTypes.string.isRequired,
  dateMap: PropTypes.objectOf(PropTypes.number).isRequired,
  type: PropTypes.string.isRequired,
};

export default Departures;
