class Node {
  constructor(data) {
    this.data = data;
    this.prev = null;
  }
}

const MinStack = function () {
  this.head = null;
  this.min = null;
};

/**
 * @param {number} val
 * @return {void}
 */
MinStack.prototype.push = function (val) {
  const node = new Node(val);

  if (!this.head) {
    this.head = node;
    this.min = val;
  } else if (val >= this.min) {
    node.prev = this.head;
    this.head = node;
  } else {
    node.data = 2 * val - this.min;
    node.prev = this.head;
    this.head = node;
    this.min = val;
  }
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function () {
  if (!this.head) return;
  const node = this.head;
  this.head = node.prev;
  node.prev = undefined;

  if (node.data < this.min) {
    this.min = 2 * this.min - node.data;
  }

  if (!this.head) this.min = null;
};

/**
 * @return {number}
 */
MinStack.prototype.top = function () {
  if (this.head) {
    if (this.head.data < this.min) return this.min;
    return this.head.data;
  }
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function () {
  return this.min;
};
