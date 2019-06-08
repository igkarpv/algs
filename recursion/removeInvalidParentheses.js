/*
Remove the minimum number of invalid parentheses in order to make the input string valid. Return all possible results.

Note: The input string may contain letters other than the parentheses ( and ).

Example 1:

Input: "()())()"
Output: ["()()()", "(())()"]
Example 2:

Input: "(a)())()"
Output: ["(a)()()", "(a())()"]
Example 3:

Input: ")("
Output: [""]
*/

/**
 * @param {string} s
 * @return {string[]}
 */

function isValid(s) {
  let counter = 0;
  for(let i = 0; i < s.length; i++) {
    const c = s[i];
    if(c == '(') counter++;
    if(c == ')' && counter-- == 0) return false;
  }
  return counter == 0;
}

var getGoodAndBadParentheses = function(s) {
    let good = []
    let bad = []

    let opened = []

    let lo = 0
    while (lo < s.length) {
        if (s[lo] == '(') {
            opened.push(lo)
        } else if (s[lo] == ')') {

            if (opened.length > 0) {
                let opIndex = opened.pop()
                good.push(opIndex)
                good.push(lo)
            } else {
                bad.push(lo)
            }

        }
        lo++
    }

    if (opened.length > 0) {
        bad = bad.concat(opened)
    }

    return [[...good], [...bad]];
}

var removeIndexes = function(s, remIndexes) {
    let res = ''
    for (let i = 0; i < s.length; i++) {
        if (!remIndexes.includes(i)) {
            res += s[i]
        }
    }

    return res

}

var nextPermutation = function(allNumbers, curr, maxLen, res, validCases, s) {

    if (curr.length == maxLen) {
        let caseStr = removeIndexes(s, curr)
        //console.log(caseStr)
        if (isValid(caseStr) && !validCases.has(caseStr)) {
           validCases.add(caseStr)
        }

        //res.push(curr.slice())
    }

    for (let i = 0; i < allNumbers.length; i++) {

        let numb = allNumbers[i]

        curr.push(numb)

        nextPermutation(allNumbers.slice(i+1), curr, maxLen, res, validCases, s)

        curr.pop()

    }

}

var removeInvalidParentheses = function(s) {

   let goodAndBadChars = getGoodAndBadParentheses(s)
   let badChars = goodAndBadChars[1]
   let goodChars = goodAndBadChars[0]

   if (badChars.length == 0) {
       let res = []
       res.push(s)
       return res
   }

   let numberOfCharsToRemove = badChars.length

   let allNumbers = []
   for (let i = 0; i < s.length; i++) {
       allNumbers.push(i)
   }

   let validCases = new Set()

   let permutations = []
   let curr = []
   nextPermutation(allNumbers, curr, numberOfCharsToRemove, permutations, validCases, s)

   return Array.from(validCases)
};
