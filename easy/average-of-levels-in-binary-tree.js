function averageOfLevels(root) {
  if (!root) return [];

  const result = [];
  const queue = new MyQueue();

  queue.enqueue(root);
  queue.enqueue("E");

  let sum = 0;
  let count = 0;

  while (true) {
    const node = queue.dequeue();

    if (node === "E") {
      result.push(sum / count);

      // Reset count and sum.
      sum = 0;
      count = 0;

      if (!queue.size) break;
      else queue.enqueue("E");
    } else {
      sum += node.val;
      count++;

      if (node.left) queue.enqueue(node.left);
      if (node.right) queue.enqueue(node.right);
    }
  }

  return result;
}

class Node {
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
    const node = new Node(value);

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
