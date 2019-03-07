import React from "react";

const Display = props => (
  <div>
    <h1>Ball: {props.state.balls}</h1>
    <h1>Strike: {props.state.strikes}</h1>
  </div>
);

export default Display;
