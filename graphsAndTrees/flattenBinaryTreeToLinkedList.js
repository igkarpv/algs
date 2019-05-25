/*

Given a binary tree, flatten it to a linked list in-place.

For example, given the following tree:

    1
   / \
  2   5
 / \   \
3   4   6
The flattened tree should look like:

1
 \
  2
   \
    3
     \
      4
       \
        5
         \
          6

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
 * @return {void} Do not return anything, modify root in-place instead.
 */
var flatten = function(root) {

    let que = []
    que.push(root)
    let node = que.pop()

    while (node) {

        if (node.right) {
            que.push(node.right)
        }

        if (node.left) {
            que.push(node.left)
        }

        node.right = que.pop()
        node.left = null

        node = node.right
    }

    return root

};
