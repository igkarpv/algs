/*

Merge two sorted linked lists and return it as a new list. The new list should be made by splicing together the nodes of the first two lists.

Example:

Input: 1->2->4, 1->3->4
Output: 1->1->2->3->4->4
*/

// 1 -> 2 -> 4
// 1 -> 3 -> 4
// [? -> ? -> ? -> ? -> ? -> ?
// while (l1 || l2)
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
//
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var mergeTwoLists = function(l1, l2) {
    // edge case - passed  null node for l1, l2, or both
    if (l1 == null || l2 == null) {
        return l1 == null ? l2 : l1;
    }
    if (l1 == null && l2 == null) {
        return null;
    }

    // pointers to each linked list
    let p1 = l1;
    let p2 = l2;
    let dummyHead = new ListNode(null);
    let tail = dummyHead;


    while (p1 !== null && p2 !== null) {
        if (p1.val < p2.val) {
            [tail, p1] = mergeNode(tail, p1);
        } else if (p1.val > p2.val) {
            [tail, p2] = mergeNode(tail, p2);
        } else {
            // case p1.val and p2.val are equal
            [tail, p1] = mergeNode(tail, p1);
            [tail, p2] = mergeNode(tail, p2);
        }
    }

    tail.next = p1 == null ? p2 : p1;

    return dummyHead.next;
};

function mergeNode(tail, node) {
    tail.next = node;
    tail = node;
    node = node.next;
    return [tail, node];
}
