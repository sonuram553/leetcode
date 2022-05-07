// Reverse a linked list

function reverseList(head) {
  if (!head) return null;

  let prev = null;
  let current = head;
  let next = head.next;

  while (next) {
    current.next = prev;
    prev = current;
    current = next;
    next = next.next;
  }

  current.next = prev;
  head = current;

  return head;
}

// With Recursion

function reverseList1(head) {
  function helper(prev, current, next) {
    current.next = prev;
    if (next === null) return current;
    return helper(current, next, next.next);
  }

  if (!head) return head;
  return helper(null, head, head.next);
}
