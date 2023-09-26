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
 * @param {character[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
var solve = function (board) {
  const rows = board.length;
  const cols = board[0].length;
  const visited = new Set();

  function isOnBorder(r, c) {
    return r === 0 || r === rows - 1 || c === 0 || c === cols - 1;
  }

  function bfs(r, c) {
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
          board[r][c] === "O" &&
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
      if (
        board[r][c] === "O" &&
        isOnBorder(r, c) &&
        !visited.has(getKey(r, c))
      ) {
        bfs(r, c);
      }
    }
  }

  // Flip the zeros not present in visited set
  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < cols; c++) {
      if (board[r][c] === "O" && !visited.has(getKey(r, c))) {
        board[r][c] = "X";
      }
    }
  }
};

function getKey(r, c) {
  return `${r},${c}`;
}
