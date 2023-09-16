function copyRandomList(head) {
  if (!head) return null;

  let curr = head;
  const map = new Map();

  while (curr) {
    map.set(curr, new Node(curr.val, null, null));
    curr = curr.next;
  }

  const copyHead = map.get(head);
  let copyCurr = copyHead;

  curr = head;
  while (curr) {
    if (curr.next) copyCurr.next = map.get(curr.next);
    if (curr.random) copyCurr.random = map.get(curr.random);
    copyCurr = copyCurr.next;
    curr = curr.next;
  }

  return copyHead;
}
