const isPalindrome = require("./6_palindrome_number");

describe("Plaindrome number test", () => {
  test("121 should return true", () => {
    expect(isPalindrome(121)).toBe(true);
  });

  test("-121 should return false", () => {
    expect(isPalindrome(-121)).toBe(false);
  });

  test("10 should return false", () => {
    expect(isPalindrome(10)).toBe(false);
  });
});
