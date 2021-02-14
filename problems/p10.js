/*
============================= Regular Expression Matching =====================================

Given an input string (s) and a pattern (p), implement regular expression matching with support for '.' and '*' where: 

'.' Matches any single character.​​​​
'*' Matches zero or more of the preceding element.
The matching should cover the entire input string (not partial).

 

Example 1:

    Input: s = "aa", p = "a"
    Output: false
    Explanation: "a" does not match the entire string "aa".

Example 2:

    Input: s = "aa", p = "a*"
    Output: true
    Explanation: '*' means zero or more of the preceding element, 'a'. Therefore, by repeating 'a' once, it becomes "aa".

Example 3:

    Input: s = "ab", p = ".*"
    Output: true
    Explanation: ".*" means "zero or more (*) of any character (.)".

Example 4:

    Input: s = "aab", p = "c*a*b"
    Output: true
    Explanation: c can be repeated 0 times, a can be repeated 1 time. Therefore, it matches "aab".

Example 5:

    Input: s = "mississippi", p = "mis*is*p*."
    Output: false
 

Constraints:

    0 <= s.length <= 20
    0 <= p.length <= 30
    s contains only lowercase English letters.
    p contains only lowercase English letters, '.', and '*'.
    It is guaranteed for each appearance of the character '*', there will be a previous valid character to match.

*/

// ============================================================================================

/**
 * @param {string} s
 * @param {string} p
 * @return {boolean}
 */
const isMatch = function (s, p) {
  // const letters = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];

  const allPossibilities = [];

  if (p === ".*") {
    // Avoid this case
    return true;
  }

  for (let i = 0; i < p.length; i += 1) {
    if (p[i] !== "*") {
      // * is always considered with the previous character
      if (p[i] !== ".") {
        // Don't know how to manage it for now
        if (i + 1 < p.length && p[i + 1] !== "*") {
          // Character should be add to previous possibilities
          allPossibilities.push(p[i]);
        } else {
          // Add 20 (s max length) possibilities : 'a', 'aa', 'aaa', ...
          // Sounds not a efficient way..
        }
      }
    }
  }

  return allPossibilities.includes(s);
};

// ============================================================================================

console.log(isMatch("aa", "a")); // Expected false
console.log(isMatch("aa", "a*")); // Expected true
console.log(isMatch("ab", ".*")); // Expected true
console.log(isMatch("aab", "c*a*b")); // Expected true
