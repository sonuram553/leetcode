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
    return child[0] < parent[0];
  }
  return MinHeap;
})();
/**
 * @param {number} k
 * @param {number} w
 * @param {number[]} profits
 * @param {number[]} capital
 * @return {number}
 */
var findMaximizedCapital = function (k, w, profits, capital) {
  const maxHeap = new MaxHeap();
  const minHeap = new MinHeap();

  capital.forEach((capital, i) => {
    minHeap.insert([capital, profits[i]]);
  });

  let i = 0;
  while (i < k) {
    while (minHeap.size && minHeap.getMin()[0] <= w) {
      // Add profits only to maxHeap because we will've enough capital to start the corresponding project.
      maxHeap.insert(minHeap.extractMin()[1]);
    }

    if (!maxHeap.size) break;

    w += maxHeap.extractMax();
    i++;
  }

  return w;
};
