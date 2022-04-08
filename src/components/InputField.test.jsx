import { render, screen } from "@testing-library/react";
import InputField from "./InputField";

test("Input field works with the correct settings and state props", () => {
  //Arrange

  const settings = {
    label: "Product name",
    type: "text",
    placeholder: "Ex:Chair",
  };

  const state = ["Table", () => {}];

  render(<InputField settings={settings} state={state} />);

  //Act

  const labelElement = screen.queryByText(/product name/i);

  //Assert
  expect(labelElement).toBeInTheDocument();
});

test("It fails with the incorrect settings and state props", () => {
  //Arrange

  const settings = {};

  const state = ["500", () => {}];

  render(<InputField settings={settings} state={state} />);

  //Act
  const labelElement = screen.queryByText(/product price/i);

  //Assert
  expect(labelElement).not.toBeInTheDocument();
});
