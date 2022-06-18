import React, { useState, Component } from 'react';

// import './Form.scss';

import DataApiCountries from '../DataApi/DataApiCountries.jsx';
import DataApiCities from '../DataApi/DataApiCities.jsx';

import ButtonPrimary from '../ButtonPrimary';

export class DataApiStates extends Component {
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
    let country = items.map(item => item.name);
    console.log(id);
    console.log('country', country);

    const countriesData = [
      {
        name: country,
        states: ["Duesseldorf", "Leinfelden-Echterdingen", "Eschborn"]
      }
    ];

    console.log('countriesData', countriesData);

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

const countriesData = [
  {
    name: "Germany",
    states: ["Duesseldorf", "Leinfelden-Echterdingen", "Eschborn"]
  },
  {
    name: "India",
    states: ["Delhi", "Kolkata", "Mumbai", "Bangalore"]
  },
  {
    name: "France",
    states: ["Auvergne", "Bretagne", "Corse", "Centre"]
  }
];

const Form = () => {

  const [{ country, state }, setData] = useState({
    country: "Germany",
    state: ""
  });

  const countries = countriesData.map((country) => (
    <option key={country.name} value={country.name}>
      {country.name}
    </option>
  ));

  const states = countriesData.find(item => item.name === country)?.states.map((state) => (
    <option key={state} value={state}>
      {state}
    </option>
  ));

  function handleCountryChange(event) {
    setData(data => ({ state: '', country: event.target.value }));
  }

  function handleStateChange(event) {
    setData(data => ({ ...data, state: event.target.value }));
  }

  return (
    <form onSubmit={() => console.log("Submitted")} className="form">
      <DataApiCountries />
      <DataApiCities />

      {/* check */}
      <select value={country} onChange={handleStateChange} name="country" id="country" className="form__select">
        <option value="" disabled selected hidden>Выберите страну</option>
        {countries}
      </select>
      <select value={state} onChange={handleStateChange} name="city" id="city" className="form__select">
        <option value="" disabled selected hidden>Выберите город</option>
        {states}
      </select>
      {/* check */}

      <button type="submit">
        <ButtonPrimary>Найти офис</ButtonPrimary>
      </button>
    </form>
  )
}

export default Form;