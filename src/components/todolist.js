import React, { useState, useEffect } from 'react';
import Todo from './todo';

function TodoList() {
  let [todoListState, setTodoList] = useState({todoList:[{task: 'Dodaj swoje pierwsze zadanie!!', completed: false},{task: 'Wykonane zadanie!!', completed: true}], inputValue: "", error: ""});
  let { todoList, inputValue, error } = todoListState;

  

  const handleInputChange = (e) => {
    setTodoList({
      ...todoListState,
      inputValue: e.target.value
    })
  }

  const handleInputEnter = (e) => {
    if(e.key === "Enter") {
      handleAddClick();
    }
  }

  const handleAddClick = () => {
    if (!inputValue) return;

    if(todoList.some((todo)=> todo.task === inputValue)) {
      setTodoList({
        ...todoListState,
        error: "You have this task in your list!"
      })

      return;
    }
    setTodoList({
      todoList: [...todoList,{task: inputValue, completed: false}],
      inputValue: "",
      error: ""
    })
  }

  const handleDone = (task) => {
    setTodoList({
      ...todoListState
    })
    
    todoList.find((todo) => {
      if(todo.task === task) {
        todo.completed = !todo.completed;
      }
    })

    console.log(todoList)
  }

  const handleRemove = (task) => {
    setTodoList({
      ...todoListState,
      todoList: (todoList.filter((todo) => todo.task !== task))
    })
  }


  return (
    <div className="myTodoList">
      <input
        className="writeTask"
        placeholder= "What are we gonna do today?"
        onChange={handleInputChange}
        onKeyPress={handleInputEnter}
        value={inputValue}
      />
      <button 
        className="addTask"
        value="Add"
        onClick={handleAddClick}
      >
        +
      </button>
      
      {!!error &&
        <p className="error">{error}</p>
      }

      <span className="tasks">
        {todoList.map((todo, id) => {
          return todo.completed || 
          <Todo 
            todo={todo}
            key={id}
            handleDoneClick={handleDone}
            handleDeleteClick={handleRemove}
          />
        })}
      </span>
      <div className="done-list">
        {todoList.map((todo, id) => {
          return !todo.completed || 
          <Todo 
            todo={todo}
            key={id}
            handleDoneClick={handleDone}
            handleDeleteClick={handleRemove}
          />
          
        })}
      </div>
    </div>
  );
}

export default TodoList;