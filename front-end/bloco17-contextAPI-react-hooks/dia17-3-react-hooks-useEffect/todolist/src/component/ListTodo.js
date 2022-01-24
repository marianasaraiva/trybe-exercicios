import React from 'react';

function ListTodo({ todos }) {
  return (
    <ul>
      {
        todos.map((todo, index) => <li key={index}>{todo}</li>)
      }
    </ul>
  )
}

export default ListTodo;