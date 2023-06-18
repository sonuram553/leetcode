function pickGifts(gifts, k) {
  const maxHeap = new MaxHeap(gifts);

  for (let i = 0; i < k; i++) {
    const max = maxHeap.extractMax();
    maxHeap.insert(Math.floor(Math.sqrt(max)));
  }

  return maxHeap.arr.reduce((sum, num) => sum + num);
}
class MaxHeap {
  constructor(arr = []) {
    this.arr = [];
    this.initialize(arr);
  }

  get size() {
    return this.arr.length;
  }

  initialize(arr) {
    for (const item of arr) this.insert(item);
  }

  getMax() {
    return this.arr[0];
  }

  insert(key) {
    this.arr.push(key);
    bubbleUp(this.arr, this.arr.length - 1, compare);
  }

  extractMax() {
    if (this.size === 0) return;
    if (this.size === 1) return this.arr.pop();

    const max = this.arr[0];
    this.arr[0] = this.arr.pop();

    heapifyIterative(this.arr, 0, compare);
    return max;
  }
}

function compare(child, parent) {
  return child > parent;
}

function swap(arr, leftIndex, rightIndex) {
  const temp = arr[leftIndex];
  arr[leftIndex] = arr[rightIndex];
  arr[rightIndex] = temp;
}

function parent(i) {
  return Math.floor((i - 1) / 2);
}

function leftChild(i) {
  return 2 * i + 1;
}

function rightChild(i) {
  return 2 * i + 2;
}

function bubbleUp(arr, index, compare) {
  while (index !== 0 && compare(arr[index], arr[parent(index)])) {
    swap(arr, parent(index), index);
    index = parent(index);
  }
}

function heapifyIterative(arr, parentIndex, compareFn) {
  const size = arr.length;
  let prior = parentIndex;

  while (true) {
    const leftIndex = leftChild(parentIndex);
    const rightIndex = rightChild(parentIndex);

    if (leftIndex < size && compareFn(arr[leftIndex], arr[prior]))
      prior = leftIndex;

    if (rightIndex < size && compareFn(arr[rightIndex], arr[prior]))
      prior = rightIndex;

    if (prior === parentIndex) break;

    swap(arr, prior, parentIndex);
    parentIndex = prior;
  }
}
