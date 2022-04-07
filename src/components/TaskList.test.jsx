import { render, screen } from "@testing-library/react";

import TaskList from "./TaskList";

test("Expected to show No pending items when the list is empty", () => {
  //Arrange
  const fakeList = [];
  render(<TaskList list={fakeList} />);

  //Act
  const textElement = screen.queryByText(/no pending items to show/i);

  //Assert
  expect(textElement).toBeInTheDocument();
});
