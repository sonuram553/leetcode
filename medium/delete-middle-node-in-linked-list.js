function deleteMiddle(head) {
  let prev = null;
  let slow = head;
  let fast = head;

  while (fast && fast.next) {
    prev = slow;
    slow = slow.next;
    fast = fast.next?.next;
  }

  if (prev) {
    prev.next = slow.next;
    slow.next = undefined;
  } else {
    head = head.next;
    slow.next = undefined;
  }

  return head;
}
