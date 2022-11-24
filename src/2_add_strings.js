/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
var addStrings = function (num1, num2) {
  let sum = "";
  let i = 0,
    j = 0,
    carry = 0,
    tempSum = 0,
    reminder = 0;
  if (num1.length >= num2.length) {
    i = num1.length - 1;
    j = num2.length - 1;
  } else {
    i = num2.length - 1;
    j = num1.length - 1;
    // swap num1 and num2
    let temp = num1;
    num1 = num2;
    num2 = temp;
  }

  for (; i >= 0; i--) {
    if (j >= 0) {
      tempSum = Number(num1[i]) + Number(num2[j]) + carry;
      j--;
    } else {
      tempSum = Number(num1[i]) + carry;
    }
    reminder = tempSum % 10;
    if (reminder === 0) {
      sum = "0" + sum;
    } else {
      sum = reminder + sum;
    }
    carry = Math.floor(tempSum / 10);
  }
  if (carry) {
    sum = carry + sum;
  }
  return sum;
};

module.exports = addStrings;
