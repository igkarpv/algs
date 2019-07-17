/*
Write a function to find the longest common prefix string amongst an array of strings.

If there is no common prefix, return an empty string "".

Example 1:

Input: ["flower","flow","flight"]
Output: "fl"
Example 2:

Input: ["dog","racecar","car"]
Output: ""
Explanation: There is no common prefix among the input strings.
Note:

All given inputs are in lowercase letters a-z.
*/
/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    // I collect prefixes, like I take first string, then go for next string match as much as possble from first string and then for next from that matched part, if not matched first with second take second as whole, what if third matches with first?

    if (strs.length == 0) return ''

    let prefix = strs[0]
    for (let i = 1; i < strs.length; i++) {
        while(strs[i].indexOf(prefix) != 0) {
            prefix = prefix.substring(0, prefix.length - 1)
            if (prefix.length == 0) return ''
        }
    }

    return prefix

};
