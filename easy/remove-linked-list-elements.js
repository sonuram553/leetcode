/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} val
 * @return {ListNode}
 */
var removeElements = function (head, val) {
  while (head && head.val === val) {
    head = head.next;
  }

  let prev = head;
  let curr = head?.next;

  while (curr) {
    if (curr.val === val) {
      const nextNode = curr.next;
      prev.next = nextNode;
      curr.next = null;
      curr = nextNode;
    } else {
      prev = curr;
      curr = curr.next;
    }
  }

  return head;
};
