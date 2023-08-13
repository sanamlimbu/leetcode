const longestCommonPrefix = require("./8_longest_common_prefix");

describe("Longest common prefix", () => {
  test(`["flower","flow","flight"] should return "fl `, () => {
    expect(longestCommonPrefix(["flower", "flow", "flight"])).toBe("fl");
  });

  test(`["dog","racecar","car"] should return ""`, () => {
    expect(longestCommonPrefix(["dog", "racecar", "car"])).toBe("");
  });
});
