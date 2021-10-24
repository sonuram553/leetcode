class Node {
  constructor(data) {
    this.data = data;
    this.prev = null;
  }
}

class Stack {
  constructor() {
    this.top = null;
    this.size = 0;
  }

  push(data) {
    const node = new Node(data);
    if (!this.top) this.top = node;
    else {
      node.prev = this.top;
      this.top = node;
    }
    this.size += 1;
  }

  pop() {
    if (!this.top) return null;
    const node = this.top;
    this.top = this.top.prev;
    node.prev = null;
    this.size -= 1;
    return node.data;
  }
}

var isValid = function (str) {
  const map = {
    ")": "(",
    "}": "{",
    "]": "[",
  };
  const stack = new Stack();
  stack.push(str[0]);

  for (let i = 1; i < str.length; i++) {
    // If we encounter a closing bracket
    if (map[str[i]]) {
      if (stack.pop() !== map[str[i]]) return false;
    } else stack.push(str[i]);
  }

  if (stack.size === 0) return true;
  return false;
};
