class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
    this.prev = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.size = 0;
  }

  push(val) {
    const node = new Node(val);

    this.size++;

    if (!this.head) {
      this.head = node;
      this.tail = node;
      return node;
    }

    this.tail.next = node;
    node.prev = this.tail;
    this.tail = node;
    return node;
  }

  pop() {
    if (!this.head) return null;

    this.size--;
    const oldTail = this.tail;

    if (!this.size) {
      this.head = null;
      this.tail = null;
      return oldTail;
    }

    this.tail = this.tail.prev;
    this.tail.next = null;
    oldTail.prev = null;
    return oldTail;
  }

  shift() {
    if (!this.head) return null;

    this.size--;
    const oldHead = this.head;

    if (!this.size) {
      this.head = null;
      this.tail = null;
      return oldHead;
    }

    this.head = this.head.next;
    this.head.prev = null;
    oldHead.next = null;
    return oldHead;
  }

  unshift(val) {
    const node = new Node(val);

    this.size++;

    if (!this.head) {
      this.head = node;
      this.tail = node;
      return node;
    }

    node.next = this.head;
    this.head.prev = node;
    this.head = node;
    return node;
  }

  get(at) {
    if (at < 0 || at >= this.size) return null;

    const mid = Math.floor(this.size / 2);

    if (at < mid) {
      let index = 0;
      let current = this.head;

      while (index !== at) {
        current = current.next;
        index++;
      }

      return current;
    }

    let index = this.size - 1;
    let current = this.tail;

    while (index !== at) {
      current = current.prev;
      index--;
    }

    return current;
  }

  set(at, val) {
    const node = this.get(at);

    if (!node) return null;

    node.val = val;
    return node;
  }

  insert(at, val) {
    if (at === 0) return this.unshift(val);
    if (at === this.size) return this.push(val);

    const prevNode = this.get(at - 1);
    if (!prevNode) return null;

    const node = new Node(val);
    const nextNode = prevNode.next;

    prevNode.next = node;
    nextNode.prev = node;
    node.prev = prevNode;
    node.next = nextNode;

    this.size++;

    return node;
  }

  remove(at) {
    if (at === 0) return this.shift();
    if (at === this.size - 1) return this.pop();

    const remove = this.get(at);
    if (!remove) return null;

    remove.prev.next = remove.next;
    remove.next.prev = remove.prev;
    remove.next = null;
    remove.prev = null;

    this.size--;

    return remove;
  }

  traverse() {
    let current = this.head;

    while (current) {
      console.log(current.val);
      current = current.next;
    }
  }
}

module.exports = { Node, LinkedList };
