/*
============================= Palindrome Number =====================================

Given an integer x, return true if x is palindrome integer.

An integer is a palindrome when it reads the same backward as forward. For example, 121 is palindrome while 123 is not.

Example 1:

    Input: x = 121
    Output: true

Example 2:

    Input: x = -121
    Output: false
    Explanation: From left to right, it reads -121. From right to left, it becomes 121-. Therefore it is not a palindrome.

Example 3:

    Input: x = 10
    Output: false
    Explanation: Reads 01 from right to left. Therefore it is not a palindrome.

Example 4:

    Input: x = -101
    Output: false
 

Constraints:

    -231 <= x <= 231 - 1
 

Follow up: Could you solve it without converting the integer to a string?

*/

// ============================================================================================

/**
 * @param {string} s
 * @return {boolean}
 */
const isPalindromeStr = function (s) {
  const l = s.length;
  for (let i = 0; i < l; i += 1) {
    if (!(s[i] === s[l - 1 - i])) {
      return false;
    }
    if (i > l / 2) {
      break;
    }
  }

  return true;
};

/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function (x) {
  if (x < 0 || (x !== 0 && x % 10 === 0)) {
    return false;
  }
  if (x < 10) {
    return true;
  }

  return isPalindromeStr(x.toString());
};

// ============================================================================================

console.log(isPalindrome(121)); // Expected true
console.log(isPalindrome(-121)); // Expected false
console.log(isPalindrome(0)); // Expected false
console.log(isPalindrome(-101)); // Expected false
