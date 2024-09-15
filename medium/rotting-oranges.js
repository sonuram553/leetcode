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
 * @param {number[][]} grid
 * @return {number}
 */
var orangesRotting = function (grid) {
  const rows = grid.length;
  const cols = grid[0].length;
  const q = new MyQueue();
  const visited = new Set();
  let orangesCount = 0;

  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < cols; c++) {
      if (grid[r][c]) orangesCount++;

      if (grid[r][c] === 2) {
        q.enqueue([r, c]);
        visited.add(getKey(r, c));
      }
    }
  }

  let minutes = 0;
  q.enqueue("E");

  while (true) {
    const node = q.dequeue();

    if (node === "E") {
      minutes++;
      if (q.size) q.enqueue("E");
      else break;
    } else {
      const [r, c] = node;
      if (r > 0 && grid[r - 1][c] === 1 && !visited.has(getKey(r - 1, c))) {
        q.enqueue([r - 1, c]);
        visited.add(getKey(r - 1, c));
      }

      if (
        r < rows - 1 &&
        grid[r + 1][c] === 1 &&
        !visited.has(getKey(r + 1, c))
      ) {
        q.enqueue([r + 1, c]);
        visited.add(getKey(r + 1, c));
      }

      if (c > 0 && grid[r][c - 1] === 1 && !visited.has(getKey(r, c - 1))) {
        q.enqueue([r, c - 1]);
        visited.add(getKey(r, c - 1));
      }

      if (
        c < cols - 1 &&
        grid[r][c + 1] === 1 &&
        !visited.has(getKey(r, c + 1))
      ) {
        q.enqueue([r, c + 1]);
        visited.add(getKey(r, c + 1));
      }
    }
  }

  return visited.size === orangesCount ? minutes - 1 : -1;
};

function getKey(r, c) {
  return `${r},${c}`;
}
