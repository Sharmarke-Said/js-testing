const { sum, getLargest } = require("./script.js");

describe("#Sum", () => {
  test("adds numbers correctly", () => {
    const a = 1;
    const b = 2;
    expect(sum(a, b)).toBe(3);
  });
});

describe("#GetLargest", () => {
  test("returns the largest number in an array", () => {
    const array = [1, 2, 3, 4, 5];
    expect(getLargest(array)).toBe(5);
  });

  describe("With an empty array", () => {
    test("it returns null", () => {
      expect(getLargest([])).toBeNull();
    });
  });
});
