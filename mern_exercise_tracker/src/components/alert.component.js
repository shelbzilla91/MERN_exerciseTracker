import React, { Component } from "react";
import ReactDOM from "react-dom";

export default class Alert extends Component {
  state = { show: false };

  showModal = () => {
    this.setState({ show: true });
  };

  hideModal = () => {
    this.setState({ show: false });
  };

  render() {
    return (
      <main>
       
        <button type="button" onClick={this.showModal}>
          open
        </button>
      </main>
    );
  }
}

const containerAlert = document.createElement("div");
document.body.appendChild(containerAlert);
ReactDOM.render(<Alert />, containerAlert);