function isUnivalTree(root) {
  const stack = new Stack();

  root && stack.push(root);

  while (stack.size) {
    const { val, left, right } = stack.pop();

    if (right) {
      if (val !== right.val) return false;
      stack.push(right);
    }

    if (left) {
      if (val !== left.val) return false;
      stack.push(left);
    }
  }

  return true;
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
