/*
Given a string s, find the longest palindromic substring in s. You may assume that the maximum length of s is 1000.

Example 1:

Input: "babad"
Output: "bab"
Note: "aba" is also a valid answer.
Example 2:

Input: "cbbd"
Output: "bb"
*/

/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {

    if (s.length == 1 || s.length == 0) {
        return s
    }

    let T = new Array(s.length)

    for(let i = 0; i < T.length; i++) {
        T[i] = new Array(s.length).fill(false)
    }

    let longestLen = 0
    let beginIndex = 0
    let n = s.length
    for (let i = n; i >= 0; i--) {
        for (let j = i; j < n; j++) {

            if (i == j) {
                T[i][j] = true
            } else if (j == i + 1 || j == i + 2) {
                T[i][j] = s[i] == s[j]
            } else {
                T[i][j] = s[i] == s[j] && T[i + 1][j - 1];
            }

            if (T[i][j] && j - i + 1 >= longestLen) {
                longestLen = j - i + 1
                beginIndex = i
            }

        }
    }


   // console.log(T)
    return s.substring(beginIndex, beginIndex + longestLen)

};
