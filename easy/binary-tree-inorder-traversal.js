class Node {
  constructor(val) {
    this.val = val;
    this.prev = null;
  }
}

class Stack {
  top = null;

  push(val) {
    const node = new Node(val);
    node.prev = this.top;
    this.top = node;
  }

  pop() {
    if (!this.top) return null;
    const node = this.top;
    this.top = node.prev;
    node.prev = null;
    return node;
  }
}

const inorderTraversal = function (root) {
  const stack = new Stack();
  const result = [];
  let current = root;

  while (stack.top || current) {
    if (current) {
      stack.push(current);
      current = current.left;
    } else {
      const node = stack.pop();
      result.push(node.val.val);
      current = node.val.right;
    }
  }

  return result;
};

// const inorderTraversal = function (root) {
//   if (!root) return [];
//   return [
//     ...inorderTraversal(root.left),
//     root.val,
//     ...inorderTraversal(root.right),
//   ];
// };
