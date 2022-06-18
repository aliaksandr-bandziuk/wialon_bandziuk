import React, { useState, useEffect } from 'react';

import './GetCountryCity.scss';

const GetConurtyCity = () => {

  const [country, setCountry] = useState([]);
  const [countryId, setCountryId] = useState('');
  const [city, setCity] = useState([]);

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
  }

  useEffect( () => {
    const getCity = async () => {
      const resCity = await fetch(`https://cs.wialon.com/svcs/regions/v1/cities?extended=1&country_id={${countryId}}`);
      const responseCity = await resCity.json();
      setCity(responseCity);
    }
    getCity();
  },[countryId]);

  return (
    <form className="form">
      <select className="form__select" onChange={ (e) => handleCountry(e)}>
        <option value="" disabled selected hidden>Выберите страну</option>
        {
          country.map( (item, index) => (
            <option key={index} value={item.id}>
              {item.name}
            </option>
          ))
        }
      </select>
      <select className="form__select">
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