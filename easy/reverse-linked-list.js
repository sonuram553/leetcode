/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function (head) {
  let prev = null;
  let curr = head;

  while (curr) {
    const rightNode = curr.next;
    curr.next = prev;
    prev = curr;
    curr = rightNode;
  }

  return prev;
};

// With Recursion
function reverseList1(head) {
  function helper(prev, current, next) {
    current.next = prev;
    if (next === null) return current;
    return helper(current, next, next.next);
  }

  if (!head) return head;
  return helper(null, head, head.next);
}
