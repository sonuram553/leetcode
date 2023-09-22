class MyNode {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class MyQueue {
  head = null;
  tail = null;
  _size = 0;

  get size() {
    return this._size;
  }

  enqueue(value) {
    const node = new MyNode(value);

    if (!this.head) this.head = this.tail = node;
    else {
      this.tail.next = node;
      this.tail = node;
    }

    return ++this._size;
  }

  dequeue() {
    if (!this.head) return;

    const node = this.head;

    if (this._size === 1) this.tail = null;
    this.head = node.next;
    this._size--;

    return node.value;
  }
}

function rightSideView(root) {
  if (!root) return [];

  const result = [];
  const queue = new MyQueue();
  queue.enqueue(root);
  queue.enqueue("E");

  while (true) {
    const node = queue.dequeue();
    if (node === "E") {
      if (queue.size) queue.enqueue("E");
      else break;
    } else {
      if (queue.head.value === "E") result.push(node.val);
      if (node.left) queue.enqueue(node.left);
      if (node.right) queue.enqueue(node.right);
    }
  }

  return result;
}
