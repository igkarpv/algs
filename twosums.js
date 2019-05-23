var twoSum = function(nums, target) {

    var res = [-1, -1];
    let possible = new Array(target);

    for(let i = 0; i < nums.length; i++) {
        let possibleFirstNum = nums[i];
        let possibleSecondNum = target - possibleFirstNum;

        if (possibleFirstNum <= target) {
            // this is possible number for res
            possible[possibleFirstNum] = i;
            
            if (typeof possible[possibleSecondNum] != 'undefined') {
                res[0] = possible[possibleFirstNum];
                res[1] = possible[possibleSecondNum];
                if (res[0] > res[1]) {
                  res[0] = possible[possibleSecondNum];
                  res[1] = possible[possibleFirstNum];
                }

            }

        }



    }

    return res;
};

console.log(twoSum([2,7,11,15], 9));
