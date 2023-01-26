import React from "react";
import { render, fireEvent, screen, waitFor } from "@testing-library/react";
import DisplayText from "./DisplayText";
import "@testing-library/jest-dom/extend-expect";

describe("Testing DisplayText component", () => {
  const userFullName = "Test User";

  const getUserFullNameMock = (username: string): [Promise<string>, jest.Mock<Promise<string>, [string]>] => {
    const promise = new Promise<string>((resolve, reject) => {
      resolve(userFullName);
    });
    const getUserFullName = jest.fn(async (username: string): Promise<string> => {
      return promise;
    });
    return [promise, getUserFullName];
  }

  it("Component is rendered without any issues", () => {
    const testUser = "Test User";
    const [promise, getUserFullName] = getUserFullNameMock(testUser);

    const {baseElement} = render(<DisplayText getUserFullName={getUserFullName} />);
    console.log(baseElement.innerHTML);
    expect(baseElement).toBeInTheDocument();
  });

  it("Compatible with snapshot", () => {
    const testUser = "Test User";
    const [promise, getUserFullName] = getUserFullNameMock(testUser);

    const {baseElement} = render(<DisplayText getUserFullName={getUserFullName} />);
    expect(baseElement).toMatchSnapshot();
  });

  it("Given value is available for component", () => {
    const testUser = "Test User";
    const [promise, getUserFullName] = getUserFullNameMock(testUser);

    render(<DisplayText getUserFullName={getUserFullName} />);
    const input = screen.getByTestId("user-input");
    fireEvent.change(input, { target: { value: testUser }});
    expect(input).toBeInTheDocument();
    expect(input).toHaveValue(testUser);
  });

  it("Welcome message has been print on the screen", async() => {
    const testUser = "Test User";
    const message = `Welcome on the React Testing training, ${testUser}!`;
    const [promise, getUserFullName] = getUserFullNameMock(testUser);

    render (<DisplayText getUserFullName={getUserFullName} />);

    const input = screen.getByTestId("user-input");
    const label = screen.getByTestId("final-msg");

    fireEvent.change(input, { target: { value: testUser } });

    const btn = screen.getByTestId("input-submit");
    fireEvent.click(btn);

    expect(label).toBeInTheDocument();
    await waitFor(() => promise);
    await waitFor (() => {
      expect(label.innerHTML).toBe(message);
    });
  });
});
