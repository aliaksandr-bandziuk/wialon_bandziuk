import React from 'react';
import { HashLink } from 'react-router-hash-link';

import './Description.scss';

import ButtonPrimary from '../ButtonPrimary';

const Description = () => {
  return (
    <section className="description" id="description">
      <div className="description__container">
        <div className="description__content content">
          <h1>
            Gps & Глонасс мониторинг c Wialon. Контроль любого транспорта
          </h1>
          <p>
            Одного решения может быть достаточно, чтобы снизили расходы на топливо, вовремя отправили транспорт на техническое обслуживание и ремонт, ввели систему контроля и поощрения водителей и получили доступ к нужной информации на одном экране. Это решение – Wialon.
          </p>
          <HashLink smooth to="#footer">
            <ButtonPrimary>
              Найти на карте
            </ButtonPrimary>
          </HashLink>
        </div>
      </div>
    </section>
  )
}

export default Description;