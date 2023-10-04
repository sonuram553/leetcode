// https://www.youtube.com/watch?v=wIsJ6G5qXkI

class MyNode {
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
    const node = new MyNode(value);

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
 * @param {string} startGene
 * @param {string} endGene
 * @param {string[]} bank
 * @return {number}
 */
var minMutation = function (startGene, endGene, bank) {
  const bankSet = new Set(bank);
  if (!bankSet.has(endGene)) return -1;

  const visited = new Set();
  function bfs(startGene) {
    const queue = new MyQueue();
    queue.enqueue([startGene, 0]);
    visited.add(startGene);

    while (queue.size) {
      const [gene, level] = queue.dequeue();
      if (gene === endGene) return level;

      for (let i = 0; i < 8; i++) {
        for (const ch of "ACGT") {
          const newGene = gene.slice(0, i) + ch + gene.slice(i + 1);
          if (!visited.has(newGene) && bankSet.has(newGene)) {
            queue.enqueue([newGene, level + 1]);
            visited.add(newGene);
          }
        }
      }
    }

    return -1;
  }

  return bfs(startGene);
};
