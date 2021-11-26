import React, { Component } from 'react';
import { BrowserRouter, Route, Link ,Switch } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Users from './components/Users';
import StrictAccess from './components/StrictAccess';

class App extends Component {
  render() {
    return (
      // Torne a aplicação navegável, encapsulando o que é retornado pelo App dentro do componente BrowserRouter.
      <BrowserRouter>
        <Switch>
          <Route path="/users/:id" render={(props) => <Users {...props} greetingsMessage={"Good Morning"} />} />
          <Route path="/about" component={About} />
          <Route exact path="/" component={Home} />
          <Route path="/strictacess" render={() => <StrictAccess user={{password: "1234", username:"joao"}} />} />
        </Switch>

        <div>
          <p><Link to="/">Home</Link></p>
          <p><Link to="/about">About</Link></p>
          <p><Link to="/users/:id">Users</Link></p>
          <p><Link to="/strictacess">StrictAccess</Link></p>
        </div>        
      </BrowserRouter>
    );
  }
}

export default App;
