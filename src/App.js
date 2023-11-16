import React, { Component } from 'react';

import './App.css';
import CityWeather from './components/CityWeather';
import AddCity from './components/AddCity'

class App extends Component {
  state = {
    cities: ['New York', 'Chennai', 'Monterrey', 'São Paulo', 'Rio de Janeiro'],
  };

  // This function adds a City name to the current state.
  addCity = newCityName => {
    this.setState(prevState => {
      return {
        cities: [...prevState.cities, newCityName],
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
            {
              this.state.cities.map(city => (
                <CityWeather cityName={city} />
              ))
            }
          </div>
        </div>
      </div>
    );
  }
}

export default App;
