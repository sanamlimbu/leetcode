const { twoSum } = require("./5_two_sum");
describe("Two sum tests", () => {
  test("[2,7,11,15] with target 9 should return [1,0] or [0,1]", () => {
    const result = twoSum([2, 7, 11, 15], 9);
    expect(result).toEqual(expect.arrayContaining([1, 0] || [0, 1]));
  });

  test("[3,2,4] with target 6 should return [2,1] or [1,2]", () => {
    const result = twoSum([3, 2, 4], 6);
    expect(result).toEqual(expect.arrayContaining([2, 1] || [1, 2]));
  });

  test("[3,3] with target 6 should return [0,1] or [1,0]", () => {
    const result = twoSum([3, 3], 6);
    expect(result).toEqual(expect.arrayContaining([1, 0] || [0, 1]));
  });

  test("[1,2,3] with target 8 should return []", () => {
    const result = twoSum([1, 2, 3], 8);
    expect(result).toEqual([]);
  });
});
