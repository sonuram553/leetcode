class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class Stack {
  constructor() {
    this.head = null;
    this.size = 0;
  }

  push(val) {
    const node = new Node(val);

    node.next = this.head;
    this.head = node;
    this.size++;

    return node;
  }

  pop() {
    if (!this.head) return null;

    const remove = this.head;

    this.head = this.head.next;
    remove.next = null;
    this.size--;

    return remove;
  }
}

module.exports = { Node, Stack };
