class Node {
  constructor(data) {
    this.data = data;
    this.prev = null;
  }
}

class Stack {
  top = null;

  push(data) {
    const node = new Node(data);
    if (!this.top) this.top = node;
    else {
      node.prev = this.top;
      this.top = node;
    }
  }

  pop() {
    if (!this.top) return;
    const node = this.top;
    this.top = node.prev;
    node.prev = undefined;
  }

  peek() {
    return this.top;
  }
}

// Poster Order Traversal - Iterative
function postorderTraversal(root) {
  let pre = null;
  const result = [];
  const stack = new Stack();

  while (root || stack.top) {
    if (root) {
      stack.push(root);
      root = root.left;
    } else {
      root = stack.peek().data;
      if (root.right !== null || root.right === pre) {
        result.push(root.val);
        stack.pop();
        pre = root;
        root = null;
      } else root = root.right;
    }
  }

  return result;
}
