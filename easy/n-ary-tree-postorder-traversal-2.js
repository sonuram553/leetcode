// Using Iteration

function postorder(root) {
  if (!root) return [];

  const result = [];
  const stack = new Stack();
  stack.push(root);

  while (stack.size) {
    const item = stack.pop();

    if (typeof item === "number")
      result.push(item); // Already visited node, push the value to the result.
    else if (item.children.length) {
      const { val, children } = item;

      stack.push(val);

      for (let i = children.length - 1; i >= 0; i--) stack.push(children[i]);
    } else result.push(item.val); // Item is a leaf node.
  }

  return result;
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
