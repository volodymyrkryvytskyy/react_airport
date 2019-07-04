import React from 'react';

const FlightsTable = ({ flightsList }) => {
  const arrivalsTable = flightsList.map((flight) => {
    const localTime = new Date(flight.timeArrShedule || flight.timeDepShedule)
      .toTimeString()
      .slice(0, 5);
    return (
      <tr className="arrivals" key={Math.random() * 100}>
        <td>{flight.term}</td>
        <td>{localTime}</td>
        <td>{flight['airportFromID.city'] || flight['airportToID.city']}</td>
        <td>{flight.status}</td>
        <td>{flight.airline.ua.name}</td>
        <td>{flight.codeShareData['0'].icao + flight.fltNo}</td>
      </tr>
    );
  });

  return (arrivalsTable);
};

export default FlightsTable;
