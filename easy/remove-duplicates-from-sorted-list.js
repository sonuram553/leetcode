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
var deleteDuplicates = function (head) {
  let node = head;

  while (node && node.next) {
    if (node.next.val === node.val) {
      const duplicateNode = node.next;
      node.next = duplicateNode.next;
      duplicateNode.next = null;
    } else node = node.next;
  }

  return head;
};
