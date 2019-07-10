
const flightsData = (flights, map, day) => {
  const data = flights.filter((flight) => {
    const flightDate = new Date(flight.timeDepShedule || flight.timeToStand);
    const lookupDate = new Date();
    const currentDayCheck = (checkMap, checkDay) => {
      lookupDate.setDate(lookupDate.getDate() + checkMap[checkDay]);
    };

    currentDayCheck(map, day);

    return flightDate.getDate() === lookupDate.getDate();
  });
  return data;
};

export default flightsData;
