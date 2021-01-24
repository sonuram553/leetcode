class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class Queue {
  constructor() {
    this.start = null;
    this.end = null;
    this.size = 0;
  }

  add(val) {
    const node = new Node(val);

    this.size++;

    if (!this.start) {
      this.start = node;
      this.end = node;
      return node;
    }

    this.end.next = node;
    this.end = node;

    return node;
  }

  remove() {
    if (!this.start) return null;

    this.size--;

    const remove = this.start;

    if (!this.size) {
      this.start = null;
      this.end = null;
      return remove;
    }

    this.start = this.start.next;
    remove.next = null;

    return remove;
  }
}

module.exports = { Node, Queue };
