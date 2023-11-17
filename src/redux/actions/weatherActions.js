import * as types from "./actionTypes";
import { getWeatherByCity } from "../../api/OpenWeatherMapAPI";

export const addCity = (city) => ({ type: types.ADD_CITY_SUCCESS, id: city });

export const loadWeatherSuccess = (city, weatherData) => ({
  type: types.LOAD_WEATHER_SUCCESS,
  id: city,
  data: weatherData,
});

export function loadWeather(city) {
  return function (dispatch) {
    return getWeatherByCity(city)
      .then((data) => {
        dispatch(loadWeatherSuccess(city, data));
      })
      .catch((error) => {
        throw error;
      });
  };
}
