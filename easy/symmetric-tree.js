class Node {
  constructor(data) {
    this.data = data;
    this.prev = null;
  }
}

class Stack {
  constructor() {
    this.top = null;
    this.size = 0;
  }

  push(data) {
    const node = new Node(data);
    if (!this.top) this.top = node;
    else {
      node.prev = this.top;
      this.top = node;
    }
    this.size += 1;
  }

  pop() {
    if (!this.top) return null;
    const node = this.top;
    this.top = this.top.prev;
    node.prev = null;
    this.size -= 1;
    return node;
  }
}

const isSymmetric = function (root) {
  if (!root.left && !root.right) return true;
  if (!root.left || !root.right) return false;

  const leftStack = new Stack();
  const rightStack = new Stack();
  leftStack.push(root.left);
  rightStack.push(root.right);

  while (leftStack.top && rightStack.top) {
    const leftNode = leftStack.pop();
    const rightNode = rightStack.pop();

    if (leftNode.data.val !== rightNode.data.val) return false;

    if (leftNode.data.right) {
      if (rightNode.data.left) {
        leftStack.push(leftNode.data.right);
        rightStack.push(rightNode.data.left);
      } else return false;
    } else if (rightNode.data.left) return false;

    if (leftNode.data.left) {
      if (rightNode.data.right) {
        leftStack.push(leftNode.data.left);
        rightStack.push(rightNode.data.right);
      } else return false;
    } else if (rightNode.data.right) return false;
  }

  return true;
};