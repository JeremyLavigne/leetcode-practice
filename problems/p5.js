/*
============================= Longest Palindromic Substring =====================================

Given a string s, return the longest palindromic substring in s.

 

Example 1:

    Input: s = "babad"
    Output: "bab"
    Note: "aba" is also a valid answer.

Example 2:

    Input: s = "cbbd"
    Output: "bb"

Example 3:

    Input: s = "a"
    Output: "a"

Example 4:

    Input: s = "ac"
    Output: "a"
 

Constraints:

    1 <= s.length <= 1000
    s consist of only digits and English letters (lower-case and/or upper-case),

*/

// ============================================================================================

/**
 * @param {string} s
 * @return {boolean}
 */
const isPalindrome = function (s) {
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
 * @param {string} s
 * @return {string}
 */
const longestPalindrome = function (s) {
  let longest = "";

  for (let i = 0; i < s.length; i += 1) {
    for (let j = s.length; j > 0; j -= 1) {
      // Too much tests here...
      const testString = s.substr(i, j);

      if (isPalindrome(testString) && testString.length > longest.length) {
        longest = testString;
      }
    }
  }

  return longest;
};

// ============================================================================================

console.log(longestPalindrome("babad")); // Expected 'bab'
console.log(longestPalindrome("cbbd")); // Expected 'bb'
console.log(longestPalindrome("a")); // Expected 'a'
