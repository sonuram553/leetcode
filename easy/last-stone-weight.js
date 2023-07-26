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
  function compare(child, parent2) {
    return child > parent2;
  }
  return MaxHeap;
})();

function lastStoneWeight(stones) {
  if (stones.length === 1) return stones[0];

  const maxHeap = new MaxHeap(stones);

  while (maxHeap.size > 1) {
    const max = maxHeap.extractMax();
    const secMax = maxHeap.extractMax();
    if (max !== secMax) maxHeap.insert(max - secMax);
  }

  return maxHeap.size ? maxHeap.extractMax() : 0;
}
