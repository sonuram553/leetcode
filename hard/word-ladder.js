// https://www.youtube.com/watch?v=h9iTnkgv05E

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class MyQueue {
  head = null;
  tail = null;
  _size = 0;

  get size() {
    return this._size;
  }

  enqueue(value) {
    const node = new Node(value);

    if (!this.head) this.head = this.tail = node;
    else {
      this.tail.next = node;
      this.tail = node;
    }

    return ++this._size;
  }

  dequeue() {
    if (!this.head) return;

    const node = this.head;

    if (this._size === 1) this.tail = null;
    this.head = node.next;
    this._size--;

    return node.value;
  }
}

/**
 * @param {string} beginWord
 * @param {string} endWord
 * @param {string[]} wordList
 * @return {number}
 */
var ladderLength = function (beginWord, endWord, wordList) {
  if (!wordList.includes(endWord)) return 0;

  const neighbors = {};
  wordList.push(beginWord);

  for (const word of wordList) {
    for (let i = 0; i < word.length; i++) {
      const pattern = word.slice(0, i) + "*" + word.slice(i + 1);
      neighbors[pattern] = neighbors[pattern] || [];
      neighbors[pattern].push(word);
    }
  }

  let len = 1;
  const visited = new Set();
  const q = new MyQueue();

  visited.add(beginWord);
  q.enqueue([beginWord, 1]);

  while (q.size) {
    const [word, len] = q.dequeue();

    for (let i = 0; i < word.length; i++) {
      const pattern = word.slice(0, i) + "*" + word.slice(i + 1);
      for (const neighbor of neighbors[pattern]) {
        if (!visited.has(neighbor)) {
          if (neighbor === endWord) {
            return len + 1;
          }
          q.enqueue([neighbor, len + 1]);
          visited.add(neighbor);
        }
      }
    }
  }

  return 0;
};
