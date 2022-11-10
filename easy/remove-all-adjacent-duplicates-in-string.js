function removeDuplicates(s) {
  const stack = new Stack();

  for (const ch of s) {
    if (stack.size) {
      if (ch === stack.peek()) stack.pop();
      else stack.push(ch);
    } else stack.push(ch);
  }

  let newStr = "";
  while (stack.size) newStr = stack.pop() + newStr;

  return newStr;
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
