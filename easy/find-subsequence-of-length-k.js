function maxSubsequence(nums, k) {
  const result = [];
  const maxHeap = new MaxHeap();

  for (let i = 0; i < nums.length; i++)
    maxHeap.insertKey({ num: nums[i], index: i });

  for (let i = 0; i < k; i++) result.push(maxHeap.extractMax());

  quickSort(result);
  return result.map(({ num }) => num);
}

// Max Heap Implementation
class MaxHeap {
  constructor(arr = []) {
    this.arr = [];
    this.initialize(arr);
  }

  initialize(arr) {
    for (const num of arr) this.insertKey(num);
  }

  get size() {
    return this.arr.length;
  }

  getMax() {
    return this.arr[0];
  }

  insertKey(key) {
    this.arr.push(key);
    this.bubbleUp(this.arr.length - 1);
  }

  bubbleUp(i) {
    while (i !== 0 && compare(this.arr[i], this.arr[parent(i)])) {
      swap(this.arr, parent(i), i);
      i = parent(i);
    }
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

// Quick Sort Implementation
function quickSort(
  arr,
  start = 0,
  end = arr.length - 1,
  compareFn = compareIndex
) {
  if (start > end) return;

  const pivot = findPivot(arr, start, end, compareFn);
  quickSort(arr, start, pivot - 1, compareFn);
  quickSort(arr, pivot + 1, end, compareFn);
}

function findPivot(arr, start, end, compareFn) {
  let pivotIndex = start;

  for (let i = start; i <= end; i++) {
    if (compareFn(arr[start], arr[i])) {
      pivotIndex++;
      swap(arr, i, pivotIndex);
    }
  }

  swap(arr, start, pivotIndex);
  return pivotIndex;
}

// Utils
function swap(arr, leftIndex, rightIndex) {
  const temp = arr[leftIndex];
  arr[leftIndex] = arr[rightIndex];
  arr[rightIndex] = temp;
}

function compare(left, right) {
  return left.num > right.num;
}

function compareIndex(left, right) {
  return left.index > right.index;
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
