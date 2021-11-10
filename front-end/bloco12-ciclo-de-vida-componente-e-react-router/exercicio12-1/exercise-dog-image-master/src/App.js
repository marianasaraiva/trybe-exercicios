import React, { Component } from 'react';
import './App.css';

export class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: '',
    };
    this.fetchDoguinho = this.fetchDoguinho.bind(this);
  }

  componentDidMount() {
    // Assim que a página for montada, uma primeira requisição deve acontecer, e a imagem deve ser mostrada na tela;
    this.fetchDoguinho();
  }

  shouldComponentUpdate(nextProps, nextState) {
    // A cada tentativa de atualização do componente, verifique se o campo message tem a palavra terrier. Se sim, não atualize o componente. Pesquise pelo método includes;
    if (nextState.data.message.includes('terrier')) {
      return false;
    }
    return true;
  }

  // Guarde o array no localStorage a cada atualização, e não mais a url da última imagem gerada;
  componentDidUpdate() {
    localStorage.setItem('dogURL', this.state.data.message);
    const dogName = this.state.data.message.split('/')[4];
    alert(dogName);
  }

  fetchDoguinho() {
    fetch('https://dog.ceo/api/breeds/image/random')
      .then((response) => response.json())
      .then((results) => this.setState({ data: results }));
  }

  render() {
    // Enquanto a requisição é feita, o texto 'Loading...' deve ser a única coisa presente na tela;
    if (this.state.data === '') return 'loading...';
    return (
      <div>
        <p>Doguinhos</p>
        {/* Deve existir um botão que, para cada clique, busque mais um doguinho. */}
        <button onClick={ this.fetchDoguinho }>Novo doguinho!</button>
        <div>
          <img src={ this.state.data.message } alt="Doguinho" />
        </div>
      </div>
    );
  }
}

export default App;
