/*
Given a set of distinct integers, nums, return all possible subsets (the power set).

Note: The solution set must not contain duplicate subsets.

Example:

Input: nums = [1,2,3]
Output:
[
  [3],
  [1],
  [2],
  [1,2,3],
  [1,3],
  [2,3],
  [1,2],
  []
]
*/

/**
 * @param {number[]} nums
 * @return {number[][]}
 */

var nextSubset = function(nums, curr, maxLen, res) {

    if (curr.length == maxLen) {
        res.push(curr.slice())
        return
    }

    for(let i = 0; i < nums.length; i++) {

        let numb = nums[i]
        curr.push(numb)
        nextSubset(nums.slice(i + 1), curr, maxLen, res)

        curr.pop()
    }

}

var subsets = function(nums) {
    let res = []
    let curr = []
    for(let l = 0; l <= nums.length; l++) {
        nextSubset(nums, curr, l, res)
    }

    return res
};
