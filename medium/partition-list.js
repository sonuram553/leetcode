function partition(head, x) {
  if (!head) return null;

  const dummyNode = new ListNode(0);
  dummyNode.next = head;
  let curr = dummyNode;
  let right = null;
  let currRight;

  while (curr.next) {
    if (curr.next.val >= x) {
      const node = curr.next;
      curr.next = node.next;
      if (right) {
        currRight.next = node;
        currRight = node;
      } else currRight = right = node;
    } else curr = curr.next;
  }

  curr.next = right;
  if (currRight) currRight.next = null;
  return dummyNode.next;
}
