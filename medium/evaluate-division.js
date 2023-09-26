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
 * @param {string[][]} equations
 * @param {number[]} values
 * @param {string[][]} queries
 * @return {number[]}
 */
var calcEquation = function (equations, values, queries) {
  const adj = {};

  // Create adjacency matrix
  equations.forEach(([a, b], i) => {
    adj[a] = adj[a] || [];
    adj[b] = adj[b] || [];
    adj[a].push([b, values[i]]);
    adj[b].push([a, 1 / values[i]]);
  });

  const result = [];
  for (const [a, b] of queries) result.push(bfs(a, b, adj));
  return result;
};

function bfs(src, target, adj) {
  if (!(src in adj && target in adj)) return -1.0;

  const visited = new Set();
  const queue = new MyQueue();
  queue.enqueue([src, 1]);
  visited.add(src);

  while (queue.size) {
    const [n, w] = queue.dequeue();
    if (n === target) return w;

    for (const [neighbor, weight] of adj[n]) {
      if (!visited.has(neighbor)) {
        queue.enqueue([neighbor, w * weight]);
        visited.add(neighbor);
      }
    }
  }

  return -1.0;
}
