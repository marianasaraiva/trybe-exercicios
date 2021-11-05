import React from 'react';

class App extends React.Component {
  constructor() {
    super();

    this.handleButtonOne = this.handleButtonOne.bind(this);
    this.handleButtonTwo = this.handleButtonTwo.bind(this);
    this.handleButtonThree = this.handleButtonThree.bind(this);

    this.state = {
      clicksBtnOne: 0,
      clicksBtnTwo: 0,
      clicksBtnThree: 0,
    };
  }

  handleButtonOne() {
    this.setState(() => ({
      clicksBtnOne: this.state.clicksBtnOne + 1,
    }));
  }
  
  handleButtonTwo() {
    this.setState(() => ({
      clicksBtnTwo: this.state.clicksBtnTwo + 1,
    }));
  }
  
  handleButtonThree() {
    this.setState(() => ({
      clicksBtnThree: this.state.clicksBtnThree + 1,
    }));
  }
 
   render() {
    return (
      <div>
        <button onClick={ this.handleButtonOne }>Botão 1</button>
        <button onClick={ this.handleButtonTwo }>Botão 2</button>
        <button onClick={ this.handleButtonThree }>Botão 3</button>
      </div>
    );
  }
}

export default App;