const MaxHeap = (() => {
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

  // heap/max-heap/max-heap.js
  var MaxHeap = class {
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
      iterative_default(this.arr, 0, compare);
      return max;
    }
  };
  function compare(child, parent) {
    return child > parent;
  }
  return MaxHeap;
})();

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

  // heap/max-heap/max-heap.js
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
    insert(key) {
      this.arr.push(key);
      bubbleUp(this.arr, this.arr.length - 1, compare);
    }
    extractMin() {
      if (this.size === 0) return;
      if (this.size === 1) return this.arr.pop();
      const max = this.arr[0];
      this.arr[0] = this.arr.pop();
      iterative_default(this.arr, 0, compare);
      return max;
    }
  };
  function compare(child, parent) {
    return child < parent;
  }
  return MinHeap;
})();

var MedianFinder = function () {
  this.minHeap = new MinHeap(); // To store large numbers
  this.maxHeap = new MaxHeap(); // To store small numbers
};

/**
 * @param {number} num
 * @return {void}
 */
MedianFinder.prototype.addNum = function (num) {
  this.maxHeap.insert(num); // Always insert to maxHeap than normalize

  if (
    this.minHeap.size &&
    this.maxHeap.size &&
    this.maxHeap.getMax() > this.minHeap.getMin()
  ) {
    this.minHeap.insert(this.maxHeap.extractMax());
  }

  if (this.maxHeap.size - this.minHeap.size > 1) {
    this.minHeap.insert(this.maxHeap.extractMax());
  }

  if (this.minHeap.size - this.maxHeap.size > 1) {
    this.maxHeap.insert(this.minHeap.extractMin());
  }
};

/**
 * @return {number}
 */
MedianFinder.prototype.findMedian = function () {
  const minHeapSize = this.minHeap.size;
  const maxHeapSize = this.maxHeap.size;

  if (minHeapSize === maxHeapSize) {
    return (this.minHeap.getMin() + this.maxHeap.getMax()) / 2;
  } else if (minHeapSize > maxHeapSize) {
    return this.minHeap.getMin();
  }

  return this.maxHeap.getMax();
};
