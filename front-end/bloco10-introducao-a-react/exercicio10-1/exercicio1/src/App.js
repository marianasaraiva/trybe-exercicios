import React, { Component } from 'react'
import './App.css';

const Task = (value) => {
  return (
    <li key={value}>{value}</li>
  );
}

const tarefa =  ['Estudar', 'Ler', 'Programar', 'Aprender', 'Repetir'];

class App extends Component {
  render() {
    return (
      <p>{ tarefa.map((tar)=> Task(tar)) }</p>
    );
  }
}


export default App;
