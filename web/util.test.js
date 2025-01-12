const {sum, sub} = require("./util");

describe("Sum function test", () => {
  test("Should return sum of 15 and 10", () => {
    const result = sum(10, 15);
    expect(result).toBe(25);
  });
});

describe("Sub function test", () => {
  test("Should return subtraction of 10 and 15", () => {
    const result = sub(10, 15);
    expect(result).toBe(-5);
  });
});
