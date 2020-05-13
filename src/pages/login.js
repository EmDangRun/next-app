import React, { Component } from "react";
import AuthService from "../core/helper/authService";

class login extends Component {
  constructor(props) {
    super(props);
    this.authService = new AuthService();
  }
  onLogin = () => {
    this.authService.login();
  };
  render() {
    return (
      <div>
        <button onClick={this.onLogin}>Login</button>
      </div>
    );
  }
}

export default login;
