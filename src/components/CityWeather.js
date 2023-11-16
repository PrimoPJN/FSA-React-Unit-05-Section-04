import React from 'react';

import './CityWeather.css';
import weatherImg from '../imgs/sunny.png';

const CityWeather = props => {
  const { cityName, currentTemp, lowTemp, highTemp, humidity } = props;

  return (
    <div class="card">
      <div class="card-header">{cityName} - {currentTemp}&#176;</div>
      <div class="card-body">
        <div className="colLeft">
          <img src={weatherImg} className="cardImg" alt="" />
        </div>
        <div className="colRight">
          <p>Low: {lowTemp}&#176;</p>
          <p>High: {highTemp}&#176;</p>
          <p>Humidity: {`${humidity}%`}</p>
        </div>
      </div>
    </div>
  );
};


CityWeather.defaultProps = {
  cityName: '',
  currentTemp: 68,
  lowTemp: 55,
  highTemp: 73,
  humidity: 20,
};

export default CityWeather;
