export const getData = async(type) => {
  const currentDate = new Date()
    .toLocaleDateString('ru-RU')
    .replace(/[^0-9]/gi, '-');
  const url = `https://api.iev.aero/api/flights/${currentDate}`;
  const dataPromise = await fetch(url);
  const fetchedData = await dataPromise.json();

  return fetchedData.body[type];
};
