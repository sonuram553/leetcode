// Iterative

function mergeTrees(root1, root2) {
  if (root1 && root2) {
    const stack = new Stack();

    stack.push([root1, root2]);

    while (stack.size) {
      const [root1, root2] = stack.pop();

      root1.val = root1.val + root2.val;

      if (root1.right && root2.right) stack.push([root1.right, root2.right]);
      else if (root2.right) root1.right = root2.right;

      if (root1.left && root2.left) stack.push([root1.left, root2.left]);
      else if (root2.left) root1.left = root2.left;
    }

    return root1;
  }

  return root1 || root2;
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
