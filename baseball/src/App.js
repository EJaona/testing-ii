import React, { Component } from "react";
import Dashboard from "./components/Dashboard";
import Display from "./components/Display";
import "./App.css";

class App extends Component {
  state = {
    ball: 0,
    strikes: 0
  };

  render() {
    return (
      <div className="App">
        <Display />
        <Dashboard />
      </div>
    );
  }
}

export default App;
