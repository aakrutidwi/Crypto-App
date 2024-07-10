import React from 'react';
import './Header.css';
import Task from './Task';

function Header({ title, subtitle, xps, tasks = [],headerImage }) {
  return (
    <div className="container">
      <div className="header">
      <img src={headerImage} className="header-img" alt="" />
        <div className="header-text">
          <h1>{title}</h1>
          <p>{subtitle}</p>
          <p className="xps">{xps} XPs</p>
        </div>
      </div>

      <div className="task-list">
        {tasks.map((task, index) => (
          <Task
            key={index}
            
            imageSrc={task.imageSrc}
            title={task.title}
            taskCount={task.taskCount}
          />
        ))}
      </div>
    </div>
  );
}

export default Header;
