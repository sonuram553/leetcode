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
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function (grid) {
  const rows = grid.length;
  const cols = grid[0].length;
  const visited = new Set();
  let islands = 0;

  function dfs(r, c) {
    const queue = new MyQueue();
    queue.enqueue([r, c]);
    visited.add(getKey(r, c));

    const directions = [
      [0, 1],
      [1, 0],
      [0, -1],
      [-1, 0],
    ];

    while (queue.size) {
      const [row, col] = queue.dequeue();
      for (const [dr, dc] of directions) {
        r = row + dr;
        c = col + dc;
        if (
          r >= 0 &&
          r < rows &&
          c >= 0 &&
          c < cols &&
          grid[r][c] === "1" &&
          !visited.has(getKey(r, c))
        ) {
          queue.enqueue([r, c]);
          visited.add(getKey(r, c));
        }
      }
    }
  }

  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < cols; c++) {
      if (grid[r][c] === "1" && !visited.has(getKey(r, c))) {
        dfs(r, c);
        islands++;
      }
    }
  }

  return islands;
};

function getKey(r, c) {
  return `${r},${c}`;
}
