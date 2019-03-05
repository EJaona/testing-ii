import React from "react";
import App from "../App";
import { render } from "react-testing-library";

describe("<App />", () => {
  it("renders without crashing", () => {
    render(<App />);
  });
});

it("renders ball count and strikes count", () => {
  const { getByText } = render(<App />);

  const ball = getByText(/ball:/i);
  const strikes = getByText(/strike:/i);
});
