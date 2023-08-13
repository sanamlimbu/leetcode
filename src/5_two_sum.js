/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
  const hashmap = new Map();
  for (let i = 0; i < nums.length; i++) {
    const complement = target - nums[i];

    if (hashmap.has(complement)) {
      return [i, hashmap.get(complement)];
    }

    hashmap.set(nums[i], i);
  }

  return [];
};

var twoSumAlt = function (nums, target) {
  for (let i = 0; i < nums.length - 1; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] + nums[j] == target) {
        return [i, j];
      }
    }
  }
  return [];
};

module.exports = { twoSum, twoSumAlt };
