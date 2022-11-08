// Using Stack
// Time Complexity O(n)
// Space Complexity O(n)

function makeGood(s) {
  if (!s) return "";

  const stack = new Stack();

  for (let i = 0; i < s.length; i++) {
    if (stack.size) {
      const topChar = stack.peek();
      if (Math.abs(topChar.charCodeAt(0) - s[i].charCodeAt(0)) === 32)
        stack.pop();
      else stack.push(s[i]);
    } else stack.push(s[i]);
  }

  if (stack.size) {
    let str = "";
    while (stack.size) str = stack.pop() + str;
    return str;
  }

  return "";
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
