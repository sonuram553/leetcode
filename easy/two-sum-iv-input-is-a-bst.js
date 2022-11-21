function findTarget(root, k) {
  const map = {};
  let isFound = false;

  preOrder(root, (val) => (map[val] = (map[val] || 0) + 1));

  preOrder(root, (val) => {
    if (val + val === k) {
      if (map[val] > 1) isFound = true;
    } else if (map[k - val]) isFound = true;
  });

  return isFound;
}

function preOrder(root, callback) {
  const stack = new Stack();

  root && stack.push(root);

  while (stack.size) {
    const node = stack.pop();

    callback(node.val);
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
