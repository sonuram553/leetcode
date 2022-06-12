class Node {
  constructor(val) {
    this.val = val;
    this.prev = null;
  }
}

class Stack {
  top = null;
  size = 0;

  push(x) {
    const node = new Node(x);
    if (this.top === null) this.top = node;
    else {
      node.prev = this.top;
      this.top = node;
    }

    this.size++;
  }

  pop() {
    if (this.top === null) return null;

    const node = this.top;
    this.top = this.top.prev;
    node.prev = undefined;

    this.size--;

    return node.val;
  }

  peek() {
    if (this.top === null) return null;
    return this.top.val;
  }

  empty() {
    return this.size === 0;
  }
}

const MyQueue = function () {
  this.main = new Stack();
  this.aux = new Stack();
};

/**
 * @param {number} x
 * @return {void}
 */
MyQueue.prototype.push = function (x) {
  if (this.empty()) this.main.push(x);
  else if (this.aux.empty()) this.main.push(x);
  else {
    while (!this.aux.empty()) {
      this.main.push(this.aux.pop());
    }
    this.main.push(x);
  }
};

/**
 * @return {number}
 */
MyQueue.prototype.pop = function () {
  if (this.empty()) return null;
  if (this.main.empty()) return this.aux.pop();
  else {
    while (!this.main.empty()) {
      this.aux.push(this.main.pop());
    }
    return this.aux.pop();
  }
};

/**
 * @return {number}
 */
MyQueue.prototype.peek = function () {
  if (this.empty()) return null;
  if (!this.aux.empty()) return this.aux.peek();

  while (!this.main.empty()) {
    this.aux.push(this.main.pop());
  }

  return this.aux.peek();
};

/**
 * @return {boolean}
 */
MyQueue.prototype.empty = function () {
  return this.main.empty() && this.aux.empty();
};
