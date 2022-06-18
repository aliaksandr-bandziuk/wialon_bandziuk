import React, { Component } from "react";

import './DataApi.scss';

export default class DataApiCountries extends Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      items: []
    };
  }

  componentDidMount() {
    fetch('https://cs.wialon.com/svcs/regions/v1/countries?extended=1')
      .then(res => res.json())
      .then(
        (result) => {
          this.setState({
            isLoaded: true,
            items: result
          });
        },
        (error) => {
          this.setState({
            isLoaded: true,
            error
          });
        }
      )
  }

  render() {
    const { error, isLoaded, items } = this.state;
    let id = items.map(item => item.id);
    console.log(id);
    if (error) {
      return <p>Ошибка связи: {error.message}</p>
    } else if (!isLoaded) {
      return <p>Загружаю страны...</p>
    } else {
      return (
        <select>
          <option value="" disabled selected hidden>Выберите страну</option>
          {items.map(item => (
            <option key={item.name}>
              {item.name}
            </option>
          ))}
        </select>
      )
    }
  }

}