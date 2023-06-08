var MyHashMap = function () {
  this.primeNum = 311;
  this.table = new Array(this.primeNum).fill(null);
};

/**
 * @param {number} key
 * @param {number} value
 * @return {void}
 */
MyHashMap.prototype.put = function (key, value) {
  const index = this.hash(key);

  if (this.table[index] === null) this.table[index] = [[key, value]];
  else {
    for (const item of this.table[index]) {
      if (item[0] === key) {
        item[1] = value;
        return;
      }
    }
    this.table[index].push([key, value]);
  }
};

/**
 * @param {number} key
 * @return {number}
 */
MyHashMap.prototype.get = function (key) {
  const index = this.hash(key);

  if (this.table[index] === null) return -1;

  for (const item of this.table[index]) {
    if (item[0] === key) return item[1];
  }

  return -1;
};

/**
 * @param {number} key
 * @return {void}
 */
MyHashMap.prototype.remove = function (key) {
  const index = this.hash(key);

  if (this.table[index] !== null) {
    this.table[index] = this.table[index].filter((item) => item[0] !== key);
    if (this.table[index].length === 0) this.table[index] = null;
  }
};

MyHashMap.prototype.hash = function (key) {
  return key % this.primeNum;
};

/**
 * Your MyHashMap object will be instantiated and called as such:
 * var obj = new MyHashMap()
 * obj.put(key,value)
 * var param_2 = obj.get(key)
 * obj.remove(key)
 */
