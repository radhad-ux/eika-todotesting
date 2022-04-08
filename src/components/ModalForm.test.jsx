import { render, screen } from "@testing-library/react";

import ModalForm from "./ModalForm";

test("Expected to have a Submit button to create a new item", () => {
  //Arrange
  render(<ModalForm />);

  //Act
  const buttonElement = screen.queryByText(/submit/i);

  //Assert
  expect(buttonElement).toBeInTheDocument();
});
