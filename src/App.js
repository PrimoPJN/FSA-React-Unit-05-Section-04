import React, { Component } from "react";

import "./App.css";
import CityWeather from "./components/CityWeather";
import AddCity from "./components/AddCity";

import initialState from "./redux/reducers/initialState";

class App extends Component {
  state = {
    weathers: initialState.weathers,
  };

  // This function adds a City name to the current state.
  addCity = (newCityName) => {
    this.setState((prevState) => {
      return {
        weathers: [...prevState.weathers, { city: newCityName }],
      };
    });
  };

  render() {
    return (
      <div className="container">
        <div className="header">
          <h1>Primo Weather - React-Redux</h1>
        </div>
        <div className="content">
          <AddCity addCity={this.addCity} />
          <div className="listCities">
            {this.state.weathers.map((weather) => (
              <CityWeather key={weather.city} cityName={weather.city} />
            ))}
          </div>
        </div>
      </div>
    );
  }
}

export default App;
