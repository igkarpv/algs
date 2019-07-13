/*
The string "PAYPALISHIRING" is written in a zigzag pattern on a given number of rows like this: (you may want to display this pattern in a fixed font for better legibility)

P   A   H   N
A P L S I I G
Y   I   R
And then read line by line: "PAHNAPLSIIGYIR"

Write the code that will take a string and make this conversion given a number of rows:

string convert(string s, int numRows);
Example 1:

Input: s = "PAYPALISHIRING", numRows = 3
Output: "PAHNAPLSIIGYIR"
Example 2:

Input: s = "PAYPALISHIRING", numRows = 4
Output: "PINALSIGYAHRPI"
Explanation:

P     I    N
A   L S  I G
Y A   H R
P     I
*/


/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function(s, numRows) {

    // First we go down for numRows
    // then up numRos - 2
    // so we collect words with step = numRows - 2 until end

    if (numRows == 1) return s

    let rows = []

    for (let i = 0; i < Math.min(numRows, s.length); i++)
        rows.push(new String())

    let currRow = 0
    let goingDown = false

    let lo = 0
    while(lo < s.length) {
        rows[currRow] += s[lo]
        if (currRow == 0 || currRow == numRows - 1) {
          goingDown = !goingDown
        }
        currRow += goingDown ? 1 : -1
        lo++
    }

    let rs = new String()
    for(let r of rows) {
        rs += r
    }
    return rs

};
