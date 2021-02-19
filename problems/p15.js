/*
============================= 3Sum =====================================

Given an array nums of n integers, are there elements a, b, c in nums such that a + b + c = 0? Find all unique triplets in the array which gives the sum of zero.

Notice that the solution set must not contain duplicate triplets.

 
Example 1:

  Input: nums = [-1,0,1,2,-1,-4]
  Output: [[-1,-1,2],[-1,0,1]]

Example 2:

  Input: nums = []
  Output: []

Example 3:

  Input: nums = [0]
  Output: []
 

Constraints:

  0 <= nums.length <= 3000
  -105 <= nums[i] <= 105

*/

// ============================================================================================

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
const threeSum = function (nums) {
  if (nums.length < 2) {
    return [];
  }

  // Reduce nums.length -  No need more than 3 of each number
  const reducedNums = [];
  for (let i = 0; i < nums.length; i += 1) {
    const numToCheck = nums[i];
    let count = 0;
    for (let j = 0; j < reducedNums.length; j += 1) {
      if (reducedNums[j] === numToCheck) {
        count += 1;
      }
    }
    if (count <= 2) {
      reducedNums.push(numToCheck);
    }
  }

  let triplets = [];
  nums = reducedNums;

  for (let i = 0; i < nums.length - 2; i += 1) {
    for (let j = i + 1; j < nums.length - 1; j += 1) {
      for (let k = j + 1; k < nums.length; k += 1) {
        if (nums[i] + nums[j] + nums[k] === 0) {
          const newTriplet = [nums[i], nums[j], nums[k]];
          newTriplet.sort();
          const tripletAsString = JSON.stringify(newTriplet);

          if (!triplets.includes(tripletAsString)) {
            triplets.push(tripletAsString);
          }
        }
      }
    }
  }

  const tripletsFinal = [];
  for (let i = 0; i < triplets.length; i += 1) {
    // Back to Array
    tripletsFinal.push(JSON.parse(triplets[i]));
  }

  return tripletsFinal;
};

// ============================================================================================

console.log(threeSum([-1, 0, 1, 2, -1, -4])); // Expected [[-1,-1,2],[-1,0,1]]
console.log(threeSum([])); // Expected []
console.log(threeSum([0])); // Expected []
