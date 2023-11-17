import React, { Component } from "react";
import { connect } from "react-redux";

import { loadWeather } from "../redux/actions/weatherActions";

import "./CityWeather.css";
import weatherImg from "../imgs/sunny.png";

class CityWeather extends Component {
  componentDidMount() {
    const { cityName, weatherData, loadWeather } = this.props;
    if (!weatherData) {
      loadWeather(cityName);
    }
  }

  render() {
    const { cityName, weatherData } = this.props;

    return (
      <div className="card">
        <div className="card-header">{cityName}</div>
        <div className="card-body">
          {weatherData && weatherData.main ? (
            <React.Fragment>
              <div className="colLeft">
                <img src={weatherImg} className="cardImg" alt="" />
              </div>
              <div className="colRight">
                <p>Temp: {parseInt(weatherData.main.temp)}&#176;</p>
                <p>Low: {parseInt(weatherData.main.temp_min)}&#176;</p>
                <p>High: {parseInt(weatherData.main.temp_max)}&#176;</p>
                <p>Humidity: {`${weatherData.main.humidity}`}</p>
              </div>
            </React.Fragment>
          ) : (
            <h4>Loading</h4>
          )}
        </div>
      </div>
    );
  }
}

CityWeather.defaultProps = {
  cityName: "",
  weatherData: null,
};

function mapStateToProps(state, ownProps) {
  return state.weathers.find((weather) => weather.city === ownProps.cityName);
}

function mapDispatchToProps(dispatch) {
  return {
    loadWeather: (cityName) => dispatch(loadWeather(cityName)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(CityWeather);
