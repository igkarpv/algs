/*

Given a binary tree, you need to compute the length of the diameter of the tree. The diameter of a binary tree is the length of the longest path between any two nodes in a tree. This path may or may not pass through the root.

Example:
Given a binary tree
          1
         / \
        2   3
       / \
      4   5
Return 3, which is the length of the path [4,2,1,3] or [5,2,1,3].

Note: The length of path between two nodes is represented by the number of edges between them.
*/

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

// count edges
var dfs = function(root, paths) {
    if (!root) {
        return 0
    }

    //console.log(root.val)

    let maxEdgesLeft = dfs(root.left, paths)
    let maxEdgesRight = dfs(root.right, paths)

    paths.push((maxEdgesLeft+maxEdgesRight))
    //console.log(paths)
    return 1 + Math.max(maxEdgesLeft, maxEdgesRight)
}
/**
 * @param {TreeNode} root
 * @return {number}
 */
var diameterOfBinaryTree = function(root) {
    if (!root) {
        return 0
    }

    let paths = []
    let edgesLeft = dfs(root.left, paths)
    let edgesRight = dfs(root.right, paths)

    /*console.log(edgesLeft)
    console.log(edgesRight)
    console.log(paths)*/
    paths.push(edgesLeft + edgesRight)
    paths.sort((a, b) => b - a)

    return paths[0]
};
