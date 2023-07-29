function floodFill(image, sr, sc, color) {
  const m = image.length;
  const n = image[0].length;
  const set = new Set();
  const stack = new Stack();

  stack.push([sr, sc]);
  set.add(getCellName(sr, sc));

  while (stack.size) {
    const [sr, sc] = stack.pop();
    const pixel = image[sr][sc];
    if (pixel === color) {
      // Do nothing
    } else {
      let cellName;

      // Set current pixel to color
      image[sr][sc] = color;

      // Push 4 adjacent pixels to stack if conditions met
      if (sc < n - 1) {
        if (pixel === image[sr][sc + 1]) {
          cellName = getCellName(sr, sc + 1);
          if (!set.has(cellName)) {
            set.add(cellName);
            stack.push([sr, sc + 1]);
          }
        }
      }

      if (sc > 0) {
        if (pixel === image[sr][sc - 1]) {
          cellName = getCellName(sr, sc - 1);
          if (!set.has(cellName)) {
            set.add(cellName);
            stack.push([sr, sc - 1]);
          }
        }
      }

      if (sr < m - 1) {
        if (pixel === image[sr + 1][sc]) {
          cellName = getCellName(sr + 1, sc);
          if (!set.has(cellName)) {
            set.add(cellName);
            stack.push([sr + 1, sc]);
          }
        }
      }

      if (sr > 0) {
        if (pixel === image[sr - 1][sc]) {
          cellName = getCellName(sr - 1, sc);
          if (!set.has(cellName)) {
            set.add(cellName);
            stack.push([sr - 1, sc]);
          }
        }
      }
    }
  }

  return image;
}

function getCellName(i, j) {
  return `${i}, ${j}`;
}

class Node {
  constructor(value) {
    this.value = value;
    this.prev = null;
  }
}

class Stack {
  top = null;
  _size = 0;

  get size() {
    return this._size;
  }

  push(value) {
    const node = new Node(value);

    if (!this.top) this.top = node;
    else {
      node.prev = this.top;
      this.top = node;
    }

    return ++this._size;
  }

  pop() {
    if (!this.top) return;

    const node = this.top;
    this.top = node.prev;
    this._size--;

    return node.value;
  }

  peek() {
    return this.top?.value;
  }
}
