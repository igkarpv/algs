/*

Convert a BST to a sorted circular doubly-linked list in-place. Think of the left and right pointers as synonymous to the previous and next pointers in a doubly-linked list.

Let's take the following BST as an example, it may help you understand the problem better:

We want to transform this BST into a circular doubly linked list. Each node in a doubly linked list has a predecessor and successor. For a circular doubly linked list, the predecessor of the first element is the last element, and the successor of the last element is the first element.

The figure below shows the circular doubly linked list for the BST above. The "head" symbol means the node it points to is the smallest element of the linked list.


Specifically, we want to do the transformation in place. After the transformation, the left pointer of the tree node should point to its predecessor, and the right pointer should point to its successor. We should return the pointer to the first element of the linked list.

The figure below shows the transformed BST. The solid line indicates the successor relationship, while the dashed line means the predecessor relationship
*/
/**
 * // Definition for a Node.
 * function Node(val,left,right) {
 *    this.val = val;
 *    this.left = left;
 *    this.right = right;
 * };
 */
/**
 * @param {Node} root
 * @return {Node}
 */

var dfs = function(parent, node, queue, list) {
    if (!node) {
        return null
    }

    let resRight = dfs(node, node.right, queue, list)

    let childNode = queue.shift()

    list.push(node)
    queue.push(node)

    dfs(node, node.left, queue, list)

    return true
}

var treeToDoublyList = function(root) {
    let queue = []
    let list = []

    dfs(null, root, queue, list)

    if (list.length == 0) {
        return null
    }

    list = list.reverse()
    let prevNode = list[0]
    //console.log(prevNode)
    for (let i = 1; i < list.length; i++) {

        let node = list[i]

        prevNode.right = node
        node.left = prevNode

        prevNode = node
    }

    list[0].left = list[list.length - 1]
    list[list.length - 1].right = list[0]

    return list[0]
};
