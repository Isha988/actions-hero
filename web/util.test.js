const sum = require("./util");

describe("Sum function test", () => {
  test("Should return sum of 15 and 10", () => {
    const result = sum(10, 15);
    expect(result).toBe(25);
  });
});
