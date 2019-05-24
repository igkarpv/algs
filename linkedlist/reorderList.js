/*

Given a singly linked list L: L0→L1→…→Ln-1→Ln,
reorder it to: L0→Ln→L1→Ln-1→L2→Ln-2→…

You may not modify the values in the list's nodes, only nodes itself may be changed.

Example 1:

Given 1->2->3->4, reorder it to 1->4->2->3.
Example 2:

Given 1->2->3->4->5, reorder it to 1->5->2->4->3.

*/

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {void} Do not return anything, modify head in-place instead.
 */
var reorderList = function(head) {

    const map = new Map()
    let node = head
    let index = 0;
    while (node) {
        map.set(index, node);
        node = node.next
        index++;
    }

    node = map.get(0)
    let step = 0;

    let lo = 0;
    let hi = index - 1;

    while(step < index) {

        if (step == 0 || step % 2 == 0) {
            node = map.get(lo)
            node.next = map.get(hi)

            lo++
        } else {
            node = map.get(hi)
            node.next = map.get(lo)
            hi--
        }


        step++;

    }

    if (node)
        node.next = null

    return head
};
