const romanToInt = require("./7_roman_to_integer");

describe("Roman to integer test", () => {
  test("III should return 3", () => {
    expect(romanToInt("III")).toBe(3);
  });

  test("LVIII should be 58", () => {
    expect(romanToInt("LVIII")).toBe(58);
  });

  test("MCMXCIV should be 58", () => {
    expect(romanToInt("MCMXCIV")).toBe(1994);
  });
});
