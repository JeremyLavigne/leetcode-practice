/*
============================= Longest Common Prefix =====================================

Write a function to find the longest common prefix string amongst an array of strings.

If there is no common prefix, return an empty string "".

 

Example 1:

  Input: strs = ["flower","flow","flight"]
  Output: "fl"

Example 2:

  Input: strs = ["dog","racecar","car"]
  Output: ""
  Explanation: There is no common prefix among the input strings.
 

Constraints:

  0 <= strs.length <= 200
  0 <= strs[i].length <= 200
  strs[i] consists of only lower-case English letters.

*/

// ============================================================================================

/**
 * @param {string[]} strs
 * @return {string}
 */
const longestCommonPrefix = function (strs) {
  if (strs.length === 0) {
    return "";
  }
  if (strs.length === 1) {
    return strs[0];
  }

  const reference = strs[0];
  let commonPrefix = "";
  let stopLoop = false;

  for (let i = 0; i < reference.length; i += 1) {
    for (let j = 1; j < strs.length; j += 1) {
      if (reference[i] !== strs[j][i]) {
        stopLoop = true;
      }
    }
    if (stopLoop) {
      break;
    }
    commonPrefix += reference[i];
  }

  return commonPrefix;
};

// ============================================================================================

console.log(longestCommonPrefix(["flower", "flow", "flight"])); // Expected 'fl'
console.log(longestCommonPrefix(["dog", "racecar", "car"])); // Expected ''
