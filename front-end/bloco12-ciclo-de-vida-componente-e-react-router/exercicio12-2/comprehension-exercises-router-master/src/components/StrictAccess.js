import React, { Component } from 'react';
import { Redirect } from 'react-router';

export default class StrictAccess extends Component {
  render() {
    const { user: { password, username } } = this.props;
    if(password === "1234" && username === "joao") {
      return (
        <div>
          <p>Welcome, joao</p>
        </div>
      )
    }
    alert("Access denied")
    return <Redirect to="/" />
  }
}
