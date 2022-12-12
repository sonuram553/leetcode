// The K Weakest Rows in a Matrix

function kWeakestRows(mat, k) {
  const minHeap = new MinHeap();

  for (let i = 0; i < mat.length; i++) {
    let soldiersCount = 0;
    const index = binarySearch(mat[i]);

    if (index !== -1) soldiersCount = index + 1;
    minHeap.insert({ soldiersCount, i });
  }

  const result = [];
  for (let i = 0; i < k; i++) result.push(minHeap.extractMin().i);
  return result;
}

function binarySearch(arr) {
  let start = 0;
  let end = arr.length - 1;
  let index = -1;

  while (start <= end) {
    const mid = (start + end) >>> 1;

    if (arr[mid]) {
      index = mid;
      start = mid + 1;
    } else end = mid - 1;
  }

  return index;
}

class MinHeap {
  constructor(arr = []) {
    this.arr = [];
    this.initialize(arr);
  }

  initialize(arr) {
    for (const item of arr) this.insert(item);
  }

  get size() {
    return this.arr.length;
  }

  getMin() {
    return this.arr[0];
  }

  insert(item) {
    this.arr.push(item);
    bubbleUp(this.arr, this.size - 1, compare);
  }

  extractMin() {
    if (this.size === 0) return;
    if (this.size === 1) return this.arr.pop();

    const min = this.arr[0];
    this.arr[0] = this.arr.pop();

    heapifyIterative(this.arr, 0, compare);
    return min;
  }
}

function heapifyIterative(arr, parentIndex, compareFn) {
  const size = arr.length;
  let prior = parentIndex;

  while (true) {
    const leftIndex = leftChild(parentIndex);
    const rightIndex = rightChild(parentIndex);

    if (leftIndex < size && compareFn(arr[leftIndex], arr[parentIndex]))
      prior = leftIndex;

    if (rightIndex < size && compareFn(arr[rightIndex], arr[prior]))
      prior = rightIndex;

    if (prior === parentIndex) break;

    swap(arr, prior, parentIndex);
    parentIndex = prior;
  }
}

function bubbleUp(arr, index, compare) {
  while (index !== 0 && compare(arr[index], arr[parent(index)])) {
    swap(arr, parent(index), index);
    index = parent(index);
  }
}

function parent(i) {
  return Math.floor(i - 1 / 2);
}

function leftChild(i) {
  return 2 * i + 1;
}

function rightChild(i) {
  return 2 * i + 2;
}

function compare(child, parent) {
  if (child.soldiersCount < parent.soldiersCount) return true;
  if (child.soldiersCount === parent.soldiersCount && child.i < parent.i)
    return true;
  return false;
}

function swap(arr, leftIndex, rightIndex) {
  const temp = arr[leftIndex];
  arr[leftIndex] = arr[rightIndex];
  arr[rightIndex] = temp;
}
