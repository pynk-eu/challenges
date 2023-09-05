import { add } from "./index.js";
import { subtract } from "./index.js";
import { multiply } from "./index.js";
import { divide } from "./index.js";

// add();
// subtract();
// multiply();
// divide();

test("adds the numbers 2, 3", () => {
  const result = add(2, 3);
  expect(result).toBe(5);
});
test("returns a negative value if the greater argument is negative ", () => {
  const result = add(2, -3);
  expect(result).toBeLessThan(0);
});
test("adds the numbers 0.1,0.2", () => {
  const result = add(0.1, 0.2);
  expect(result).toBeCloseTo(0.3);
});

test("subtarct the numbers 15 ,5", () => {
  const result = subtract(15, 5);
  expect(result).toBe(10);
});
test("returns a negative value if the second argument is greater than the first one", () => {
  const result = subtract(15, 20);
  expect(result).toBeLessThan(0);
});
test("multiply the numbers 2, 4", () => {
  const result = multiply(2, 4);
  expect(result).toBe(8);
});
test("returns a negative value if only the first argument is negative -2, 4", () => {
  const result = multiply(-2, 4);
  expect(result).toBeLessThan(0);
});
test("returns a negative value if only the second argument is negative 2, -4", () => {
  const result = multiply(2, -4);
  expect(result).toBeLessThan(0);
});
test("returns a positive value if called with two negative arguments -2, -4", () => {
  const result = multiply(-2, -4);
  expect(result).toBe(8);
});
test("divide the numbers 9, 3", () => {
  const result = divide(9, 3);
  expect(result).toBe(3);
});
test("return ' You should not do this!' if called with 0 as a second argument ", () => {
  const result = divide(9, 0);
  expect(result).toBe("You should not do this!");
});
