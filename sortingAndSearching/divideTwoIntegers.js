/*
Given two integers dividend and divisor, divide two integers without using multiplication, division and mod operator.

Return the quotient after dividing dividend by divisor.

The integer division should truncate toward zero.

Example 1:

Input: dividend = 10, divisor = 3
Output: 3
Example 2:

Input: dividend = 7, divisor = -3
Output: -2
Note:

Both dividend and divisor will be 32-bit signed integers.
The divisor will never be 0.
Assume we are dealing with an environment which could only store integers within the 32-bit signed integer range: [−231,  231 − 1]. For the purpose of this problem, assume that your function returns 231 − 1 when the division result overflows.
*/

/**
 * @param {number} dividend
 * @param {number} divisor
 * @return {number}
 */
var divide = function(dividend, divisor) {

    if (divisor == -1 && dividend == -2147483648) return 2147483647;

    let count = 0

    let sum = 0;

    let sign = 1;

    if ( (dividend < 0 && divisor > 0) || (dividend > 0 && divisor < 0) ) {
        sign = -1
    }

    if (Math.abs(dividend) == Math.abs(divisor)) {
        return sign < 0 ? -1 : 1
    }

    if (Math.abs(divisor) == 1) {
        return sign < 0 ? -Math.abs(dividend) : Math.abs(dividend)
    }

    while (sum < Math.abs(dividend)) {
        count++
        sum += Math.abs(divisor)

    }

    if (sum > Math.abs(dividend))
        count--

    if (count == -1) {
        return 0
    }

    return sign < 0 ? -count : count


};
