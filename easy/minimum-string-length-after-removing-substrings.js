function minLength(s) {
  const stack = new Stack();
  stack.push(s[0]);

  let i = 1;

  while (i < s.length) {
    if (
      (s[i] === "B" && stack.peek() === "A") ||
      (s[i] === "D" && stack.peek() === "C")
    ) {
      stack.pop();
    } else stack.push(s[i]);

    i++;
  }

  return stack.size;
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
