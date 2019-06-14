/*
Given a non-empty string s and a dictionary wordDict containing a list of non-empty words, determine if s can be segmented into a space-separated sequence of one or more dictionary words.

Note:

The same word in the dictionary may be reused multiple times in the segmentation.
You may assume the dictionary does not contain duplicate words.
Example 1:

Input: s = "leetcode", wordDict = ["leet", "code"]
Output: true
Explanation: Return true because "leetcode" can be segmented as "leet code".
Example 2:

Input: s = "applepenapple", wordDict = ["apple", "pen"]
Output: true
Explanation: Return true because "applepenapple" can be segmented as "apple pen apple".
             Note that you are allowed to reuse a dictionary word.
Example 3:

Input: s = "catsandog", wordDict = ["cats", "dog", "sand", "and", "cat"]
Output: false
*/

/**
 * @param {string} s
 * @param {string[]} wordDict
 * @return {boolean}
 */


var doWordBreak = function(s, d, wordDict, cache) {
     if(d == s.length) return true;

   // console.log(d)
     if(cache.has(d)) return false;

     for(let i = 0; i < wordDict.length; i++){
         let word = wordDict[i]
         /*console.log(word)
         console.log(d)
         console.log(s.startsWith(word, d))*/
         if(s.startsWith(word, d)) {
             console.log(d + word.length)
            if (doWordBreak(s, (d + word.length), wordDict, cache)) return true;

             cache.add(d+word.length);
         }
      }

        return false;
}

var wordBreak = function(s, wordDict) {

    if (wordDict.length == 0) {
        return false
    }

    if (s.length == 0) {
        return false
    }

    let cache = new Set()
    return doWordBreak(s, 0, wordDict, cache);

};
