import React, { useContext } from 'react';
import TodoContext from './Context/TodoContext';

function ListTodo() {
  const { todos } = useContext(TodoContext);
  return (
        <ul>
        { todos.map((todo, index) => <li key={index}>{todo}</li>) }
        </ul>
  )
}

export default ListTodo;