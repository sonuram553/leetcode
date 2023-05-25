function TimeLimitedCache() {
  this.cache = {};
}

/**
 * @param {number} key
 * @param {number} value
 * @param {number} time until expiration in ms
 * @return {boolean} if un-expired key already existed
 */
TimeLimitedCache.prototype.set = function (key, value, duration) {
  const hasUnexpiredValue =
    key in this.cache && Date.now() < this.cache[key].expiration;

  this.cache[key] = { value, expiration: Date.now() + duration };
  return hasUnexpiredValue;
};

/**
 * @param {number} key
 * @return {number} value associated with key
 */
TimeLimitedCache.prototype.get = function (key) {
  if (this.cache[key] === undefined) return -1;
  if (Date.now() > this.cache[key].expiration) return -1;
  return this.cache[key].value;
};

/**
 * @return {number} count of non-expired keys
 */
TimeLimitedCache.prototype.count = function () {
  let count = 0;

  for (const entry of Object.values(this.cache)) {
    if (Date.now() < entry.expiration) count++;
  }

  return count;
};

/**
 * Your TimeLimitedCache object will be instantiated and called as such:
 * var obj = new TimeLimitedCache()
 * obj.set(1, 42, 1000); // false
 * obj.get(1) // 42
 * obj.count() // 1
 */
