/*
Given two strings s and t, determine if they are both one edit distance apart.

Note:

There are 3 possiblities to satisify one edit distance apart:

Insert a character into s to get t
Delete a character from s to get t
Replace a character of s to get t
Example 1:

Input: s = "ab", t = "acb"
Output: true
Explanation: We can insert 'c' into s to get t.
Example 2:

Input: s = "cab", t = "ad"
Output: false
Explanation: We cannot get t from s by only one step.
Example 3:

Input: s = "1203", t = "1213"
Output: true
Explanation: We can replace '0' with '1' to get t.
*/


/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isOneEditDistance = function(s, t) {

    if (s.length == 0 && t.length == 0) {
        return false;
    }

    if (s == t) {
        return false
    }

    let index = 0;

    let longerStr = s.length > t.length ? s : t;
    let shorterStr = s.length > t.length ? t : s;

    if (shorterStr.length == 0 && longerStr.length == 1) {
        return true;
    }

    if (longerStr.length - shorterStr.length > 1) {
        return false;
    }

    if (s.length == t.length) {

        for(let index = 0; index < s.length; index++) {


            if (s[index] != t[index]) {
                // characters are different

                s = s.substring(0, index) + t[index] + s.substring(index + 1, s.length)

                if (s === t) {
                    return true;
                } else {
                    return false;
                }

            }
        }

    } else {

        let s2 = s;
        let t2 = t;
        let diffs = 0;
        for(let index = 0; index < longerStr.length; index++) {
            let ch = longerStr[index]
            let charIndexInShorterStr = shorterStr.indexOf(ch);

            if (charIndexInShorterStr == -1) {
                // character is not present
                let substr = longerStr.substring(0, index) + longerStr.substring(index + 1, longerStr.length);

                if (substr != shorterStr) {
                    return false; // first case
                } else {
                    return true;
                }

            } else {
                let s2Index = s2.indexOf(ch);
                let t2Index = t2.indexOf(ch);

                if (s2Index != -1 && t2Index != -1) {
                    s2 = s2.substring(0, s2Index) + s2.substring(s2Index + 1, s2.length);
                    t2 = t2.substring(0, t2Index) + t2.substring(t2Index + 1, t2.length);
                } else {
                    diffs++;
                }

            }
        }

        return diffs == 1;

    }

};
