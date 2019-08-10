/*
mplement strStr().

Return the index of the first occurrence of needle in haystack, or -1 if needle is not part of haystack.

Example 1:

Input: haystack = "hello", needle = "ll"
Output: 2
Example 2:

Input: haystack = "aaaaa", needle = "bba"
Output: -1
Clarification:

What should we return when needle is an empty string? This is a great question to ask during an interview.

For the purpose of this problem, we will return 0 when needle is an empty string. This is consistent to C's strstr() and Java's indexOf().
*/
/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function(haystack, needle) {
    if (needle.length == 0) {
        return 0
    }

    let lo = 0
    while (lo < haystack.length) {
        if (haystack[lo] == needle[0]) {
            let lh = 1
            let found = true
            while(lh < needle.length) {
                if (haystack[lo + lh] != needle[lh]) {
                    found = false
                    break;
                }
                lh++
            }
            if (found) {
                return lo
            }

        }
        lo++
    }

    return -1
};
