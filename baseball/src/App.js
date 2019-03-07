import React, { Component } from "react";
import Dashboard from "./components/Dashboard";
import Display from "./components/Display";
import "./App.css";

class App extends Component {
  state = {
    balls: 0,
    strikes: 0,
    foul: 0
  };

  hit = _ => {
    this.setState({
      balls: 0,
      strikes: 0,
      foul: 0
    });
  };

  strikes = _ => {
    this.state.strikes < 2
      ? this.setState({
          strikes: this.state.strikes + 1
        })
      : this.setState({
          strikes: 0,
          balls: 0,
          foul: 0
        });
  };

  balls = _ => {
    this.state.balls < 3
      ? this.setState({
          balls: this.state.balls + 1
        })
      : this.setState({
          strikes: 0,
          balls: 0,
          foul: 0
        });
  };

  fouls = _ => {
    if (this.state.strikes < 2) {
      this.setState({
        strikes: this.state.strikes + 1
      });
    }
  };

  render() {
    console.log(this.state);
    return (
      <div className="App">
        <Display state={this.state} />
        <Dashboard
          hit={this.hit}
          strikes={this.strikes}
          balls={this.balls}
          fouls={this.fouls}
        />
      </div>
    );
  }
}

export default App;
