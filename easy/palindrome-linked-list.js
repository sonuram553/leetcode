// Palindrome Linked List
// By using the approach to reverse the second half of the linked list

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

function findMiddle(head) {
  if (!head || !head.next) return head;

  let slow = head;
  let fast = head.next.next;

  while (fast) {
    slow = slow.next;
    fast = fast.next && fast.next.next;
  }

  return slow;
}

function reverseLinkedList(head) {
  if (!head || !head.next) return head;

  let left = null;
  let current = head;
  let right = head.next;

  while (current) {
    current.next = left;
    left = current;
    current = right;
    right = right && right.next;
  }

  return left;
}

function isPalindrome(head) {
  const middle = findMiddle(head);
  const tail = reverseLinkedList(middle.next);

  let left = head;
  let right = tail;
  let flag = true;

  while (right) {
    if (left.val !== right.val) {
      flag = false;
      break;
    }
    left = left.next;
    right = right.next;
  }

  middle.next = reverseLinkedList(tail);

  // print(head);

  return flag;
}

function print(head) {
  let node = head;

  while (node) {
    console.log(node.val);
    node = node.next;
  }
}

const head = new Node(1);
head.next = new Node(2);
head.next.next = new Node(2);
head.next.next.next = new Node(1);

console.log(isPalindrome(head));
