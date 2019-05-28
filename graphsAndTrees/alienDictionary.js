/*

There is a new alien language which uses the latin alphabet. However, the order among letters are unknown to you. You receive a list of non-empty words from the dictionary, where words are sorted lexicographically by the rules of this new language. Derive the order of letters in this language.

Example 1:

Input:
[
  "wrt",
  "wrf",
  "er",
  "ett",
  "rftt"
]

Output: "wertf"
Example 2:

Input:
[
  "z",
  "x"
]

Output: "zx"
Example 3:

Input:
[
  "z",
  "x",
  "z"
]

Output: ""

Explanation: The order is invalid, so return "".
Note:

You may assume all letters are in lowercase.
You may assume that if a is a prefix of b, then a must appear before b in the given dictionary.
If the order is invalid, return an empty string.
There may be multiple valid order of letters, return any one of them is fine.
*/

/**
 * @param {string[]} words
 * @return {string}
 */

var dfs = function(letter, nodesMap, visited, orderList) {
    visited[letter] = 1

    console.log(letter)
    let neighbors = nodesMap.get(letter)
    console.log(neighbors)

    for(let neighbor of neighbors) {
        if (visited[neighbor] == 1) return false
        if (visited[neighbor] == 0 && !dfs(neighbor, nodesMap, visited, orderList)) return false
    }

    visited[letter] = 2
    orderList.push(letter)

    return true

}


var alienOrder = function(words) {

    if (words.length == 1) {
        return words[0];
    }

   let nodesMap = new Map();

   for(let i = 0; i < words.length - 1; i++) {
       let w = words[i]
       let wNext = words[i + 1]

       for(let l = 0; l < w.length; l++) {
           let neighbors = nodesMap.get(w[l])
           if (typeof neighbors == 'undefined') {
                neighbors = []
                nodesMap.set(w[l], neighbors)
           }
       }

       for(let l = 0; l < wNext.length; l++) {
           let neighbors = nodesMap.get(wNext[l])
           if (typeof neighbors == 'undefined') {
                neighbors = []
                nodesMap.set(wNext[l], neighbors)
           }
       }

       for(let l = 0; l < Math.min(w.length, wNext.length); l++) {
           if (w[l] != wNext[l]) {

               let neighbors = nodesMap.get(w[l])

               if (typeof neighbors == 'undefined') {
                   neighbors = []
               }

               if (!neighbors.includes(wNext[l])) {
                 neighbors.push(wNext[l])
               }

               nodesMap.set(w[l], neighbors)
               break;
           }
       }

   }

   let firstLetter = words[0][0]

   if (nodesMap.size == 0) {
       return firstLetter
   }

   let visited = {}
   let order = ''
   let orderList = []

   //console.log(nodesMap)

   for (let letter of nodesMap.keys()) {
       visited[letter] = 0
   }

   for (let letter of nodesMap.keys()) {
       if (visited[letter] == 0) {
           if (!dfs(letter, nodesMap, visited, orderList)) {
                return ''
           }
       }
   }

   return orderList.reverse().join('')


};
