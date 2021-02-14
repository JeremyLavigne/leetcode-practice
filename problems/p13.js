/*
============================= Roman to Integer =====================================

Roman numerals are represented by seven different symbols: I, V, X, L, C, D and M.

Symbol       Value
I             1
V             5
X             10
L             50
C             100
D             500
M             1000
For example, 2 is written as II in Roman numeral, just two one's added together. 12 is written as XII, which is simply X + II. The number 27 is written as XXVII, which is XX + V + II.

Roman numerals are usually written largest to smallest from left to right. However, the numeral for four is not IIII. Instead, the number four is written as IV. Because the one is before the five we subtract it making four. The same principle applies to the number nine, which is written as IX. There are six instances where subtraction is used:

I can be placed before V (5) and X (10) to make 4 and 9. 
X can be placed before L (50) and C (100) to make 40 and 90. 
C can be placed before D (500) and M (1000) to make 400 and 900.
Given a roman numeral, convert it to an integer.

 

Example 1:

  Input: s = "III"
  Output: 3

Example 2:

  Input: s = "IV"
  Output: 4

Example 3:

  Input: s = "IX"
  Output: 9

Example 4:

  Input: s = "LVIII"
  Output: 58
  Explanation: L = 50, V= 5, III = 3.

Example 5:

  Input: s = "MCMXCIV"
  Output: 1994
  Explanation: M = 1000, CM = 900, XC = 90 and IV = 4.
 

Constraints:

  1 <= s.length <= 15
  s contains only the characters ('I', 'V', 'X', 'L', 'C', 'D', 'M').
  It is guaranteed that s is a valid roman numeral in the range [1, 3999].


*/

// ============================================================================================

/**
 * @param {string} single
 * @return {number}
 */
const convertSingle = function (single) {
  switch (single) {
    case "I":
    case "X":
    case "C":
    case "M":
      return 1;
    case "II":
    case "XX":
    case "CC":
    case "MM":
      return 2;
    case "III":
    case "XXX":
    case "CCC":
    case "MMM":
      return 3;
    case "IV":
    case "XL":
    case "CD":
      return 4;
    case "V":
    case "L":
    case "D":
      return 5;
    case "VI":
    case "LX":
    case "DC":
      return 6;
    case "VII":
    case "LXX":
    case "DCC":
      return 7;
    case "VIII":
    case "LXXX":
    case "DCCC":
      return 8;
    case "IX":
    case "XC":
    case "CM":
      return 9;
    default:
      return 0;
  }
};

/**
 * @param {string} s
 * @return {number}
 */
const romanToInt = function (s) {
  let expected = 0;

  let mill = "";
  let centaines = "";
  let dizaines = "";

  for (let i = 0; i < s.length; i += 1) {
    if (
      s[i] === "D" ||
      s[i] === "C" ||
      s[i] === "L" ||
      s[i] === "X" ||
      s[i] === "V" ||
      s[i] === "I"
    ) {
      mill = s.substr(0, i);

      for (let j = 0; j < mill.length; j += 1) {
        if (mill[j] !== "M") {
          mill = "";
          break;
        }
      }

      if (mill.length > 0) {
        s = s.substr(i);
      }
      break;
    }
    if (
      i === s.length - 1 &&
      s[i] !== "L" &&
      s[i] !== "X" &&
      s[i] !== "V" &&
      s[i] !== "I"
    ) {
      mill = s;
      s = "";
    }
  }

  for (let i = 0; i < s.length; i += 1) {
    if (s[i] === "L" || s[i] === "X" || s[i] === "V" || s[i] === "I") {
      centaines = s.substr(0, i);

      for (let j = 0; j < centaines.length; j += 1) {
        if (
          centaines[j] !== "C" &&
          centaines[j] !== "D" &&
          centaines[j] !== "M"
        ) {
          centaines = "";
        }
      }

      if (centaines.length > 0) {
        s = s.substr(i);
      }
      break;
    }
    if (i === s.length - 1 && s[i] !== "V" && s[i] !== "I") {
      centaines = s;
      s = "";
    }
  }

  for (let i = 0; i < s.length; i += 1) {
    if (s[i] === "V" || s[i] === "I") {
      dizaines = s.substr(0, i);

      for (let j = 0; j < dizaines.length; j += 1) {
        if (dizaines[j] !== "X" && dizaines[j] !== "L" && dizaines[j] !== "C") {
          dizaines = "";
          break;
        }
      }

      if (dizaines.length > 0) {
        s = s.substr(i);
      }
      break;
    }
    if (i === s.length - 1) {
      dizaines = s;
      s = "";
    }
  }

  const units = s;

  // console.log("m", mill, "c", centaines, "d", dizaines, "u", units);

  expected += 1000 * convertSingle(mill);
  expected += 100 * convertSingle(centaines);
  expected += 10 * convertSingle(dizaines);
  expected += convertSingle(units);

  return expected;
};

// ============================================================================================

console.log(romanToInt("MMCCCVII")); // Expected 2307
console.log(romanToInt("IV")); // Expected 4
console.log(romanToInt("IX")); // Expected 9
console.log(romanToInt("LVIII")); // Expected 58
console.log(romanToInt("MCMXCIV")); // Expected 1994
