/*
Given an array of integers nums sorted in ascending order, find the starting and ending position of a given target value.

Your algorithm's runtime complexity must be in the order of O(log n).

If the target is not found in the array, return [-1, -1].

Example 1:

Input: nums = [5,7,7,8,8,10], target = 8
Output: [3,4]
Example 2:

Input: nums = [5,7,7,8,8,10], target = 6
Output: [-1,-1]
*/

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function(nums, target) {

    if (nums.length == 0) {
        return [-1, -1]
    }

    if (nums.length == 1 && nums[0] == target) {
        return [0, 0]
    }

    let lo = 0
    let hi = nums.length - 1

    let start = -1
    let finish = -1

    while ( lo <= hi && (start == -1 || finish == -1)) {

        if (nums[lo] < target) {
            lo++
        } else if (nums[lo] == target) {
            start = lo
        }

        if (nums[hi] > target) {
            hi--
        } else if (nums[hi] == target) {
            finish = hi
        }

    }

    if (start != -1 && finish == -1) {
        finish = start
    } else if (finish != -1 && start == -1) {
        start = finish
    }

    return [start, finish]
};
