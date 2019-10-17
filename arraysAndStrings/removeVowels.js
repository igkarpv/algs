/**
 * @param {string} S
 * @return {string}
 */
var removeVowels = function(S) {
    const vowels = ['a', 'e', 'i', 'o', 'u']
    let newS = ''
    for(let i = 0; i < S.length; i++) {
        if (!vowels.includes(S[i])) {
            newS += S[i]
        }
    }

    return newS
};
