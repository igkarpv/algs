/*

Given a binary tree, imagine yourself standing on the right side of it, return the values of the nodes you can see ordered from top to bottom.

Example:

Input: [1,2,3,null,5,null,4]
Output: [1, 3, 4]
Explanation:

   1            <---
 /   \
2     3         <---
 \     \
  5     4       <---

  */


  /**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

var storeLevel = function(node, treeLevels, currLevel) {

    if (node == null)
        return

    let level = treeLevels.get(currLevel)
    if (level) {
        level.push(node.val)
    } else {
        treeLevels.set(currLevel, [node.val])
    }

    storeLevel(node.left, treeLevels, (currLevel+1))
    storeLevel(node.right, treeLevels, (currLevel+1))
}

/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var rightSideView = function(root) {

    let vals = []
    let treeLevels = new Map()
    storeLevel(root, treeLevels, 0)
    console.log(treeLevels)

    for(let i = 0; i < treeLevels.size; i++) {
        let level = treeLevels.get(i)

        let rightSideNode = level.pop()
        vals.push(rightSideNode)
    }

    return vals

};
