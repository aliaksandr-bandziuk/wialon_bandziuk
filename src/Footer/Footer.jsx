import React from 'react';

import './Footer.scss';

import YMap from '../YMap';
import Form from '../Form';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__container">
        <h2>Найти офис в своем регионе</h2>
      </div>
      <div className="footer__wrapper">
        <div className="footer__map map">
          <YMap />
          <div className="map__search">
            <Form />
          </div>
        </div>
      </div>
      
    </footer>
  )
}

export default Footer;