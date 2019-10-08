/*
Given an integer array nums, find the contiguous subarray (containing at least one number) which has the largest sum and return its sum.

Example:

Input: [-2,1,-3,4,-1,2,1,-5,4],
Output: 6
Explanation: [4,-1,2,1] has the largest sum = 6.
Follow up:

If you have figured out the O(n) solution, try coding another solution using the divide and conquer approach, which is more subtle.
*/

/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
    return helper(nums, 0, nums.length - 1)
};

function crossSum(nums, left, right, p) {
    if (left == right) return nums[left]

    let leftSubsum = Number.NEGATIVE_INFINITY
    let currSum = 0
    for(let i = p; i > left - 1; --i) {
        currSum += nums[i]
        console.log(currSum)
        leftSubsum = Math.max(leftSubsum, currSum)
    }
    console.log('----')
    let rightSubsum = Number.NEGATIVE_INFINITY
    currSum = 0
    for(let i = p + 1; i < right + 1; ++i) {

        currSum += nums[i]
        console.log(currSum)
        rightSubsum = Math.max(rightSubsum, currSum)
    }

    return leftSubsum + rightSubsum
}

function helper(nums, left, right) {
    if (left == right) return nums[left]
    //console.log(`${left}, ${right}`)
    let p = Math.floor((left + right) / 2)
    let leftSum = helper(nums, left, p)
    let rightSum = helper(nums, p + 1, right)
    let crossSumVal = crossSum(nums, left, right, p)
    console.log(`crossSumVal = ${crossSumVal}`)
    console.log(`leftSum = ${leftSum}`)
    console.log(`rightSum = ${rightSum}`)
    let res = Math.max(Math.max(leftSum, rightSum), crossSumVal)
    console.log(res)
    return Math.max(Math.max(leftSum, rightSum), crossSumVal)
}
