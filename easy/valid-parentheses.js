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
  const stack = new Stack();
  const map = {
    ")": "(",
    "}": "{",
    "]": "[",
  };

  for (let i = 0; i < str.length; i++) {
    const ch = str[i];

    if (ch in map) {
      // ch is a closing parentheses
      if (!stack.size) return false;
      if (stack.pop() !== map[ch]) return false;
    } else stack.push(ch);
  }

  return stack.size === 0;
};
