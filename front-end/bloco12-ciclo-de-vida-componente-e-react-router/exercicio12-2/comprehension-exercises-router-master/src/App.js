import React, { Component } from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Users from './components/Users';

class App extends Component {
  render() {
    return (
      // Torne a aplicação navegável, encapsulando o que é retornado pelo App dentro do componente BrowserRouter.
      <BrowserRouter>
        {/* Crie uma rota para o componente Home, utilizando um Route que mapeia o caminho de URL "/" para Home */}
        <Route exact path="/" component={Home} />
        {/* um link que aponte para o caminho de URL "/" contendo o texto Home; */}
        <Link to="/">Home</Link>
        {/* Adicione uma rota que mapeie o caminho de URL "/about" para o componente About. Acesse http://localhost:3000/about para ver se o componente About foi renderizado! */}
        <Route path="/about" component={About} />
        {/* um link que aponte para o caminho de URL "/about" contendo o texto About; */}
        <Link to="/about">About</Link>
        {/* Por fim, adicione uma rota que mapeie o caminho de URL "/users" para o componente Users. */}
        <Route path="/users/:id" render={(props) => <Users {...props} greetingsMessage={"Good Morning"} />} />
        {/* um link que aponte para o caminho de URL "/users" contendo o texto Users. */}
        <Link to="/users">Users</Link>
      </BrowserRouter>
    );
  }
}

export default App;
