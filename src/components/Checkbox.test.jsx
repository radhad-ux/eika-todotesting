import { render, screen, fireEvent } from "@testing-library/react";

import CheckBox from "./Checkbox";

test("Expected to toggle checkbox when clicked", () => {
  const toggleMethod = jest.fn();
  render(<CheckBox checked={true} onChange={toggleMethod} />);

  const checkBox = screen.getByTestId("checkbox");

  expect(checkBox).toBeInTheDocument();
  fireEvent.click(checkBox);
  expect(toggleMethod).toHaveBeenCalledTimes(1);
});
