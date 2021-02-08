/*
======================================== Add Two Numbers =========================================

You are given two non-empty linked lists representing two non-negative integers. The digits are stored in reverse order, and each of their nodes contains a single digit. Add the two numbers and return the sum as a linked list.

You may assume the two numbers do not contain any leading zero, except the number 0 itself.
 
Example 1:

    2 -> 4 -> 3

    5 -> 6 -> 4
    ___________

    7 -> 0 -> 8

    Input: l1 = [2,4,3], l2 = [5,6,4]
    Output: [7,0,8]
    Explanation: 342 + 465 = 807.

Example 2:

    Input: l1 = [0], l2 = [0]
    Output: [0]

Example 3:

    Input: l1 = [9,9,9,9,9,9,9], l2 = [9,9,9,9]
    Output: [8,9,9,9,0,0,0,1]
 

Constraints:

    The number of nodes in each linked list is in the range [1, 100].
    0 <= Node.val <= 9
    It is guaranteed that the list represents a number that does not have leading zeros.


// ============================================================================================

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */

function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}

/**
 * @param {ListNode} list
 * @return {number}
 */
const extractNumberFromList = function (list) {
  let temp = list;
  let num = 0;
  let power = 0;

  while (temp.next !== null) {
    num += Math.pow(10, power) * temp.val;
    temp = temp.next;
    power += 1;
  }

  num += Math.pow(10, power) * temp.val;

  return num;
};

/**
 * @param {number} num
 * @return {ListNode}
 */
const createListFromNumber = function (num) {
  const numS = num.toString();
  let temp = new ListNode(-1);
  let result = temp;

  for (let i = numS.length - 1; i >= 0; i -= 1) {
    const digit = parseInt(numS[i]);
    temp.next = new ListNode(digit);
    temp = temp.next;
  }

  return result.next;
};

/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
const addTwoNumbers = function (l1, l2) {
  const num1 = extractNumberFromList(l1);
  const num2 = extractNumberFromList(l2);

  return createListFromNumber(num1 + num2);
};

// ============================================================================================

// [2, 4, 3]
node1 = new ListNode(2);
node2 = new ListNode(4);
node3 = new ListNode(3);

node1.next = node2;
node2.next = node3;

// [5, 6, 4]
node4 = new ListNode(5);
node5 = new ListNode(6);
node6 = new ListNode(4);

node4.next = node5;
node5.next = node6;

console.log(addTwoNumbers(node1, node4)); // expected : [7, 0, 8]
