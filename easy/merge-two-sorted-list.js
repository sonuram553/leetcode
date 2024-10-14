/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var mergeTwoLists = function (l1, l2) {
  const dummyHead = new ListNode();
  let tail = dummyHead;

  while (l1 && l2) {
    if (l1.val <= l2.val) {
      tail.next = l1;
      tail = l1;
      l1 = l1.next;
    } else {
      tail.next = l2;
      tail = l2;
      l2 = l2.next;
    }
  }

  if (l1) tail.next = l1;
  if (l2) tail.next = l2;

  return dummyHead.next;
};

// Recursive Solution
var mergeTwoLists = function (l1, l2) {
  if (!(l1 || l2)) return null;
  if (!l1) return l2;
  if (!l2) return l1;

  if (l1.val <= l2.val) {
    l1.next = mergeTwoLists(l1.next, l2);
    return l1;
  }

  l2.next = mergeTwoLists(l1, l2.next);
  return l2;
};
