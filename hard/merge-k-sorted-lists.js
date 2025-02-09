// === SOLUTION 1 ===
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
var mergeKLists = function (lists) {
  if (!lists.length) return null;

  while (lists.length > 1) {
    let i = 0;
    const mergedList = [];

    while (i < lists.length) {
      mergedList.push(
        mergeTwoLists(lists[i], i + 1 < lists.length ? lists[i + 1] : null)
      );
      i += 2;
    }

    lists = mergedList;
  }

  return lists[0];
};

// === SOLUTION 2 ===
/**
 * Definition for singly-linked list.
 * class ListNode {
 *     constructor(val = 0, next = null) {
 *         this.val = val;
 *         this.next = next;
 *     }
 * }
 */
//
class Solution {
  /**
   * @param {ListNode[]} lists
   * @return {ListNode}
   */
  mergeKLists(lists) {
    if (!lists.length) return null;

    function helper(lists, s = 0, e = lists.length - 1) {
      if (s === e) return lists[s];
      if (s > e) return;

      const mid = (s + e) >>> 1;
      return mergeTwoList(helper(lists, s, mid), helper(lists, mid + 1, e));
    }

    return helper(lists);
  }
}

function mergeTwoLists(l1, l2) {
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
}
