/*
============================= ZigZag Conversion =====================================

The string "PAYPALISHIRING" is written in a zigzag pattern on a given number of rows like this: (you may want to display this pattern in a fixed font for better legibility)

P   A   H   N
A P L S I I G
Y   I   R
And then read line by line: "PAHNAPLSIIGYIR"

Write the code that will take a string and make this conversion given a number of rows:

    string convert(string s, int numRows);
 

Example 1:

    Input: s = "PAYPALISHIRING", numRows = 3
    Output: "PAHNAPLSIIGYIR"

Example 2:

    Input: s = "PAYPALISHIRING", numRows = 4
    Output: "PINALSIGYAHRPI"
    Explanation:
    P     I    N
    A   L S  I G
    Y A   H R
    P     I

Example 3:

    Input: s = "A", numRows = 1
    Output: "A"
 

Constraints:

    1 <= s.length <= 1000
    s consists of English letters (lower-case and upper-case), ',' and '.'.
    1 <= numRows <= 1000


*/

// ============================================================================================

/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
const convert = function (s, numRows) {
  let newString = "";

  if (numRows === 1) {
    return s;
  }
  if (numRows === 2) {
    for (let k = 0; k < s.length; k += 2) {
      newString += s[k];
    }
    for (let l = 1; l < s.length; l += 2) {
      newString += s[l];
    }
    return newString;
  }

  for (let i = 0; i < numRows; i += 1) {
    let count = 0;
    let indexBefore = Math.floor(numRows * 1.5) * count - i;
    let indexAfter = Math.floor(numRows * 1.5) * count + i;

    while (indexBefore < s.length) {
      console.log(indexBefore, indexAfter);
      if (newString.length === s.length) {
        break;
      }

      if (i !== 0 && i !== numRows - 1) {
        if (indexBefore >= 0 && indexBefore < s.length) {
          newString += s[indexBefore];
        }
      }

      if (indexAfter >= 0 && indexAfter < s.length) {
        newString += s[indexAfter];
      }

      count += 1;
      indexBefore = Math.floor(numRows * 1.5) * count - i;
      indexAfter = Math.floor(numRows * 1.5) * count + i;
    }
  }

  return newString;
};

// ============================================================================================

console.log(convert("PAYPALISHIRING", 3)); // Expected : 'PAHNAPLSIIGYIR'
console.log(convert("PAYPALISHIRING", 4)); // Expected : 'PINALSIGYAHRPI'
console.log(convert("A", 1)); // Expected : 'A'
console.log(convert("ABC", 5)); // Expected : 'ACB'
