var RandomizedSet = function () {
  this.map = {};
  this.arr = [];
  this.size = 0;
};

/**
 * @param {number} val
 * @return {boolean}
 */
RandomizedSet.prototype.insert = function (val) {
  if (val in this.map) return false;
  this.arr[this.size] = val;
  this.map[val] = this.size++;
  return true;
};

/**
 * @param {number} val
 * @return {boolean}
 */
RandomizedSet.prototype.remove = function (val) {
  if (val in this.map) {
    const index = this.map[val];
    const lastValue = this.arr[this.size - 1];
    this.arr[index] = lastValue;
    this.map[lastValue] = index;
    delete this.map[val];
    this.size--;
    return true;
  }
  return false;
};

/**
 * @return {number}
 */
RandomizedSet.prototype.getRandom = function () {
  return this.arr[Math.floor(Math.random() * this.size)];
};

/**
 * Your RandomizedSet object will be instantiated and called as such:
 * var obj = new RandomizedSet()
 * var param_1 = obj.insert(val)
 * var param_2 = obj.remove(val)
 * var param_3 = obj.getRandom()
 */
