/*
Given a collection of distinct integers, return all possible permutations.

Example:

Input: [1,2,3]
Output:
[
  [1,2,3],
  [1,3,2],
  [2,1,3],
  [2,3,1],
  [3,1,2],
  [3,2,1]
]
*/

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var nextPermutation = function(nums) {

    let hi = nums.length - 1;
    let lo = nums.length - 2;

    while (lo >= 0) {

        if (nums[lo] < nums[hi]) {

            // lo is point of permutation
            // now have to find number for change, it should be n > Min(from lo to nums.length)
            let min = null;
            let minIndex = nums.length - 1;
            for(let i = nums.length - 1; i >= lo; i--) {
                if (nums[i] > nums[lo] && (nums[i] < min || min == null)) {
                    min = nums[i];
                    minIndex = i;
                }
            }

            let tmp = nums[lo];
            nums[lo] = nums[minIndex];
            nums[minIndex] = tmp;

            let arr = nums.slice(lo + 1, nums.length).sort((a,b) => a - b);

            let index = 0;
            for(let i = lo + 1; i < nums.length;i++) {
                nums[i] = arr[index];
                index++;
            }

            return nums;
        } else {
            lo--;
            hi--;
        }

    }

    return nums.sort((a, b) => a - b);
};

var factorial = function(n) {
    if (n > 0)
        return n*factorial(n-1)
    else
        return 1

}

var permute = function(nums) {
    let res = []

    let numsCounter = []

    for(let n in nums) {
        if (!numsCounter.includes(n)) {
            numsCounter.push(n)
        }
    }

    let permTotalCount = factorial(numsCounter.length)
    let permCount = 0

    res.push(nums)
    permCount++

    let nextPerm = nextPermutation(nums.slice())

    while(permCount < permTotalCount) {
        res.push(nextPerm)
        permCount++

        nextPerm = nextPermutation(nextPerm.slice())
    }

    return res
};
