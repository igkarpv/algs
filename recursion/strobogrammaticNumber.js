/*
A strobogrammatic number is a number that looks the same when rotated 180 degrees (looked at upside down).

Find all strobogrammatic numbers that are of length = n.

Example:

Input:  n = 2
Output: ["11","69","88","96"]
*/
const chars = [
  [0, 0],
  [1, 1],
  [8, 8],
  [6, 9],
  [9, 6]
]

var findStrobogrammatic = function(n) {
  const help = (n, zeros) => {
    if (n === 1) return [...(zeros ? ['0'] : []), '1', '8'];
    if (n === 2) return [...(zeros ? ['00'] : []), '11', '88', '69', '96'];


    const res = [];
    const reduced = help(n - 2, true);

    for (const [l, r] of chars) {
      if (!l && !zeros) continue;
      res.push(...reduced.map(s => `${l}${s}${r}`));
    }

    return res;
  }

  return help(n, n === 1);
};
