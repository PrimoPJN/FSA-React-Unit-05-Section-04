import * as types from "../actions/actionTypes";
import initialState from "./initialState";

export default function weathersReducer(state = initialState.weathers, action) {
  switch (action.type) {
    case types.ADD_CITY_SUCCESS:
      return [...state, { ...action, city: action.id }];

    case types.LOAD_WEATHER_SUCCESS:
      return state.map((weather) => {
        if (weather.city === action.id) {
          return {
            ...weather,
            city: action.id,
            weatherData: action.data,
          };
        }
        return weather;
      });

    default:
      return state;
  }
}
