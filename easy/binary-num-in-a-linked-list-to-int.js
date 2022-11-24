function getDecimalValue(head) {
  let int = 0;
  let current = head;

  while (current) {
    int = 2 * int + current.val;
    current = current.next;
  }

  return int;
}
