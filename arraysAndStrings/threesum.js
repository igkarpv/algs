/**
 * @param {number[]} nums
 * @return {number[][]}
 */
 var threeSum = function(nums) {

    let res = [];
    let finalRes = [];
    let hashes = [];
    nums = nums.sort(function(a, b){return a-b});

    for(let i = 0; i < nums.length - 1; i++) {
        let number = nums[i];

        if (i > 0 && nums[i] == nums[i - 1])
            continue;
        if (nums[i] > 0) {
            break;
        }
        let lo = i + 1;
        let hi = nums.length - 1;

        while (lo < hi) {
            let sum = nums[lo] + nums[hi];

            
            if (number + sum == 0) {
                let arr = [];
                arr.push(number);
                arr.push(nums[lo]);
                arr.push(nums[hi]);

                finalRes.push(arr);

                while (lo < hi && nums[lo] == nums[lo + 1]) {
                    lo++;
                }

                while (lo < hi && nums[hi] == nums[hi - 1]) {
                    hi++;
                }

                lo++;
                hi--;
            } else if (number + sum < 0) {
                lo++;
            } else {
                hi--;
            }

        }

    }
    return finalRes;

}


console.log(threeSum([1,-1,-1,0]));
