var MyHashSet = function () {
  this.primeNum = 311;
  this.table = new Array(this.primeNum).fill(null);
};

/**
 * @param {number} key
 * @return {void}
 */
MyHashSet.prototype.add = function (key) {
  const index = this.hash(key);

  if (this.table[index] === null) this.table[index] = [key];
  else if (!this.table[index].includes(key)) this.table[index].push(key);
};

/**
 * @param {number} key
 * @return {void}
 */
MyHashSet.prototype.remove = function (key) {
  const index = this.hash(key);

  if (this.table[index] === null) return;
  this.table[index] = this.table[index].filter((k) => k !== key);

  if (this.table[index].length === 0) this.table[index] = null;
};

/**
 * @param {number} key
 * @return {boolean}
 */
MyHashSet.prototype.contains = function (key) {
  const index = this.hash(key);
  if (this.table[index] === null) return false;
  return this.table[index].includes(key);
};

MyHashSet.prototype.hash = function (key) {
  return key % this.primeNum;
};
/**
 * Your MyHashSet object will be instantiated and called as such:
 * var obj = new MyHashSet()
 * obj.add(key)
 * obj.remove(key)
 * var param_3 = obj.contains(key)
 */
