import React, { useState } from 'react';
import './App.css';
import InputTodo from './component/InputTodo';
import ListTodo from './component/ListTodo';

function App() {
  const [todos, setTodos] = useState([]);

  const addTodo = (newTodo) => {
    setTodos(todos.concat(newTodo));
  }

  return (
    <div>
      <InputTodo addTodo={addTodo} />
      <ListTodo todos={todos} />
    </div>
  );
}

export default App;
