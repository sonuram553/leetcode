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
