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
 * @param {character[][]} maze
 * @param {number[]} entrance
 * @return {number}
 */
var nearestExit = function (maze, entrance) {
  const rows = maze.length;
  const cols = maze[0].length;
  const queue = new MyQueue();
  const visited = new Set();

  function isCellEmpty(r, c) {
    return maze[r][c] === ".";
  }

  function isAtBoundary(r, c) {
    return r === 0 || c === 0 || r === rows - 1 || c === cols - 1;
  }

  visited.add(getKey(entrance));
  queue.enqueue([entrance, 1]);

  while (queue.size) {
    const [cell, pathSum] = queue.dequeue();
    const [r, c] = cell;

    let key;
    // Up
    if (r > 0 && !visited.has(getKey([r - 1, c])) && isCellEmpty(r - 1, c)) {
      if (isAtBoundary(r - 1, c)) return pathSum;
      key = getKey([r - 1, c]);
      visited.add(key);
      queue.enqueue([[r - 1, c], pathSum + 1]);
    }

    // Down
    if (
      r < rows - 1 &&
      !visited.has(getKey([r + 1, c])) &&
      isCellEmpty(r + 1, c)
    ) {
      if (isAtBoundary(r + 1, c)) return pathSum;
      key = getKey([r + 1, c]);
      visited.add(key);
      queue.enqueue([[r + 1, c], pathSum + 1]);
    }

    // Left
    if (c > 0 && !visited.has(getKey([r, c - 1])) && isCellEmpty(r, c - 1)) {
      if (isAtBoundary(r, c - 1)) return pathSum;
      key = getKey([r, c - 1]);
      visited.add(key);
      queue.enqueue([[r, c - 1], pathSum + 1]);
    }

    // Right
    if (
      c < cols - 1 &&
      !visited.has(getKey([r, c + 1])) &&
      isCellEmpty(r, c + 1)
    ) {
      if (isAtBoundary(r, c + 1)) return pathSum;
      key = getKey([r, c + 1]);
      visited.add(key);
      queue.enqueue([[r, c + 1], pathSum + 1]);
    }
  }

  return -1;
};

function getKey([r, c]) {
  return `${r},${c}`;
}
