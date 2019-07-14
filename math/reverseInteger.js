/*
Given a 32-bit signed integer, reverse digits of an integer.

Example 1:

Input: 123
Output: 321
Example 2:

Input: -123
Output: -321
Example 3:

Input: 120
Output: 21
Note:
Assume we are dealing with an environment which could only store integers within the 32-bit signed integer range: [−231,  231 − 1]. For the purpose of this problem, assume that your function returns 0 when the reversed integer overflows.
*/
/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
    let reversed = 0;
    let max = Math.pow(2, 31)
    let min = -max
    max -= 1
    let number = x
    while (number != 0)  {

        let pop = Math.trunc(number % 10)

        number = Math.trunc(number / 10)
        if (reversed > max / 10 || (reversed == max / 10 && pop > 7)) return 0
        if (reversed < min / 10 || (reversed == min / 10 && pop < -8)) return 0
        reversed = (reversed * 10) + pop

        console.log(reversed)
    }
    return reversed
};
