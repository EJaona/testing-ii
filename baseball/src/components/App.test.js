import React from "react";
import App from "../App";
import { render, fireEvent } from "react-testing-library";
import "jest-dom/extend-expect";
import Dashboard from "./Dashboard";

describe("<App />", () => {
  it("renders without crashing", () => {
    render(<App />);
  });

  it("renders ball count and strikes count", () => {
    const { getByText } = render(<App />);

    const ball = getByText(/ball:/i);
    const strikes = getByText(/strike:/i);

    expect(ball).toBeInTheDocument();
    expect(strikes).toBeInTheDocument();
  });

  it("renders three buttons", () => {
    const { getByText } = render(<App />);

    const strikes = getByText(/Strike/i);
    const Ball = getByText(/Ball/i);
    const Foul = getByText(/Foul/i);
    const Hit = getByText(/Hit/i);

    expect(strikes).toBeInTheDocument();
    expect(Ball).toBeInTheDocument();
    expect(Foul).toBeInTheDocument();
    expect(Hit).toBeInTheDocument();
  });

  it("should call the strikes()", () => {
    const strikes = jest.fn();

    const { getByText } = render(<Dashboard strikes={strikes} />);

    fireEvent.click(getByText(/Strike/i));
    expect(strikes).toBeTruthy();
  });

  it("should call the balls()", () => {
    const balls = jest.fn();

    const { getByText } = render(<Dashboard balls={balls} />);

    fireEvent.click(getByText(/Strike/i));
    expect(balls).toBeTruthy();
  });

  it("should call the foul()", () => {
    const foul = jest.fn();

    const { getByText } = render(<Dashboard foul={foul} />);

    fireEvent.click(getByText(/foul/i));
    expect(foul).toBeTruthy();
  });

  it("should call the hit()", () => {
    const hit = jest.fn();

    const { getByText } = render(<Dashboard hit={hit} />);

    fireEvent.click(getByText(/hit/i));
    expect(hit).toBeTruthy();
  });
});
