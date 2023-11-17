const API_KEY = "5cfa476d636f9e4cb33e1ea0a9ab58b4"; //process.env.REACT_APP_OWM_API_KEY;
const baseUrl = "http://api.openweathermap.org";

export async function getWeatherByCityAsync(city) {
  const response = await fetch(
    `${baseUrl}/data/2.5/weather?q=${city}&units=imperial&appid=${API_KEY}`
  );
  const data = await response.json();
  return data;
}
export const getWeatherByCity = (city) =>
  fetch(`${baseUrl}/data/2.5/weather?q=${city}&units=imperial&appid=${API_KEY}`)
    .then((response) => {
      if (!response.ok) {
        throw Error(response.statusText);
      }
      return response;
    })
    .then((response) => {
      return response.json();
    });
