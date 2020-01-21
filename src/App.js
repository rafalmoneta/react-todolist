import React from 'react';
import "./App.css"
import "./styles/todolist.css"
import "./styles/todo.css"
import "./styles/error.css"
import "./styles/doneList.css"

import TodoList from "./components/todolist"


function App() {
  return (
    <div className="App">
      <TodoList />
    </div>
  );
}

export default App;
