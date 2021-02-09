/*
============================= Median of Two Sorted Arrays =====================================

Given two sorted arrays nums1 and nums2 of size m and n respectively, return the median of the two sorted arrays.

Follow up: The overall run time complexity should be O(log (m+n)).

 

Example 1:

    Input: nums1 = [1,3], nums2 = [2]
    Output: 2.00000
    Explanation: merged array = [1,2,3] and median is 2.

Example 2:

    Input: nums1 = [1,2], nums2 = [3,4]
    Output: 2.50000
    Explanation: merged array = [1,2,3,4] and median is (2 + 3) / 2 = 2.5.

Example 3:

    Input: nums1 = [0,0], nums2 = [0,0]
    Output: 0.00000

Example 4:

    Input: nums1 = [], nums2 = [1]
    Output: 1.00000

Example 5:

    Input: nums1 = [2], nums2 = []
    Output: 2.00000
 

Constraints:

    nums1.length == m
    nums2.length == n
    0 <= m <= 1000
    0 <= n <= 1000
    1 <= m + n <= 2000
    -106 <= nums1[i], nums2[i] <= 106

*/

// ============================================================================================

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
const mergeArrays = function (nums1, nums2) {
  let nums = [];

  while (nums1.length > 0 || nums2.length > 0) {
    if (nums1.length === 0) {
      nums = nums.concat(nums2);
      break;
    }
    if (nums2.length === 0) {
      nums = nums.concat(nums1);
      break;
    }

    if (nums1[0] <= nums2[0]) {
      nums.push(nums1[0]);
      nums1.splice(0, 1);
    } else {
      nums.push(nums2[0]);
      nums2.splice(0, 1);
    }
  }

  return nums;
};

/**
 * @param {number[]} nums
 * @return {number}
 */
const findMedian = function (nums) {
  if (nums.length === 0) {
    return 0;
  }

  const middle = (nums.length - 1) / 2;

  if ((nums.length - 1) % 2 === 0) {
    return nums[middle];
  } else {
    const medianBefore = nums[Math.floor(middle)];
    const medianAfter = nums[Math.floor(middle + 1)];
    return (medianAfter + medianBefore) / 2;
  }
};

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
const findMedianSortedArrays = function (nums1, nums2) {
  const nums = mergeArrays(nums1, nums2);
  const median = findMedian(nums);

  return Math.round(median * 10000) / 10000;
};

// ============================================================================================

console.log(findMedianSortedArrays([1, 3], [2])); // Expected 2.00000
console.log(findMedianSortedArrays([1, 2], [3, 4])); // Expected 2.50000
console.log(findMedianSortedArrays([0, 0], [0, 0])); // Expected 0.00000
console.log(findMedianSortedArrays([2], [])); // Expected 0.00000
