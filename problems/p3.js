/*
============================= Longest Substring Without Repeating Characters =====================================

Given a string s, find the length of the longest substring without repeating characters.

 

Example 1:

    Input: s = "abcabcbb"
    Output: 3
    Explanation: The answer is "abc", with the length of 3.

Example 2:

    Input: s = "bbbbb"
    Output: 1
    Explanation: The answer is "b", with the length of 1.

Example 3:

    Input: s = "pwwkew"
    Output: 3
    Explanation: The answer is "wke", with the length of 3.
    Notice that the answer must be a substring, "pwke" is a subsequence and not a substring.

Example 4:

    Input: s = ""
    Output: 0
 

Constraints:

    0 <= s.length <= 5 * 104
    s consists of English letters, digits, symbols and spaces.

*/

// ============================================================================================

/**
 * @param {string} s
 * @return {number}
 */
const lengthOfLongestSubstring = function (s) {
  let longest = 0;

  for (let i = 0; i < s.length; i += 1) {
    let sequence = s[i];

    for (let j = i + 1; j < s.length; j += 1) {
      if (!sequence.includes(s[j])) {
        sequence += s[j];
      } else {
        break;
      }
    }

    if (sequence.length > longest) {
      longest = sequence.length;
    }
  }

  return longest;
};

// ============================================================================================

console.log(lengthOfLongestSubstring("pwwkew")); // expected : 3
console.log(lengthOfLongestSubstring("")); // expected : 0
console.log(lengthOfLongestSubstring("this is a test")); // expected : 5
