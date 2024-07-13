/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {number}
 */
var pairSum = function (head) {
  let slow = head;
  let fast = head;

  while (fast?.next?.next) {
    slow = slow.next;
    fast = fast.next.next;
  }

  let midHead = reverseLinkedList(slow.next);
  let curr = head;
  let maxSum = 0;

  while (midHead) {
    maxSum = Math.max(maxSum, curr.val + midHead.val);
    curr = curr.next;
    midHead = midHead.next;
  }

  return maxSum;
};

function reverseLinkedList(head) {
  let prev = null;
  let curr = head;

  while (curr) {
    const rightNode = curr.next;
    curr.next = prev;
    prev = curr;
    curr = rightNode;
  }

  return prev;
}
