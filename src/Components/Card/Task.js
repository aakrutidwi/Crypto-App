
import React from 'react';
import './Task.css';

function Task({ imageSrc, title, taskCount }) {
  return (
    <div className="task">
      <img className="task-img" src={imageSrc} alt={title} />
      <div className="task-info">
        <h3>{title}</h3>
        <p>{taskCount}Tasks</p>
      </div>
    </div>
  );
}

export default Task;
