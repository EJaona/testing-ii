import React from "react";

class Display extends Component {
  state = {
    ball: 0,
    strikes: 0
  };
  render() {
    return (
      <div>
        <h1>{this.state.balls}</h1>
        <h1>{this.state.strikes}</h1>
      </div>
    );
  }
}
