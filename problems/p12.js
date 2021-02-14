/*
============================= Integer to Roman =====================================

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
Given an integer, convert it to a roman numeral.

 
Example 1:

  Input: num = 3
  Output: "III"

Example 2:

  Input: num = 4
  Output: "IV"

Example 3:

  Input: num = 9
  Output: "IX"

Example 4:

  Input: num = 58
  Output: "LVIII"
  Explanation: L = 50, V = 5, III = 3.

Example 5:

  Input: num = 1994
  Output: "MCMXCIV"
  Explanation: M = 1000, CM = 900, XC = 90 and IV = 4.
 

Constraints:

  1 <= num <= 3999

*/

// ============================================================================================

/**
 * @param {number} num
 * @return {string}
 */
const convertMill = function (num) {
  switch (num) {
    case 1:
      return "M";
    case 2:
      return "MM";
    case 3:
      return "MMM";
    default:
      return "";
  }
};

/**
 * @param {number} num
 * @return {string}
 */
const convertCent = function (num) {
  switch (num) {
    case 1:
      return "C";
    case 2:
      return "CC";
    case 3:
      return "CCC";
    case 4:
      return "CD";
    case 5:
      return "D";
    case 6:
      return "DC";
    case 7:
      return "DCC";
    case 8:
      return "DCCC";
    case 9:
      return "CM";
    default:
      return "";
  }
};

/**
 * @param {number} num
 * @return {string}
 */
const convertDiz = function (num) {
  switch (num) {
    case 1:
      return "X";
    case 2:
      return "XX";
    case 3:
      return "XXX";
    case 4:
      return "XL";
    case 5:
      return "L";
    case 6:
      return "LX";
    case 7:
      return "LXX";
    case 8:
      return "LXXX";
    case 9:
      return "XC";
    default:
      return "";
  }
};

/**
 * @param {number} num
 * @return {string}
 */
const convertUnits = function (num) {
  switch (num) {
    case 1:
      return "I";
    case 2:
      return "II";
    case 3:
      return "III";
    case 4:
      return "IV";
    case 5:
      return "V";
    case 6:
      return "VI";
    case 7:
      return "VII";
    case 8:
      return "VIII";
    case 9:
      return "IX";
    default:
      return "";
  }
};

/**
 * @param {number} num
 * @return {string}
 */
const intToRoman = function (num) {
  let romanStr = "";

  const units = num % 10;
  const dizaines = num >= 10 ? ((num - units) / 10) % 10 : 0;
  const centaines = num >= 100 ? ((num - 10 * dizaines - units) / 100) % 10 : 0;
  const mill =
    num >= 1000
      ? ((num - 100 * centaines - 10 * dizaines - units) / 1000) % 10
      : 0;
  console.log(dizaines, units);

  romanStr += convertMill(mill);
  romanStr += convertCent(centaines);
  romanStr += convertDiz(dizaines);
  romanStr += convertUnits(units);

  return romanStr;
};

// ============================================================================================

console.log(intToRoman(3)); // Expected III
console.log(intToRoman(10)); // Expected X
console.log(intToRoman(9)); // Expected IX
console.log(intToRoman(58)); // Expected LVIII
console.log(intToRoman(1994)); // Expected MCMXCIV
