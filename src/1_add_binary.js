/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
function addBinary(a, b) {
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
          str = str.concat("1");
        } else {
          str = str.concat("0");
        }
        carry = true;
      } else if (a[i] == "0" && b[j] == "0") {
        if (carry) {
          str = str.concat("1");
        } else {
          str = str.concat("0");
        }
        carry = false;
      } else {
        if (carry) {
          str = str.concat("0");
          carry = true;
        } else {
          str = str.concat("1");
          carry = false;
        }
      }
    } else {
      if (a[i] == "1") {
        if (carry) {
          str = str.concat("0");
          carry = true;
        } else {
          str = str.concat("1");
          carry = false;
        }
      } else {
        if (carry) {
          str = str.concat("1");
        } else {
          str = str.concat("0");
        }
        carry = false;
      }
    }
    j--;
  }
  if (carry) {
    str = str.concat("1");
  }
  // reverse the string
  return str.split("").reverse().join("");
}

module.exports = addBinary;
