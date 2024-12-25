/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
var getIntersectionNode = function (headA, headB) {
  let sizeA = 0;
  let sizeB = 0;

  let currA = headA;
  while (currA) {
    sizeA++;
    currA = currA.next;
  }

  let currB = headB;
  while (currB) {
    sizeB++;
    currB = currB.next;
  }

  let i = 0;
  currA = headA;
  currB = headB;

  if (sizeA > sizeB) {
    while (i < sizeA - sizeB) {
      currA = currA.next;
      i++;
    }
  } else if (sizeB > sizeA) {
    while (i < sizeB - sizeA) {
      currB = currB.next;
      i++;
    }
  }

  while (currA) {
    if (currA === currB) return currA;
    currA = currA.next;
    currB = currB.next;
  }

  return null;
};
