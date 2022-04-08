import { render, screen, fireEvent } from "@testing-library/react";

import CheckBox from "./Checkbox";

test("Expected checkbox to be checked when is set to true", () => {
  //Arrange
  const fakeCheck = true;
  const toggleMethod = jest.fn();
  render(<CheckBox checked={fakeCheck} onChange={toggleMethod} />);
  screen.debug();
  //Act
  const checkBox = screen.getByTestId("checkbox");

  //Assert
  expect(checkBox).toBeInTheDocument();
  fireEvent.click(checkBox);
  screen.debug();
  expect(toggleMethod).toHaveBeenCalledTimes(1);
});

test("Expected checkbox to be unchecked when checked is false", () => {
  //Arrange
  const fakeCheck = false;
  const toggleMethod = jest.fn();
  render(<CheckBox checked={fakeCheck} onChange={toggleMethod} />);

  const checkBox = screen.getByTestId("checkbox");

  expect(checkBox).toBeInTheDocument();
  fireEvent.click(checkBox);
  expect(toggleMethod).toHaveBeenCalledTimes(1);
});
