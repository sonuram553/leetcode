/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var oddEvenList = function (head) {
  if (!head?.next?.next) return head;

  let currentOdd = head;
  let currentEven = head.next;
  let evenStart = currentEven;

  while (true) {
    if (currentOdd.next?.next) {
      currentOdd = currentOdd.next = currentOdd.next.next;
    }

    if (currentEven.next) {
      currentEven = currentEven.next = currentEven.next.next;
    }

    if (!currentEven?.next) break;
  }

  currentOdd.next = evenStart;
  return head;
};
