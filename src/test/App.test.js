import * as app from "../App";
import * as math from "../Math/math";

math.add = jest.fn();
math.subtract = jest.fn();
math.multiply = jest.fn();
math.divide = jest.fn();

test("calls math.add", () => {
  app.doAdd(1, 2);
  expect(math.add).toHaveBeenCalledWith(1, 2);
});

test("calls math.subtract", () => {
  app.doSubtract(1, 2);
  expect(math.subtract).toHaveBeenCalledWith(1, 2);
});

test("calls math.multiply", () => {
  app.doMultiply(5, 5);
  expect(math.multiply).toHaveBeenCalledWith(5, 5);
});

test("calls math.division", () => {
  app.doDivide(25, 5);
  expect(math.divide).toHaveBeenCalledWith(25, 5);
});
