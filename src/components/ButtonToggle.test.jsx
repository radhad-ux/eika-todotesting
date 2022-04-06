import { render, screen } from "@testing-library/react";

import ButtonToggle from "./ButtonToggle";

test("Expected to show View Completed Items when showCompleted is false", () => {
  //Arrange
  const fakeToggle = false;
  render(<ButtonToggle showCompleted={fakeToggle} />);

  //Act
  const buttonElement = screen.queryByText(/view completed items/i);

  //Assert
  expect(buttonElement).toBeInTheDocument();
});

test("Expected to show Hide Completed Items when showCompleted is true", () => {
  //Arrange
  const fakeToggle = true;
  render(<ButtonToggle showCompleted={fakeToggle} />);

  //Act
  const buttonElement = screen.queryByText(/hide completed items/i);

  //Assert
  expect(buttonElement).toBeInTheDocument();
});
