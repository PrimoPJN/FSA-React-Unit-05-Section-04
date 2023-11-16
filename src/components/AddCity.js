import React, { Component } from 'react';

export default class AddCity extends Component {
  state = { inputValue: '', };

  handleChange = event => {
    const inputValue = event.target.value;
    this.setState({ inputValue });
  };

  handleSubmit = event => {
    event.preventDefault();
    this.props.addCity(this.state.inputValue);
    this.setState({ inputValue: '' });
  };

  render() {
    const { inputValue } = this.state;

    return (
      <div className="addCities">
        <form id="addCity" onSubmit={this.handleSubmit}>
          <input type="text" name="_addCity"
            value={inputValue} 
            onChange={this.handleChange} 
            placeholder="Enter City"
          ></input>
        </form>
      </div>
    );
  }
}
