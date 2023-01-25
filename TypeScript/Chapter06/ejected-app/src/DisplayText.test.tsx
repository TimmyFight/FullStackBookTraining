import React from "react";
import { render, fireEvent, screen } from "@testing-library/react";
import DisplayText from "./DisplayText";
import "@testing-library/jest-dom/extend-expect";

describe("Testing DisplayText component", () => {
  it("Component is rendered without any issues", () => {
    const {baseElement} = render(<DisplayText />);
    console.log(baseElement.innerHTML);
    expect(baseElement).toBeInTheDocument();
  });

  it("Compatible with snapshot", () => {
    const {baseElement} = render(<DisplayText />);
    expect(baseElement).toMatchSnapshot();
  });

  it("Given value is available for component", () => {
    const testUser = "Test User";
    render(<DisplayText />);
    const input = screen.getByTestId("user-input");
    fireEvent.change(input, { target: { value: testUser }});
    expect(input).toBeInTheDocument();
    expect(input).toHaveValue(testUser);
  });

  it("Welcome message has been print on the screen", () => {
    const testUser = "Test User";
    const message = `Welcome on the React Testing training, ${testUser}!`;
    
    render (<DisplayText />);

    const input = screen.getByTestId("user-input");
    const label = screen.getByTestId("final-msg");

    fireEvent.change(input, { target: { value: testUser } });

    const btn = screen.getByTestId("input-submit");
    fireEvent.click(btn);

    expect(label).toBeInTheDocument();
    expect(label.innerHTML).toBe(message);
  });
});
