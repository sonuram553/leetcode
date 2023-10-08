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
var sortList = function (head) {
  function mergeSort(head) {
    if (!head?.next) return head;

    const midNode = findMid(head);
    const nextNode = midNode.next;
    midNode.next = null;

    return merge(mergeSort(head), mergeSort(nextNode));
  }

  return mergeSort(head);
};

function merge(left, right) {
  if (left && right) {
    let head;
    let currHead;
    let currLeft = left;
    let currRight = right;

    while (currLeft && currRight) {
      if (currLeft.val < currRight.val) {
        if (head) {
          currHead.next = currLeft;
          currHead = currLeft;
        } else head = currHead = left;
        currLeft = currLeft.next;
      } else {
        if (head) {
          currHead.next = currRight;
          currHead = currRight;
        } else head = currHead = right;
        currRight = currRight.next;
      }
    }

    if (currLeft) currHead.next = currLeft;
    if (currRight) currHead.next = currRight;
    return head;
  } else return left || right;
}

function findMid(head) {
  if (!head) return;

  let slow = head;
  let fast = head;

  while (fast?.next?.next) {
    slow = slow.next;
    fast = fast.next.next;
  }

  return slow;
}
