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
      this.head = node;
      this.tail = node;
    } else {
      this.head.next = node;
      this.head = node;
    }

    this.size += 1;
  }

  delete() {
    if (this.size === 0) return null;

    this.size -= 1;

    const deleteNode = this.tail;
    this.tail = this.tail.next;
    deleteNode.next = undefined;

    if (this.size === 0) this.head = null;

    return deleteNode.val;
  }

  peek() {
    return this.tail && this.tail.val;
  }

  empty() {
    return this.size === 0;
  }
}

function MyStack() {
  this.mainQ = new MyQueue();
  this.auxQ = new MyQueue();
}

/**
 * @param {number} x
 * @return {void}
 */
MyStack.prototype.push = function (x) {
  this.auxQ.add(x);

  while (this.mainQ.size) {
    this.auxQ.add(this.mainQ.delete());
  }

  const temp = this.mainQ;
  this.mainQ = this.auxQ;
  this.auxQ = temp;
};

/**
 * @return {number}
 */
MyStack.prototype.pop = function () {
  return this.mainQ.delete();
};

/**
 * @return {number}
 */
MyStack.prototype.top = function () {
  return this.mainQ.peek();
};

/**
 * @return {boolean}
 */
MyStack.prototype.empty = function () {
  return this.mainQ.empty();
};

/**
 * Your MyStack object will be instantiated and called as such:
 * var obj = new MyStack()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.empty()
 */
