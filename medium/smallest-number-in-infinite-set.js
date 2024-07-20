var SmallestInfiniteSet = function () {
  this.deleteNumsSet = new Set();
};

/**
 * @return {number}
 */
SmallestInfiniteSet.prototype.popSmallest = function () {
  let i = 1;
  while (true) {
    if (!this.deleteNumsSet.has(i)) {
      this.deleteNumsSet.add(i);
      return i;
    }
    i++;
  }
};

/**
 * @param {number} num
 * @return {void}
 */
SmallestInfiniteSet.prototype.addBack = function (num) {
  this.deleteNumsSet.delete(num);
};

/**
 * Your SmallestInfiniteSet object will be instantiated and called as such:
 * var obj = new SmallestInfiniteSet()
 * var param_1 = obj.popSmallest()
 * obj.addBack(num)
 */
