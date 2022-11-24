/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function (a, b) {
  let i, j;
  let str = "";
  let carry = false;
  if (a.length >= b.length) {
    i = a.length - 1;
    j = b.length - 1;
  } else {
    i = b.length - 1;
    j = a.length - 1;
    // swap a and b
    let temp = a;
    a = b;
    b = temp;
  }

  for (; i >= 0; i--) {
    if (j >= 0) {
      if (a[i] == "1" && b[j] == "1") {
        if (carry) {
          str = "1" + str;
        } else {
          str = "0" + str;
        }
        carry = true;
      } else if (a[i] == "0" && b[j] == "0") {
        if (carry) {
          str = "1" + str;
        } else {
          str = "0" + str;
        }
        carry = false;
      } else {
        if (carry) {
          str = "0" + str;
          carry = true;
        } else {
          str = "1" + str;
          carry = false;
        }
      }
    } else {
      if (a[i] == "1") {
        if (carry) {
          str = "0" + str;
          carry = true;
        } else {
          str = "1" + str;
          carry = false;
        }
      } else {
        if (carry) {
          str = "1" + str;
        } else {
          str = "0" + str;
        }
        carry = false;
      }
    }
    j--;
  }
  if (carry) {
    str = "1" + str;
  }
  return str;
};

module.exports = addBinary;
