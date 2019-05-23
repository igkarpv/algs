/*

You are given two non-empty linked lists representing two non-negative integers. The digits are stored in reverse order and each of their nodes contain a single digit. Add the two numbers and return it as a linked list.

You may assume the two numbers do not contain any leading zero, except the number 0 itself.

Example:

Input: (2 -> 4 -> 3) + (5 -> 6 -> 4)
Output: 7 -> 0 -> 8
Explanation: 342 + 465 = 807.

*/

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */

var addTwoNumbers = function(l1, l2) {

    var carry = 0;
    var sum = 0;
    var l3 = new ListNode();
    var newNode = l3;

    while (l1 || l2) {
        var new_l1 = (l1 != null) ? l1.val : 0;
        var new_l2 = (l2 != null) ? l2.val : 0;
        var result = (new_l1 + new_l2 + carry);
        sum = result % 10;
        carry = Math.trunc(result / 10);

        if (l1 != null) {
            l1 = l1.next;
        }

        if (l2 != null) {
            l2 = l2.next;
        }

        l3.next = new ListNode(sum);
        l3 = l3.next;
    }

    if (carry > 0) {
        l3.next = new ListNode(carry);
    }

    return newNode.next;

};
