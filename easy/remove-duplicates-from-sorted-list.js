const deleteDuplicates = function (head) {
  if (!head) return head;

  let node = head;

  while (node && node.next) {
    if (node.next.val === node.val) {
      const duplicateNode = node.next;
      node.next = duplicateNode.next;
      duplicateNode.next = null;
    } else node = node.next;
  }

  return head;
};
