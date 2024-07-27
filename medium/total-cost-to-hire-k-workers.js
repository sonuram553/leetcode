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
    if (child.cost === parent2.cost) {
      return child.index < parent2.index;
    }
    return child.cost < parent2.cost;
  }
  return MinHeap;
})();

/**
 * @param {number[]} costs
 * @param {number} k
 * @param {number} candidates
 * @return {number}
 */
var totalCost = function (costs, k, candidates) {
  let sum = 0;
  const minHeap = new MinHeap();

  let left = 0;
  let right = costs.length - 1;

  while (left < candidates) {
    minHeap.insert({ index: left, cost: costs[left], isLeft: true });
    left++;
  }
  left--;

  for (let i = 0; i < candidates; i++) {
    if (left >= right) break;
    minHeap.insert({ index: right, cost: costs[right], isLeft: false });
    right--;
  }
  right++;

  for (let i = 0; i < k; i++) {
    const { cost, isLeft } = minHeap.extractMin();
    sum += cost;

    if (left < right - 1) {
      if (isLeft) {
        left++;
        minHeap.insert({ index: left, cost: costs[left], isLeft: true });
      } else {
        right--;
        minHeap.insert({ index: right, cost: costs[right], isLeft: false });
      }
    }
  }

  return sum;
};
