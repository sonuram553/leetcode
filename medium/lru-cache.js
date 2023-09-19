class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
    this.prev = null;
  }
}

class DoublyLinkedList {
  head = null;
  tail = null;
  length = 0;

  // Append a new node to the end of the list
  append(data) {
    const newNode = new Node(data);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      newNode.prev = this.tail;
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.length++;
    return newNode;
  }

  // Prepend a new node to the beginning of the list
  prepend(data) {
    const newNode = new Node(data);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      newNode.next = this.head;
      this.head.prev = newNode;
      this.head = newNode;
    }
    this.length++;
    return newNode;
  }

  // Remove a node from the head of the list
  removeHead() {
    if (!this.head) return null; // The list is empty

    const removedData = this.head.data;
    this.head = this.head.next;

    if (this.head) this.head.prev = null;
    else this.tail = null;

    this.length--;
    return removedData;
  }

  // Remove a node from the tail of the list
  removeTail() {
    if (!this.tail) return null; // The list is empty

    const removedData = this.tail.data;
    this.tail = this.tail.prev;

    if (this.tail) this.tail.next = null;
    else this.head = null;

    this.length--;
    return removedData;
  }

  // Move a node in the beginning
  moveNodeToHead(node) {
    if (node === this.head) return;

    node.prev.next = node.next;
    if (node.next) node.next.prev = node.prev;
    else this.tail = node.prev; // Node is the last node update tail pointer

    node.next = this.head;
    node.prev = null;
    this.head.prev = node;
    this.head = node;
  }
}

/**
 * @param {number} capacity
 */
var LRUCache = function (capacity) {
  this.capacity = capacity;
  this.dll = new DoublyLinkedList();
  this.map = {};
};

/**
 * @param {number} key
 * @return {number}
 */
LRUCache.prototype.get = function (key) {
  if (!(key in this.map)) return -1;

  const node = this.map[key];
  this.dll.moveNodeToHead(node);
  return node.data[1];
};

/**
 * @param {number} key
 * @param {number} value
 * @return {void}
 */
LRUCache.prototype.put = function (key, value) {
  if (key in this.map) {
    const node = this.map[key];
    node.data[1] = value;
    this.dll.moveNodeToHead(node);
  } else {
    if (this.capacity === this.dll.length) {
      const [key] = this.dll.removeTail();
      delete this.map[key];
    }
    this.map[key] = this.dll.prepend([key, value]);
  }
};

/**
 * Your LRUCache object will be instantiated and called as such:
 * var obj = new LRUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */

var lru = new LRUCache(2);
lru.put(2, 1);
lru.put(1, 1);
lru.put(2, 3);
lru.put(4, 1);
console.log(lru.get(1));
console.log(lru.get(2));
