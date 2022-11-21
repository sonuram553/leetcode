function leafSimilar(root1, root2) {
  const leafs1 = [];
  let isSimilar = true;

  preOrder(
    root1,
    ({ val, left, right }) => !left && !right && leafs1.push(val)
  );

  let i = 0;

  preOrder(root2, ({ val, left, right }) => {
    if (isSimilar && !left && !right) {
      if (val !== leafs1[i]) isSimilar = false;
      i++;
    }
  });

  return isSimilar && i === leafs1.length;
}

function preOrder(root, callback) {
  const stack = new Stack();

  root && stack.push(root);

  while (stack.size) {
    const node = stack.pop();

    callback(node);
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
