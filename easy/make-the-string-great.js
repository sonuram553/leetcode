// Using Stack
// Time Complexity O(n)
// Space Complexity O(n)

function makeGood(s) {
  if (!s) return "";

  const stack = new Stack();

  for (let i = 0; i < s.length; i++) {
    if (stack.size) {
      // Stack is not empty
      const topChar = stack.peek();
      if (topChar.toLowerCase() === s[i].toLowerCase()) {
        if (
          (isLowercase(s[i]) && isUppercase(topChar)) ||
          (isLowercase(topChar) && isUppercase(s[i]))
        )
          stack.pop();
        else stack.push(s[i]);
      } else stack.push(s[i]);
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

function isLowercase(ch) {
  const code = ch.charCodeAt(0);
  return code >= 97 && code <= 122;
}

function isUppercase(ch) {
  const code = ch.charCodeAt(0);
  return code >= 65 && code <= 90;
}
