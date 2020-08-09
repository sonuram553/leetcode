// --- Directions
// Implement classes Node and Linked Lists
// See 'directions' document

class Node {
  constructor(data, next = null) {
    this.data = data;
    this.next = next;
  }
}

class LinkedList {
  head = null;
  count = 0;

  *[Symbol.iterator]() {
    let node = this.head;
    while (node) {
      yield node;
      node = node.next;
    }
  }

  insertFirst(data) {
    this.count++;
    this.head = new Node(data, this.head);
  }

  size() {
    return this.count;
  }

  getFirst() {
    return this.head;
  }

  getLast() {
    if (!this.head) return null;

    let node = this.head;
    while (node.next) {
      node = node.next;
    }

    return node;
  }

  clear() {
    this.head = null;
    this.count = 0;
  }

  removeFirst() {
    if (!this.head) return;
    this.head = this.head.next;
    this.count--;
  }

  removeLast() {
    if (!this.head) return;

    if (!this.head.next) {
      this.head = null;
      return;
    }

    let prevNode = null,
      node = this.head;

    while (node.next) {
      prevNode = node;
      node = node.next;
    }

    this.count--;
    prevNode.next = null;
  }

  insertLast(data) {
    this.count++;
    const lastNode = this.getLast();
    const newNode = new Node(data);
    lastNode ? (lastNode.next = newNode) : (this.head = newNode);
  }

  getAt(at = 0) {
    if (at >= this.count) return null;

    let node = this.head;
    for (let i = 0; i < at; i++) {
      node = node.next;
    }

    return node;
  }

  removeAt(at = 0) {
    if (at >= this.count) return null;

    this.count--;
    if (at === 0) return this.removeFirst();

    // One solution
    /* let prevNode = null;
    let node = this.head;
    for (let i = 0; i < at; i++) {
      prevNode = node;
      node = node.next;
    }

    prevNode.next = node.next; */

    // Another solution
    let prevNode = this.getAt(at - 1);
    prevNode.next = prevNode.next.next;
  }

  insertAt(data, at = 0) {
    this.count++;
    if (at >= this.count) return this.insertLast(data);
    if (at === 0) return this.insertFirst(data);

    let prevNode = this.getAt(at - 1);
    const node = new Node(data, prevNode.next);
    prevNode.next = node;
  }

  forEach(fn) {
    let node = this.head;
    let index = 0;
    while (node) {
      fn(node, index++);
      node = node.next;
    }
  }
}

module.exports = { Node, LinkedList };
