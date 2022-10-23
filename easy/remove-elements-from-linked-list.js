// Remove Linked List Elements

function removeElements(head, val) {
  if (!head) return head;

  let current = head;
  let prev = null;

  while (current) {
    if (current.val === val) {
      if (prev) {
        const right = current.next;
        prev.next = right;
        current.next = undefined;
        current = right;
      } else {
        head = current.next;
        current.next = undefined;
        current = head;
      }
    } else {
      prev = current;
      current = current.next;
    }
  }

  return head;
}
