import React, { Component } from "react";

class Home extends Component {
  render() {
    return (
      <div>
        Home page
        <img src={require("./../../public/assets/images/bike.jpg")} alt="Alt" />
      </div>
    );
  }
}

export default Home;
