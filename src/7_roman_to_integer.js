/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function (s) {
  const hashmap = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  };

  let total = 0;

  for (let i = s.length - 1; i >= 0; i--) {
    switch (s[i]) {
      case "V":
      case "X": {
        if (s[i - 1] == "I") {
          total += hashmap[s[i]] - hashmap.I;
          i--;
        } else {
          total += hashmap[s[i]];
        }
        break;
      }

      case "L":
      case "C": {
        if (s[i - 1] == "X") {
          total += hashmap[s[i]] - hashmap.X;
          i--;
        } else {
          total += hashmap[s[i]];
        }
        break;
      }
      case "D":
      case "M": {
        if (s[i - 1] == "C") {
          total += hashmap[s[i]] - hashmap.C;
          i--;
        } else {
          total += hashmap[s[i]];
        }
        break;
      }
      default: {
        total += hashmap[s[i]];
        break;
      }
    }
  }
  return total;
};

module.exports = romanToInt;
