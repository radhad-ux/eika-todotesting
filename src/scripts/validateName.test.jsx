import validateName from "./validateName";

test("Expected to pass if correct input is passed", () => {
  //Arrange
  const testValidName = "Glass";
  const resultName = "Glass";
  const resultError = "";

  //Act
  const validation = validateName(testValidName);

  //Assert
  expect(validation.data).toBe(resultName);
  expect(validation.error).toBe(resultError);
});

test("Expected to throw an error if name is empty", () => {
  //Assert
  const testInvalidName = "";
  const resultName = "";
  const resultError = "The product name must not be empty";

  //Act
  const validation = validateName(testInvalidName);

  //Assert
  expect(validation.data).toBe(resultName);
  expect(validation.error).toBe(resultError);
});

test("Expected to pass if input is passed with whitespaces", () => {
  //Arrange
  const testValidName = "  Table  ";
  const resultName = "Table";
  const resultError = "";

  //Act
  const validation = validateName(testValidName);

  //Assert
  expect(validation.data).toBe(resultName);
  expect(validation.error).toBe(resultError);
});
