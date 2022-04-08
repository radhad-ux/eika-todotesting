import { render, screen } from "@testing-library/react";
import App from "./App";

test("Expected to go to the Welcome screen if the list is empty", () => {
  //Arrange
  render(<App />);

  //Act
  const titleElement = screen.queryByText(/welcome to eika!/i);

  //Assert
  expect(titleElement).toBeInTheDocument();
});

test("Expected to go to the Shopping screen if the list is not empty", () => {
  //Arrange
  const fakeItem = {
    id: 0,
    name: "Glass",
    price: 50,
    isCompleted: false,
  };

  const fakeList = [fakeItem];
  const fakeData = JSON.stringify(fakeList);

  Storage.prototype.getItem = jest.fn(() => fakeData);
  render(<App />);

  //Act
  const titleElement = screen.queryByText(/your shopping list/i);

  //Assert
  expect(titleElement).toBeInTheDocument();
});
