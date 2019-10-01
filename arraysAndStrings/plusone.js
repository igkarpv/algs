/*
Given a non-empty array of digits representing a non-negative integer, plus one to the integer.

The digits are stored such that the most significant digit is at the head of the list, and each element in the array contain a single digit.

You may assume the integer does not contain any leading zero, except the number 0 itself.

Example 1:

Input: [1,2,3]
Output: [1,2,4]
Explanation: The array represents the integer 123.
Example 2:

Input: [4,3,2,1]
Output: [4,3,2,2]
Explanation: The array represents the integer 4321.
*/
/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {
    // 1,2,3
    // 1,2,4
    // 1,2,9
    // 1,3,0
    // 1,9,9
    // 2,0,0
    // Solution should be able to handle this situation of increasing to next level
    // can be simple if val = 9, then increase by one prev and make current 0
    let index = digits.length - 1
    if (digits[index] === 9) {
        let digit = digits[index]
        while(digit === 9 && index >= 0) {
            digits[index] = 0
            index--
            digit = digits[index]
        }

        if (index < 0) {
            digits = [1, ...digits]
        } else {
            digits[index]++
        }

    } else {
        digits[index]++
    }

    return digits
};
