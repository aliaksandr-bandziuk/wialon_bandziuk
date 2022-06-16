import React from 'react';

import './Tasks.scss';

import Task from '../Task';
import { TaskTextTop, TaskNumber, TaskTextBottom } from '../Task/Task';

const Tasks = () => {
  return (
    <section className="tasks">
      <div className="tasks__container">
        <h2>
          Решайте любую задачу с системой мониторинга автотранспорта Wialon
        </h2>
        <div className="tasks__data">
          <Task>
            <TaskTextTop>более</TaskTextTop>
            <TaskNumber>2.6 млн</TaskNumber>
            <TaskTextBottom>подключенных объектов по всему миру</TaskTextBottom>
          </Task>
          <Task>
            <TaskTextTop>более</TaskTextTop>
            <TaskNumber>690 тыс</TaskNumber>
            <TaskTextBottom>подключенных объектов в России и СНГ</TaskTextBottom>
          </Task>
          <Task>
            <TaskTextTop>более</TaskTextTop>
            <TaskNumber>2.2 тыс</TaskNumber>
            <TaskTextBottom>моделей оборудования, с которыми работаем</TaskTextBottom>
          </Task>
          <Task>
            <TaskTextTop>до</TaskTextTop>
            <TaskNumber>135 стран</TaskNumber>
            <TaskTextBottom>где используется Wialon</TaskTextBottom>
          </Task>
        </div>
      </div>
    </section>
  )
}

export default Tasks;