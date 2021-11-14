class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class MyQueue {
  head = null;
  tail = null;

  add(data) {
    const node = new Node(data);
    if (!this.head) this.head = this.tail = node;
    else {
      this.tail.next = node;
      this.tail = node;
    }
  }

  delete() {
    if (!this.head) return null;
    const node = this.head;
    this.head = node.next;
    node.next = null;
    return node;
  }
}

const isSameTree = function (p, q) {
  if (p === null && q === null) return true;
  if (!p || !q) return false;

  const leftTreeQ = new MyQueue();
  const rightTreeQ = new MyQueue();

  leftTreeQ.add(p);
  rightTreeQ.add(q);

  while (leftTreeQ.head && rightTreeQ.head) {
    const leftTreeNode = leftTreeQ.delete();
    const rightTreeNode = rightTreeQ.delete();

    if (leftTreeNode.data.val !== rightTreeNode.data.val) return false;

    if (leftTreeNode.data.left) {
      if (rightTreeNode.data.left) {
        leftTreeQ.add(leftTreeNode.data.left);
        rightTreeQ.add(rightTreeNode.data.left);
      } else return false;
    } else if (rightTreeNode.data.left) return false;

    if (leftTreeNode.data.right) {
      if (rightTreeNode.data.right) {
        leftTreeQ.add(leftTreeNode.data.right);
        rightTreeQ.add(rightTreeNode.data.right);
      } else return false;
    } else if (rightTreeNode.data.right) return false;
  }

  if (!leftTreeQ.head && !rightTreeQ.head) return true;
  return false;
};
