function removeNthFromEnd(head, n) {
  let i = 1;
  let right = head;
  while (i < n) {
    right = right.next;
    i++;
  }

  const dummyNode = new ListNode(0);
  dummyNode.next = head;
  let left = dummyNode;

  while (right.next) {
    left = left.next;
    right = right.next;
  }

  const nodeToDelete = left.next;
  left.next = nodeToDelete.next;
  nodeToDelete.next = null;

  head = dummyNode.next;
  dummyNode.next = null;
  return head;
}
