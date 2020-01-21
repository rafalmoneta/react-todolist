import React from 'react';

function Todo(props) {
  const {todo, handleDoneClick, handleDeleteClick} = props;
  
  return (
    <div className="todo">
      {todo.task}
      <button
        className="done"
        onClick={() => handleDoneClick(todo.task)}
      >
      ✔
      </button>
      <button
        className="remove"
        onClick={() => handleDeleteClick(todo.task)}
      >
      ✖
      </button>
    </div>
  );
}

export default Todo;