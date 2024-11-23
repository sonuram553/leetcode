function MyNode(val, prev) {
  this.val = val;
  this.prev = prev;
  this.minVal = val;
}

var MinStack = function () {
  this.head = null;
};

/**
 * @param {number} val
 * @return {void}
 */
MinStack.prototype.push = function (val) {
  const node = new MyNode(val, this.head);

  if (this.head) {
    node.minVal = Math.min(node.minVal, this.head.minVal);
  }

  this.head = node;
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function () {
  if (!this.head) return null;

  const node = this.head;
  this.head = node.prev;
  node.prev = undefined;
};

/**
 * @return {number}
 */
MinStack.prototype.top = function () {
  return this.head?.val;
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function () {
  return this.head?.minVal;
};

/**
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(val)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */
