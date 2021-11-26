import React, { Component } from 'react';

class Users extends Component {
  // Altere o componente Users para poder fazer o exercício a seguir.
  render() {
    const {
      greetingsMessage,
      match: {params: {id}}
    } = this.props
    return (
      <div>
        <h2>Users</h2>
        <p> {`${greetingsMessage}, User: ${id}, My awesome Users component`}</p>
      </div>
    );
  }
};

export default Users;
