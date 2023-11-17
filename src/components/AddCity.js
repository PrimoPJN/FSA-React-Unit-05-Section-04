import React, { Component } from "react";
import { connect } from "react-redux";

import * as weatherActions from "../redux/actions/weatherActions";

class AddCity extends Component {
  state = { weather: { city: "" } };

  handleChange = (event) => {
    const weather = { ...this.state.weather, city: event.target.value };
    this.setState({ weather });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    this.props.dispatch(weatherActions.addCity(this.state.weather.city));

    this.props.addCity(this.state.weather.city);

    this.setState({ weather: { city: "" } });
  };

  render() {
    return (
      <div className="addCities">
        <form id="addCity" onSubmit={this.handleSubmit}>
          <input
            type="text"
            name="_addCity"
            value={this.state.weather.city}
            onChange={this.handleChange}
            placeholder="Enter City"
          ></input>
        </form>
      </div>
    );
  }
}

function mapStateToProps(state, ownProps) {
  return { weathers: state.weathers };
}

export default connect(mapStateToProps)(AddCity);
