
const flightsData = (flights, map, day) => {
  const data = flights.filter((flight) => {
    const flightDate = new Date(flight.timeDepShedule || flight.timeToStand)
      .toLocaleDateString('ru-RU');
    const lookupDate = new Date();
    const currentDayCheck = (checkMap, checkDay) => {
      if (Object.prototype.hasOwnProperty.call(checkMap, checkDay)) {
        lookupDate.setDate(lookupDate.getDate() + checkMap[checkDay]);
      }
    };

    currentDayCheck(map, day);

    return flightDate.slice(0, 2)
      === lookupDate.toLocaleDateString('ru-Ru').slice(0, 2);
  });
  return data;
};

export default flightsData;
