class HashTable {
  constructor(size = 53) {
    this.keyMap = new Array(size);
  }

  _hash(key) {
    let total = 0;
    const prime = 31;

    for (let i = 0; i < Math.min(key.length, 100); i++) {
      const value = key[i].charCodeAt(0) - 96;
      const size = this.keyMap.length;
      total = (total * prime + value) % size;
    }

    return total;
  }

  set(key, value) {
    const index = this._hash(key);

    if (!this.keyMap[index]) this.keyMap[index] = [];
    this.keyMap[index].push([key, value]);
  }

  get(key) {
    const index = this._hash(key);
    const container = this.keyMap[index];

    if (!container) return;

    for (let item of container) {
      if (item[0] === key) {
        return item;
      }
    }
  }

  keys() {
    const _keys = [];

    for (let container of this.keyMap) {
      if (!container) continue;

      for (let item of container) {
        _keys.push(item[0]);
      }
    }

    return _keys;
  }

  values() {
    const _values = [];

    for (let container of this.keyMap) {
      if (!container) continue;

      for (let item of container) {
        if (!_values.includes(item[1])) _values.push(item[1]);
      }
    }

    return _values;
  }
}

const hashTable = new HashTable();

hashTable.set("pink", 100);
hashTable.set("red", 150);
hashTable.set("cyan", 250);
hashTable.set("blue", 250);

console.log(hashTable.keys());
console.log(hashTable.values());
console.log(hashTable.keyMap);
