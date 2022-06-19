import React from 'react';

import './Tasks.scss';

// import MuiTabs from './/MuiTabs';

import MuiTabs from '../MuiTabs';

import Task from '../Task';
import { TaskTextTop, TaskNumber, TaskTextBottom } from '../Task/Task';

const Tasks = () => {
  return (
    <section className="tasks" id="tasks">
      <div className="tasks__container">
        <h2>
          Решайте любую задачу с системой мониторинга объектов Wialon
        </h2>
        <div className="tasks__tabs">
          <MuiTabs />
        </div>
        <div className="tasks__data">
          <Task>
            <TaskTextTop>более</TaskTextTop>
            <TaskNumber>2.6 млн</TaskNumber>
            <TaskTextBottom>подключенных объектов по всему миру</TaskTextBottom>
          </Task>
          <Task>
            <TaskTextTop>более</TaskTextTop>
            <TaskNumber>150 стран,</TaskNumber>
            <TaskTextBottom>где используется Wialon</TaskTextBottom>
          </Task>
          <Task>
            <TaskTextTop>более</TaskTextTop>
            <TaskNumber>695 тыс</TaskNumber>
            <TaskTextBottom>подключенных транспортных средств в России и СНГ</TaskTextBottom>
          </Task>
          <Task>
            <TaskTextTop>более</TaskTextTop>
            <TaskNumber>2.6 тыс</TaskNumber>
            <TaskTextBottom>моделей оборудования, с которыми работаем</TaskTextBottom>
          </Task>
        </div>
      </div>
    </section>
  )
}

export default Tasks;