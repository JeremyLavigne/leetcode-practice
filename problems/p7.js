/*
============================= Reverse Integer =====================================

Given a signed 32-bit integer x, return x with its digits reversed. If reversing x causes the value to go outside the signed 32-bit integer range [-231, 231 - 1], then return 0.

Assume the environment does not allow you to store 64-bit integers (signed or unsigned).

 

Example 1:

    Input: x = 123
    Output: 321

Example 2:

    Input: x = -123
    Output: -321

Example 3:

    Input: x = 120
    Output: 21

Example 4:

    Input: x = 0
    Output: 0
 

Constraints:

    -2^31 <= x <= 2^31 - 1

*/

// ============================================================================================

/**
 * @param {string} str
 * @return {string}
 */
const reverseString = function (str) {
  let newStr = "";
  for (let i = str.length - 1; i >= 0; i -= 1) {
    newStr += str[i];
  }
  return newStr;
};

/**
 * @param {number} x
 * @return {number}
 */
const reversePositive = function (x) {
  // 1 digit
  if (x < 10) {
    return x;
  }

  // ending with *0
  let power = 1;
  while (Math.pow(10, power) <= x) {
    if (x % Math.pow(10, power) === 0) {
      return reversePositive(x / Math.pow(10, power));
    }
    power += 1;
  }

  // else - convert as a string
  const xStr = x.toString();
  if (parseInt(reverseString(xStr)) >= Math.pow(2, 31)) {
    return 0;
  }
  return parseInt(reverseString(xStr));
};

/**
 * @param {number} x
 * @return {number}
 */
const reverse = function (x) {
  if (x < 0) {
    return -reversePositive(-x);
  } else {
    return reversePositive(x);
  }
};

// ============================================================================================

console.log(reverse(123)); // Expected 321
console.log(reverse(-123)); // Expected -321
console.log(reverse(120)); // Expected 21
console.log(reverse(0)); // Expected 0
console.log(reverse(100)); // Expected 1
