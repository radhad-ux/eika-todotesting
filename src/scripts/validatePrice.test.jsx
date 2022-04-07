import validatePrice from "./validatePrice";

test("Expected to pass if correct input is passed", () => {
  //Arrange
  const testValidPrice = "100";
  const resultPrice = 100;
  const resultError = "";

  //Act
  const validation = validatePrice(testValidPrice);

  //Assert
  expect(validation.data).toBe(resultPrice);
  expect(validation.error).toBe(resultError);
});

test("Expected to fail if input is negative", () => {
  //Arrange
  const testInvalidPrice = "-1";
  const resultPrice = -1;
  const resultError = "The price must cost more than 0";

  //Act
  const validation = validatePrice(testInvalidPrice);

  //Assert
  expect(validation.data).not.toBe(resultPrice);
  expect(validation.error).toBe(resultError);
});

test("Expected to throw an error if input is empty", () => {
  //Arrange
  const testInvalidPrice = "";
  const resultPrice = "";
  const resultError = "The price must cost more than 0";

  //Act
  const validation = validatePrice(testInvalidPrice);

  //Assert
  expect(validation.data).toBe(resultPrice);
  expect(validation.error).toBe(resultError);
});

test("Expected to fail if input is 0", () => {
  //Arrange
  const testInvalidPrice = "0";
  const resultPrice = "";
  const resultError = "The price must cost more than 0";

  //Act
  const validation = validatePrice(testInvalidPrice);

  //Assert
  expect(validation.data).toBe(resultPrice);
  expect(validation.error).toBe(resultError);
});
