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

function connect(root) {
  if (!root) return null;

  const queue = new MyQueue();
  queue.enqueue(root);
  queue.enqueue("E");

  while (true) {
    const treeNode = queue.dequeue();
    if (treeNode === "E") {
      if (queue.size === 0) break;
      else queue.enqueue("E");
    } else {
      if (queue.head.value === "E") treeNode.next = null;
      else treeNode.next = queue.head.value;
      if (treeNode.left) queue.enqueue(treeNode.left);
      if (treeNode.right) queue.enqueue(treeNode.right);
    }
  }

  return root;
}
