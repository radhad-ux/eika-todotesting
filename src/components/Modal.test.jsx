import { render, screen } from "@testing-library/react";

import Modal from "./Modal";

test("Expected not to open when you pass null on modal", () => {
  // Arrange
  const fakemodalState = [null, () => {}];

  render(<Modal modalState={fakemodalState} />);

  // Act
  const titleElement = screen.queryByText(/create new item/i);

  // Assert
  expect(titleElement).not.toBeInTheDocument();
});
