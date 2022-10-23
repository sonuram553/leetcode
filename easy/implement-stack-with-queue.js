class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class MyQueue {
  head = null;
  tail = null;
  size = 0;

  add(x) {
    const node = new Node(x);

    if (this.size === 0) {
      this.head = this.tail = node;
    } else {
      this.head.next = node;
      this.head = node;
    }

    this.size += 1;
  }

  delete() {
    if (this.size === 0) return null;

    this.size -= 1;

    const deletedNode = this.tail;
    this.tail = this.tail.next;
    deletedNode.next = undefined;

    if (this.size === 0) this.head = null;
    return deletedNode.val;
  }

  peek() {
    return this.head && this.head.val;
  }

  empty() {
    return this.size === 0;
  }
}

function MyStack() {
  this.queue = new MyQueue();
}

/**
 * @param {number} x
 * @return {void}
 */
MyStack.prototype.push = function (x) {
  this.queue.add(x);
};

/**
 * @return {number}
 */
MyStack.prototype.pop = function () {
  for (let i = 0; i < this.queue.size - 1; i++) {
    this.queue.add(this.queue.delete());
  }

  return this.queue.delete();
};

/**
 * @return {number}
 */
MyStack.prototype.top = function () {
  return this.queue.peek();
};

/**
 * @return {boolean}
 */
MyStack.prototype.empty = function () {
  return this.queue.empty();
};

/**
 * Your MyStack object will be instantiated and called as such:
 * var obj = new MyStack()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.empty()
 */
