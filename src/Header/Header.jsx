import React from 'react'

import './Header.scss';

import ButtonPrimary from '../ButtonPrimary';
import ButtonSecondary from '../ButtonSecondary';

import logo from '../images/wialon_logo.svg';

const Header = () => {
  return (
    <header className="header">
      <div className="container">
        <nav className="navbar">
          <div className="navbar__wrapper">
            <input type="checkbox" />
            <div className="hamburger-lines">
              <span className="line line1"></span>
              <span className="line line2"></span>
              <span className="line line3"></span>
            </div>
            <div className="menu__items">
              <ul className="menu__items-data">
                <li className="menu__item">
                  <a href="#">Система Wialon</a>
                </li>
                <li className="menu__item menu__item-note">
                  <a href="#">Сферы</a>
                </li>
                <li className="menu__item menu__item-note">
                  <a href="#">Проекты</a>
                </li>
                <li className="menu__item menu__item-note">
                  <a href="#">Решения</a>
                </li>
                <li className="menu__item menu__item-note">
                  <a href="#">Контакты</a>
                </li>
              </ul>
              <div className="menu__items-data buttons">
                <ButtonSecondary>
                  Получить демо
                </ButtonSecondary>
                <ButtonPrimary>
                  Заказать
                </ButtonPrimary>
                {/* <div className="menu__item menu__item-select dropdown">
                  <p><a href="#">Payments</a></p>
                  <div className="dropdown__content">
                    <a href="#">About Us</a>
                    <a href="#">Blog</a>
                    <a href="#">Contacts</a>
                  </div>
                </div> */}
              </div>
            </div>
            <a className="logo" href="#"><img src={logo} alt="Wialon logo" /></a>
          </div>
        </nav>
      </div>
    </header>
  )
}

export default Header