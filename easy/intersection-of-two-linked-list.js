class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

// m, n are the number of nodes in listA and listB respectively.

// Runtime Complexity O(m * n)
function getIntersectionNode1(headA, headB) {
  let left = headA;

  while (left) {
    let right = headB;
    while (right) {
      console.log(left, right);
      if (right === left) return left;
      right = right.next;
    }
    left = left.next;
  }

  return null;
}

// Runtime Complexity O(m + n)
// Space Complexity O(m or n)
function getIntersectionNode2(headA, headB) {
  let left = headA;
  let right = headB;

  while (left) {
    left.visited = true;
    left = left.next;
  }

  while (right) {
    if (right.visited) return right;
    right = right.next;
  }

  return null;
}

// Runtime Complexity O(m + n)
// Space Complexity O(1)
function getIntersectionNode3(headA, headB) {
  let left = headA;
  let right = headB;
  let countLeft = 0;
  let countRight = 0;

  while (left) {
    countLeft += 1;
    left = left.next;
  }

  while (right) {
    countRight += 1;
    right = right.next;
  }

  left = headA;
  right = headB;

  if (countLeft > countRight) {
    let index = 0;
    while (index < countLeft - countRight) {
      index += 1;
      left = left.next;
    }
  } else if (countRight > countLeft) {
    let index = 0;
    while (index < countRight - countLeft) {
      index += 1;
      right = right.next;
    }
  }

  // Move left and right simultaneously
  while (left) {
    if (left === right) return left;
    left = left.next;
    right = right.next;
  }

  return null;
}

const headA = new Node(1);
headA.next = new Node(2);

const headB = new Node(3);
headB.next = headA.next;

console.log(getIntersectionNode1(headA, headB));
