function reverseBetween(head, left, right) {
  if (left === right) return head;

  if (left === 1) {
    let count = 0;
    let prev = head;
    let curr = head.next;
    let next;

    while (count < right - left) {
      next = curr.next;
      curr.next = prev;
      prev = curr;
      curr = next;
      count++;
    }

    head.next = curr;
    head = prev;
    return head;
  }

  let prevNodeToLeft = head;
  let count = 1;

  while (count < left - 1) {
    prevNodeToLeft = prevNodeToLeft.next;
    count++;
  }

  let prev = prevNodeToLeft.next;
  let curr = prev.next;
  count = 0;

  while (count < right - left) {
    next = curr.next;
    curr.next = prev;
    prev = curr;
    curr = next;
    count++;
  }

  prevNodeToLeft.next.next = curr;
  prevNodeToLeft.next = prev;
  return head;
}
