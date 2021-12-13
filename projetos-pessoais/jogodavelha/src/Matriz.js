import React, { Component } from 'react'
import Celula from './Celula';

export default class Matriz extends Component {
  constructor(){
    super();
    this.state = {
      tabuleiro: [],
    };
  }

  createMatriz = () => {
    const { tabuleiro } = this.state;
    // for para criar as linhas do Quadro.
    for (let index = 0; index < 3; index += 1) {
      // for para criar os inputs dentro da anterior.
      for (let index1 = 0; index1 < 3; index1 += 1) {
        this.setState = {
          index: index += tabuleiro[index],
        }
      }
    }
    return tabuleiro;
  }
  
  // handleChange = ({ target : { value }}) => {
    //   const { name } = value;
    
    //   this.setState({
      //     [name]:  value,
      //   });
  // }
  
  render() {
    return (
      <Celula />
    )
  }
}
