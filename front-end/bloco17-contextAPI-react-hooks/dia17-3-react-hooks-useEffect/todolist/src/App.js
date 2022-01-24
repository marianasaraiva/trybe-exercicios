import React from 'react';
import './App.css';
import TodoProvider from './component/Context/TodoProvider';
import InputTodo from './component/InputTodo';
import ListTodo from './component/ListTodo';

function App() {

  return (
    <main>
      <TodoProvider>
        <InputTodo />
        <ListTodo />
      </TodoProvider>
    </main>
  );
}

export default App;
