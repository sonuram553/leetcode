/**
 * @param {number} n
 */
var OrderedStream = function (n) {
  this.currentIndex = 1;
  this.list = Array(n + 1);
};

/**
 * @param {number} idKey
 * @param {string} value
 * @return {string[]}
 */
OrderedStream.prototype.insert = function (idKey, value) {
  this.list[idKey] = value;

  if (idKey === this.currentIndex) {
    let i = idKey + 1;

    while (this.list[i]) {
      i++;
    }

    this.currentIndex = i;
    return this.list.slice(idKey, i);
  }

  return [];
};

/**
 * Your OrderedStream object will be instantiated and called as such:
 * var obj = new OrderedStream(n)
 * var param_1 = obj.insert(idKey,value)
 */
