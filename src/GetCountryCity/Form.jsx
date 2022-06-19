// import React, { useState } from 'react';

// import './GetCountryCity.scss';

// import GetConurtyCity from './GetConurtyCity';

// // import DataApiCountries from '../DataApi/DataApiCountries.jsx';
// // import DataApiCities from '../DataApi/DataApiCities.jsx';

// import ButtonPrimary from '../ButtonPrimary';

// const countriesData = [
//   {
//     name: "Germany",
//     states: ["Duesseldorf", "Leinfelden-Echterdingen", "Eschborn"]
//   },
//   {
//     name: "India",
//     states: ["Delhi", "Kolkata", "Mumbai", "Bangalore"]
//   },
//   {
//     name: "France",
//     states: ["Auvergne", "Bretagne", "Corse", "Centre"]
//   }
// ];

// const Form = () => {

//   const [{ country, state }, setData] = useState({
//     country: "Germany",
//     state: ""
//   });

//   const countries = countriesData.map((country) => (
//     <option key={country.name} value={country.name}>
//       {country.name}
//     </option>
//   ));

//   const states = countriesData.find(item => item.name === country)?.states.map((state) => (
//     <option key={state} value={state}>
//       {state}
//     </option>
//   ));

//   function handleCountryChange(event) {
//     setData(data => ({ state: '', country: event.target.value }));
//   }

//   function handleStateChange(event) {
//     setData(data => ({ ...data, state: event.target.value }));
//   }

//   return (
//     <form onSubmit={() => console.log("Submitted")} className="form">
//       {/* <DataApiCountries />
//       <DataApiCities /> */}

//       {/* check */}
//       {/* <select value={state} onChange={handleStateChange} name="city" id="city" className="form__select">
//         <option value="" disabled selected hidden>Выберите город</option>
//         {states}
//       </select>
//       <select value={state} onChange={handleStateChange} name="city" id="city" className="form__select">
//         <option value="" disabled selected hidden>Выберите город</option>
//         {states}
//       </select> */}
//       {/* check */}
//       <GetConurtyCity />
//       <button type="submit" className='button__submit'>
//         <ButtonPrimary>Найти офис</ButtonPrimary>
//       </button>
//     </form>
//   )
// }

// export default Form;