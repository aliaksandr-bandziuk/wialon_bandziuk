import React, { useState, useEffect } from 'react';

import './GetCountryCity.scss';

const GetConurtyCity = () => {

  const [country, setCountry] = useState([]);
  const [countryId, setCountryId] = useState('');
  const [city, setCity] = useState([]);

  const [selected, setSelected] = useState('');
  const [disabled, setDisabled] = useState(true);

  useEffect( () => {
    const getCountry = async () => {
      const resCountry = await fetch('https://cs.wialon.com/svcs/regions/v1/countries?extended=1');
      const responseCountry = await resCountry.json();
      setCountry(await responseCountry);
    }
    getCountry();
  },[]);

  const handleCountry = (event) => {
    const getConurtyId = event.target.value;
    setCountryId(getConurtyId);

    setSelected(getConurtyId);
    setDisabled(false);
  }

  useEffect( () => {
    const getCity = async () => {
      const resCity = await fetch(`https://cs.wialon.com/svcs/regions/v1/cities?extended=1&country_id={${countryId}}`);
      const responseCity = await resCity.json();
      setCity(responseCity);
    }
    getCity();
  },[countryId]);

  let type = null;
  let options = null;

  if (selected.value !== "Выберите страну") {
    type = 'responseCountry';
  }

  if (type) {
    options = country.map( (item, index) => (
      <option key={index} value={item.id}>
        {item.name}
      </option>
    ))
  }

  return (
    <form className="form">
      <select className="form__select" onChange={ (e) => handleCountry(e)}>
        <option value="Выберите страну" disabled selected hidden>Выберите страну</option>
        {
          country.map( (item, index) => (
            <option key={index} value={item.id}>
              {item.name}
            </option>
          ))
        }
      </select>
      <select disabled={disabled} className="form__select">
        <option value="" disabled selected hidden>Выберите город</option>
        {
          city.map( (item, index) => (
            <option key={index} value={item.id}>
              {item.name}
            </option>
          ))
        }
      </select>
      <button type="submit" className='button__submit'>Найти офис</button>
    </form>
  )
}

export default GetConurtyCity;