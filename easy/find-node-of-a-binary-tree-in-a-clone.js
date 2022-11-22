function getTargetCopy(original, cloned, target) {
  const stack = new Stack();
  stack.push(cloned);

  while (stack.size) {
    const node = stack.pop();

    if (node.val === target.val) return node;

    node.right && stack.push(node.right);
    node.left && stack.push(node.left);
  }
}

class Node {
  constructor(value) {
    this.value = value;
    this.prev = null;
  }
}

class Stack {
  top = null;
  _size = 0;

  get size() {
    return this._size;
  }

  push(value) {
    const node = new Node(value);

    if (!this.top) this.top = node;
    else {
      node.prev = this.top;
      this.top = node;
    }

    return ++this._size;
  }

  pop() {
    if (!this.top) return;

    const node = this.top;
    this.top = node.prev;
    this._size--;

    return node.value;
  }

  peek() {
    return this.top?.value;
  }
}
