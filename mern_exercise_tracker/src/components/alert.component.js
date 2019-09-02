import React, { Component } from 'react';
import axios from 'axios';

export default class CreateUser extends Component {
  constructor(props) {
    super(props);

    this.onChangeUsername = this.onChangeUsername.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      username: ''
    }
  }

 

  render() {
    return (
        <div className="alert alert-success" role="alert">
        <h4 className="alert-heading">Well done!</h4>
        <p>You did it! You got out and moved! Keep up the good work</p>
    
        <p className="mb-0">BLAH</p>
      </div>
    )
  }
}