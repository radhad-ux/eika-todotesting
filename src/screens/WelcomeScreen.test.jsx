import { render, screen } from "@testing-library/react";

import WelcomeScreen from "./WelcomeScreen";

test("Expected to have a Add Item button to create new item", () => {
  //Arrange
  render(<WelcomeScreen />);

  //Act
  const buttonElement = screen.queryByText(/add item/i);

  //Assert
  expect(buttonElement).toBeInTheDocument();
});
