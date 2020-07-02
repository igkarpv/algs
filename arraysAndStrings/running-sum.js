/**
 * @param {number[]} nums
 * @return {number[]}
 */
var runningSum = function(nums) {
    const runningSum = []
    let sum = nums[0]
    runningSum.push(sum)
    for (let i = 1; i < nums.length; i++) {
        sum += nums[i]
        runningSum.push(sum)
    }
    return runningSum;
};
