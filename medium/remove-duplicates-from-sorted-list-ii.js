function deleteDuplicates(head) {
  const dummyNode = new ListNode(0);
  dummyNode.next = head;

  let slow = dummyNode;
  while (head) {
    if (head.next && head.val === head.next.val) {
      while (head.next && head.val === head.next.val) {
        head = head.next;
      }
      slow.next = head.next;
    } else slow = slow.next;

    head = head.next;
  }

  return dummyNode.next;
}
