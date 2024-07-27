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

function mergeSort(arr1, arr2) {
  if (arr1.length <= 1) {
    return { sortedArr1: arr1, sortedArr2: arr2 };
  }

  const mid = arr1.length >> 2;
  const leftArr1 = arr1.slice(0, mid);
  const rightArr1 = arr1.slice(mid);
  const leftArr2 = arr2.slice(0, mid);
  const rightArr2 = arr2.slice(mid);

  const sortedLeft = mergeSort(leftArr1, leftArr2);
  const sortedRight = mergeSort(rightArr1, rightArr2);

  return merge(
    sortedLeft.sortedArr1,
    sortedLeft.sortedArr2,
    sortedRight.sortedArr1,
    sortedRight.sortedArr2
  );
}

function merge(leftArr1, leftArr2, rightArr1, rightArr2) {
  let sortedArr1 = [];
  let sortedArr2 = [];
  let i = 0;
  let j = 0;

  while (i < leftArr1.length && j < rightArr1.length) {
    if (leftArr1[i] > rightArr1[j]) {
      sortedArr1.push(leftArr1[i]);
      sortedArr2.push(leftArr2[i]);
      i++;
    } else {
      sortedArr1.push(rightArr1[j]);
      sortedArr2.push(rightArr2[j]);
      j++;
    }
  }

  while (i < leftArr1.length) {
    sortedArr1.push(leftArr1[i]);
    sortedArr2.push(leftArr2[i]);
    i++;
  }

  while (j < rightArr1.length) {
    sortedArr1.push(rightArr1[j]);
    sortedArr2.push(rightArr2[j]);
    j++;
  }

  return { sortedArr1: sortedArr1, sortedArr2: sortedArr2 };
}

/**
 * @param {number[]} _nums1
 * @param {number[]} _nums2
 * @param {number} k
 * @return {number}
 */
var maxScore = function (_nums1, _nums2, k) {
  const minHeap = new MinHeap();
  let result = 0;
  let sum = 0;

  const { sortedArr1: nums2, sortedArr2: nums1 } = mergeSort(_nums2, _nums1);

  for (let i = 0; i < nums2.length; i++) {
    if (minHeap.size < k) {
      sum += nums1[i];
      minHeap.insert(nums1[i]);
    }

    if (minHeap.size === k) {
      result = Math.max(result, sum * nums2[i]);
      const num = minHeap.extractMin();
      sum -= num;
    }
  }

  return result;
};
