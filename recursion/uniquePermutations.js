/*

Given a collection of numbers that might contain duplicates, return all possible unique permutations.

Example:

Input: [1,1,2]
Output:
[
  [1,1,2],
  [1,2,1],
  [2,1,1]
]
*/
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
let res;
var permuteUnique = function(nums) {
    nums.sort((a,b)=>a-b);

    res=[];

    backTrack(nums,[]);

    return res;
};


function backTrack(nums,path){
    console.log('-----')
    console.log('nums = ' + nums)
    console.log('path = ' + path)
    if(nums.length===0){
        res.push(path.slice());
    }

    let last='';
    for(let i=0;i<nums.length;i++){

        if(last===nums[i]) continue;

        path.push(nums[i]);
        last=nums[i]
        backTrack(nums.slice(0,i).concat(nums.slice(i+1)),path);
        path.pop();

    }
}
