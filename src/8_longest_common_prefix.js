/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function (strs) {
  strs.sort();
  let s1 = strs[0];
  let s2 = strs[strs.length - 1];
  let i = 0;
  while (i < s1.length && i < s2.length) {
    if (s1[i] == s2[i]) {
      i++;
    } else {
      break;
    }
  }
  return s1.substring(0, i);
};

module.exports = longestCommonPrefix;
