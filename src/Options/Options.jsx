import React from 'react';

import './Options.scss';

import trackers from '../images/trackers.png';
import icon1 from '../images/icon1.png';
import icon2 from '../images/icon2.png';
import icon3 from '../images/icon3.png';
import icon4 from '../images/icon4.png';
import icon5 from '../images/icon5.png';
import icon6 from '../images/icon6.png';

const Options = () => {
  return (
    <section className="options">
      <div className="options__container">
        <div className="options__content content">
          <div className="content__text">
            <h2>Как работает Wialon с GPS/ГЛОНАСС оборудованием</h2>
            <p>
              С системой Wialon интегрировано более 2600 моделей оборудования. И мы постоянно увеличиваем их количество, чтобы вы могли пользоваться трекерами и датчиками от любого производителя, а также перейти на Wialon с тем оборудованием, которое у вас уже есть.
            </p>
          </div>
          <div className="content__pic">
            <img src={trackers} alt="Трекеры Wialon" />
          </div>
        </div>
        <div className="options__trackers trackers">
          <div className="tracker">
            <img src={icon1} alt="GPS/ГЛОНАСС трекеры" />
            <h3>GPS/ГЛОНАСС трекеры</h3>
            <p>
              Контроль всех типов транспортных средств 24/7
            </p>
          </div>
          <div className="tracker">
            <img src={icon2} alt="Видеомониторинг" />
            <h3>Видеомониторинг</h3>
            <p>
              Передача данных с камер и видеорегистраторов в режиме реального времени</p>
          </div>
          <div className="tracker">
            <img src={icon3} alt="ПО для смартфонов" />
            <h3>ПО для смартфонов</h3>
            <p>
              Основной функционал Wialon на экране смартфона. Приложение WiaTag для превращение мобильного устройства в GPS-трекер
            </p>
          </div>
          <div className="tracker">
            <img src={icon4} alt="Персональные трекеры" />
            <h3>Персональные трекеры</h3>
            <p>
              Для контроля удаленных сотрудников и выездных специалистов
            </p>
          </div>
          <div className="tracker">
            <img src={icon5} alt="Тахографы" />
            <h3>Тахографы</h3>
            <p>
              Регистрация данных по активности водителя и соблюдению режима труда и отдыха
            </p>
          </div>
          <div className="tracker">
            <img src={icon6} alt="OBD-трекеры" />
            <h3>OBD-трекеры</h3>
            <p>
              Получение данных с бортового компьютера
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Options;