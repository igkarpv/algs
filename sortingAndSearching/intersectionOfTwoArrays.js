/*
Given two arrays, write a function to compute their intersection.

Example 1:

Input: nums1 = [1,2,2,1], nums2 = [2,2]
Output: [2]
Example 2:

Input: nums1 = [4,9,5], nums2 = [9,4,9,8,4]
Output: [9,4]
Note:

Each element in the result must be unique.
The result can be in any order.
*/

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersection = function(nums1, nums2) {
    let intersect = [];
    for(let i = 0; i < nums1.length; i++) {
        for(let k = 0; k < nums2.length; k++) {
            if (nums2[k] != null && nums1[i] == nums2[k]) {
                nums2[k] = null
                if (!intersect.includes(nums1[i]))
                    intersect.push(nums1[i]);
                break;
            }
        }
    }
    return intersect;
};
