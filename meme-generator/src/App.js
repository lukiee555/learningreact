import React, { Component } from "react";
import Header from "./header";
import MemeGenerator from "./memeGenerator";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <MemeGenerator />
      </div>
    );
  }
}

export default App;
