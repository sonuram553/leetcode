// https://www.youtube.com/watch?v=slYh0ZNEqSw

var StockSpanner = function () {
  this.stack = []; // stores [price, span]
};

/**
 * @param {number} price
 * @return {number}
 */
StockSpanner.prototype.next = function (price) {
  let span = 1;
  const stack = this.stack;

  while (stack.length && price >= stack[stack.length - 1][0]) {
    const [_, stackSpan] = stack.pop();
    span += stackSpan;
  }

  stack.push([price, span]);
  return span;
};

/**
 * Your StockSpanner object will be instantiated and called as such:
 * var obj = new StockSpanner()
 * var param_1 = obj.next(price)
 */
