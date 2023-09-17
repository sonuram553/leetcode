function rotateRight(head, k) {
  if (!head) return null;

  let size = 0;
  let currentNode = head;

  while (currentNode) {
    size++;
    currentNode = currentNode.next;
  }

  k = k % size;

  // When k is multiple of size
  if (k === 0) return head;

  currentNode = head;
  for (let i = 1; i < size - k; i++) {
    currentNode = currentNode.next;
  }

  const newHead = currentNode.next;
  currentNode.next = null;
  currentNode = newHead;

  while (currentNode.next) {
    currentNode = currentNode.next;
  }

  // We are at the last node. Set it's next to head;
  currentNode.next = head;
  return newHead;
}
