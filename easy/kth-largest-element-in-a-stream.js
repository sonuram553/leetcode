const MinHeap = (() => {
  // utils/swap.js
  function swap(arr, leftIndex, rightIndex) {
    const temp = arr[leftIndex];
    arr[leftIndex] = arr[rightIndex];
    arr[rightIndex] = temp;
  }
  var swap_default = swap;

  // heap/utils.js
  function parent(i) {
    return Math.floor((i - 1) / 2);
  }
  function leftChild(i) {
    return 2 * i + 1;
  }
  function rightChild(i) {
    return 2 * i + 2;
  }
  function bubbleUp(arr, index, compare2) {
    while (index !== 0 && compare2(arr[index], arr[parent(index)])) {
      swap_default(arr, parent(index), index);
      index = parent(index);
    }
  }

  // heap/heapify/iterative.js
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
      swap_default(arr, prior, parentIndex);
      parentIndex = prior;
    }
  }
  var iterative_default = heapifyIterative;

  // heap/min-heap/min-heap.js
  var MinHeap = class {
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
      iterative_default(this.arr, 0, compare);
      return min;
    }
  };
  function compare(child, parent2) {
    return child < parent2;
  }
  return MinHeap;
})();

var KthLargest = function (k, nums) {
  this.k = k;
  this.minHeap = new MinHeap(nums);
  while (this.minHeap.size > k) {
    this.minHeap.extractMin();
  }
};

/**
 * @param {number} val
 * @return {number}
 */
KthLargest.prototype.add = function (val) {
  this.minHeap.insert(val);
  if (this.minHeap.size > this.k) this.minHeap.extractMin();
  return this.minHeap.getMin();
};
