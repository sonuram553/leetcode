var RecentCounter = function () {
  this.requests = [];
  this.index = 0;
};

/**
 * @param {number} t
 * @return {number}
 */
RecentCounter.prototype.ping = function (t) {
  if (this.requests.length === 0) {
    this.requests.push(t);
    return 1;
  }

  const len = this.requests.length;
  while (this.index < len) {
    if (this.requests[this.index] >= t - 3000) break;
    this.index++;
  }

  this.requests.push(t);
  if (this.index === len) return 1;
  return len - this.index + 1;
};

/**
 * Your RecentCounter object will be instantiated and called as such:
 * var obj = new RecentCounter()
 * var param_1 = obj.ping(t)
 */
