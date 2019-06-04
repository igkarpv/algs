/*
Given a string containing digits from 2-9 inclusive, return all possible letter combinations that the number could represent.

A mapping of digit to letters (just like on the telephone buttons) is given below. Note that 1 does not map to any letters.



Example:

Input: "23"
Output: ["ad", "ae", "af", "bd", "be", "bf", "cd", "ce", "cf"].
Note:

Although the above answer is in lexicographical order, your answer could be in any order you want.
*/

/**
 * @param {string} digits
 * @return {string[]}
 */
var combine = function(digitStr, digits, index, letterMap, res) {
    let letterSet = letterMap['' + digits[index]]

    console.log(digits)

    for(let i = 0; i < letterSet.length; i++) {
        let l = letterSet[i]

        let currComb = digitStr + l

        if (currComb.length == digits.length)
            res.push(currComb)

        if (index < digits.length - 1) {
            combine(currComb, digits, index + 1, letterMap, res)
        }
    }
}

var letterCombinations = function(digits) {

    if (digits.length == 0) {
        return []
    }

    let letterMap = {
        '2': 'abc',
        '3': 'def',
        '4': 'ghi',
        '5': 'jkl',
        '6': 'mno',
        '7': 'pqrs',
        '8': 'tuv',
        '9': 'wxyz'
    }

    let res = []

    combine('', digits, 0, letterMap, res)

    return res
};
