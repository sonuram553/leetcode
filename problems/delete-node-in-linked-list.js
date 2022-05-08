// Delete a node in linked list without knowing the head

function deleteNode(node) {
  const deletedValue = node.val;
  const right = node.next;

  node.val = right.val;
  node.next = right.next;
  right.next = undefined;
}
