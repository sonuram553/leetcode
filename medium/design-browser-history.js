/**
 * @param {string} homepage
 */
var BrowserHistory = function (homepage) {
  this.stack = [homepage];
  this.size = 1;
  this.visitingIndex = 0;
};

/**
 * @param {string} url
 * @return {void}
 */
BrowserHistory.prototype.visit = function (url) {
  this.visitingIndex++;
  this.size = this.visitingIndex + 1;
  this.stack[this.visitingIndex] = url;
};

/**
 * @param {number} steps
 * @return {string}
 */
BrowserHistory.prototype.back = function (steps) {
  const i = this.visitingIndex - steps;
  this.visitingIndex = i < 0 ? 0 : i;
  return this.stack[this.visitingIndex];
};

/**
 * @param {number} steps
 * @return {string}
 */
BrowserHistory.prototype.forward = function (steps) {
  const i = this.visitingIndex + steps;
  this.visitingIndex = i > this.size - 1 ? this.size - 1 : i;
  return this.stack[this.visitingIndex];
};

/**
 * Your BrowserHistory object will be instantiated and called as such:
 * var obj = new BrowserHistory(homepage)
 * obj.visit(url)
 * var param_2 = obj.back(steps)
 * var param_3 = obj.forward(steps)
 */
