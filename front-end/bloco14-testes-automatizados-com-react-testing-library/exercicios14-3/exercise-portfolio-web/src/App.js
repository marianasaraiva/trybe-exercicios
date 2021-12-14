import React, { Component } from 'react';
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Projects from './pages/Projects';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1>Meu portifólio</h1>
          <BrowserRouter>
            <div>
            <Link to="/">Home  |</Link>
            <Link to="/about">  About  |</Link>
            <Link to="/contact">  Contact  |</Link>
            <Link to="/projects">  Projects</Link>
            </div>
            <Switch>
              <Route exact path="/" component={Home}></Route>
              <Route path="/about" component={About}></Route>
              <Route path="/contact" component={Contact}></Route>
              <Route path="/projects" component={Projects}></Route>
            </Switch>
          </BrowserRouter>
        </header>

      </div>
    );
  } 
}

export default App;
