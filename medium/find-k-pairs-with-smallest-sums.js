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
    getMax() {
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
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @param {number} k
 * @return {number[][]}
 */
var kSmallestPairs = function (nums1, nums2, k) {
  const result = [];
  const minHeap = new MinHeap();
  const visited = new Set();
  const m = nums1.length;
  const n = nums2.length;

  minHeap.insert([nums1[0] + nums2[0], 0, 0]);
  visited.add(getKey(0, 0));

  while (k > 0 && minHeap.size) {
    const [val, i, j] = minHeap.extractMin();
    result.push([nums1[i], nums2[j]]);

    if (i + 1 < m && !visited.has(getKey(i + 1, j))) {
      minHeap.insert([nums1[i + 1] + nums2[j], i + 1, j]);
      visited.add(getKey(i + 1, j));
    }

    if (j + 1 < n && !visited.has(getKey(i, j + 1))) {
      minHeap.insert([nums1[i] + nums2[j + 1], i, j + 1]);
      visited.add(getKey(i, j + 1));
    }

    k--;
  }

  return result;
};

function getKey(i, j) {
  return `${i},${j}`;
}
