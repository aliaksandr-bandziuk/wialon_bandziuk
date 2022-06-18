import React, { Component } from "react";

import './DataApi.scss';

export default class DataApiCities extends Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      items: []
    };
  }

  componentDidMount() {
    fetch('https://cs.wialon.com/svcs/regions/v1/cities?country_id=%7BCOUNTRY_ID')
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
    if (error) {
      return <p>Ошибка связи: {error.message}</p>
    } else if (!isLoaded) {
      return <p>Загружаю города...</p>
    } else {
      return (
        <select>
          <option value="" disabled selected hidden>Выберите город</option>
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