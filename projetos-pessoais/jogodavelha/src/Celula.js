import React, { Component } from 'react'

export default class Celula extends Component {
  render() {
    return (
      <div>
        <input
        // id={ id }
        onClick={ this.createMatriz }
        onChange={this.handleChange}
        />
        
      </div>
    )
  }
}
