import { render, screen } from "@testing-library/react";

import Sorter from "./Sorter";

test("Expected to have the text name for sorting", () => {
  //Arrange

  render(<Sorter />);

  //Act
  const buttonElement = screen.queryByText(/name/i);

  //Assert
  expect(buttonElement).toBeInTheDocument();
});
