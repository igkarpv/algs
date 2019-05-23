/*

Given a string, find the length of the longest substring without repeating characters.

Example 1:

Input: "abcabcbb"
Output: 3
Explanation: The answer is "abc", with the length of 3.
Example 2:

Input: "bbbbb"
Output: 1
Explanation: The answer is "b", with the length of 1.
Example 3:

Input: "pwwkew"
Output: 3
Explanation: The answer is "wke", with the length of 3.
             Note that the answer must be a substring, "pwke" is a subsequence and not a substring.

*/

/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {

    let lo = 0;
    let hi = 0;
    let alphabet = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!\"#$%&\'()*+,-./:;<=>?@[\\]^_`{|}~ ';
    let arr = new Array(26);
    let str = '';
    let bestLength = 0;


    // abcabcbb
    while (hi < s.length) {
        let l = s[hi];
        let index = alphabet.indexOf(l);

        //console.log('l = ' + l +', index = ' + index);

        if (arr[index] == null) {
            arr[index] = 1;
            str+=l;

        } else {
            if (str.length > bestLength) {

                bestLength = str.length;
              //  console.log('bestLength = ' +bestLength);
            }

            hi = lo;

            lo++;

            arr = new Array(26);
            str ='';
        }

        hi++;

        if (hi == s.length && lo < hi) {
            lo++;
            hi = lo;
            if (str.length > bestLength) {
                bestLength = str.length;
            }
            arr = new Array(26);
            str = '';
        }

    }

    return bestLength

};
