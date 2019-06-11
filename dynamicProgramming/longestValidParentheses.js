/*
Given a string containing just the characters '(' and ')', find the length of the longest valid (well-formed) parentheses substring.

Example 1:

Input: "(()"
Output: 2
Explanation: The longest valid parentheses substring is "()"
Example 2:

Input: ")()())"
Output: 4
Explanation: The longest valid parentheses substring is "()()"
*/

/**
 * @param {string} s
 * @return {number}
 */
var longestValidParenthesesStack = function(s) {
   // console.log(s.length)
    if (s.length == 0 || s.length == 1) {
        return 0
    }

    let n = s.length

    let stack = []
    let start = 0
    let maxLen = 0
    let lo = 0
    let top = -1
    while (lo < n) {

        if (s[lo] == '(') {
            stack[++top] = lo
        } else if (top >= 0) {

            top--


            let begin = top >= 0 ? stack[top] + 1 : start;
            let l = lo - begin + 1;
            if (maxLen < l) {
                maxLen = l;
            }

        } else {
                start = lo + 1
        }
        lo++
    }



    //console.log(T)

    return maxLen
};

/**
 * @param {string} s
 * @return {number}
 */
var longestValidParenthesesMatrix = function(s) {
    console.log(s.length)
    if (s.length == 0 || s.length == 1) {
        return s.length
    }

    let n = s.length
    let T = new Array(n).fill(0)

    for(let i = 0; i < n; i++) {
        T[i] = new Array(n).fill(0)
    }

    for (let len = 1 ; len <= n ; len++) {
        for (let i = 0 ; i < n - (len - 1) ; i++) {
            let j = i + (len - 1)
            if (i == j) {
                T[i][j] = 0
            } else if (s[i] == s[j]) {
                T[i][j] = T[i + 1][j - 1] + 2
            } else {
                T[i][j] = Math.max(T[i][j - 1], T[i + 1][j])
            }
        }
    }

    //console.log(T)

    return T[0][n - 1]
};
