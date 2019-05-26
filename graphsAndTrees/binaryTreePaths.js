/*

Given a binary tree, return all root-to-leaf paths.

Note: A leaf is a node with no children.

Example:

Input:

   1
 /   \
2     3
 \
  5

Output: ["1->2->5", "1->3"]

Explanation: All root-to-leaf paths are: 1->2->5, 1->3

*/

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

/**
 * @param {TreeNode} root
 * @return {string[]}
 */
var getToLeaf = function(root, path, pathsList) {

    if (root == null) {
        return path
    }

    let newPath = path
    if (newPath.length == 0) {
        newPath = '' + root.val
    } else {
        newPath += '->' + root.val
    }

    // is I am leaf?
    if (root.left == null && root.right == null) {
        pathsList.push(newPath)
        return newPath
    }


    getToLeaf(root.left, newPath, pathsList)
    getToLeaf(root.right, newPath, pathsList)

    return newPath

}

var binaryTreePaths = function(root) {
    if (root == null) {
        return []
    }

    let pathsList = []

    let path = getToLeaf(root, '', pathsList)

    if (pathsList.length == 0)
        pathsList.push(path)

    return pathsList

};
