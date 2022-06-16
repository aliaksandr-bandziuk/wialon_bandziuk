import React from 'react';

import './Task.scss';

const Task = props => {
  return (
    <div className='task'>
      {props.children}
      {/* <p className="task__text">
        {props.children}
      </p>
      <p className="task__number">
        {props.children}
      </p>
      <p className="task__text">
        {props.children}
      </p> */}
    </div>
  )
}

export default Task;

export const TaskTextTop = props => {
  return (
    <p className="task__text">
      {props.children}
    </p>
  )
}

export const TaskNumber = props => {
  return (
    <p className="task__number">
      {props.children}
    </p>
  )
}

export const TaskTextBottom = props => {
  return (
    <p className="task__text">
      {props.children}
    </p>
  )
}
