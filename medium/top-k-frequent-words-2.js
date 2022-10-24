// Using Max Heap

function topKFrequent(words, k) {
  const wordsMap = countItems(words);
  const heap = new MaxHeap();
  const result = [];

  for (const word in wordsMap) heap.insertKey([word, wordsMap[word]]);

  for (let i = 0; i < k; i++) {
    const [word, count] = heap.removeMax();
    result.push(word);
  }

  return result;
}

class MaxHeap {
  arr = [];

  get size() {
    return this.arr.length;
  }

  getMax() {
    return this.arr[0];
  }

  insertKey(key) {
    let i = this.arr.length;
    this.arr.push(key);

    while (i !== 0 && compare(this.arr[parent(i)], this.arr[i])) {
      swap(this.arr, parent(i), i);
      i = parent(i);
    }
  }

  removeMax() {
    if (this.size === 0) return;
    if (this.size === 1) return this.arr.pop();

    const max = this.arr[0];
    this.arr[0] = this.arr.pop();

    this.heapify(0);
    return max;
  }

  heapify(i) {
    let left = leftChild(i);
    let right = rightChild(i);
    let largest = i;

    if (left < this.size && compare(this.arr[i], this.arr[left]))
      largest = left;
    if (right < this.size && compare(this.arr[largest], this.arr[right]))
      largest = right;

    if (largest !== i) {
      swap(this.arr, largest, i);
      this.heapify(largest);
    }
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

function compare(parent, child) {
  // If word count in child is greater the word count in parent return true
  if (parent[1] < child[1]) return true;
  if (parent[1] > child[1]) return false;

  return compareStrings(parent[0], child[0]);
}

// Returns true if the rightString is less than the leftString.
// Thus, sort the array words in the ascending or dictionary order.
function compareStrings(leftStr, rightStr) {
  let leftIndex = 0;
  let rightIndex = 0;

  while (leftIndex < leftStr.length && rightIndex < rightStr.length) {
    if (rightStr[rightIndex].charCodeAt(0) < leftStr[leftIndex].charCodeAt(0))
      return true;
    else if (
      rightStr[rightIndex].charCodeAt(0) > leftStr[leftIndex].charCodeAt(0)
    )
      return false;

    leftIndex++;
    rightIndex++;
  }

  // If some characters of leftString is left then it will come after rightString
  if (leftIndex < leftStr.length) return true;

  return false;
}

function countItems(arr) {
  const map = {};

  for (const item of arr) {
    if (map[item]) map[item] += 1;
    else map[item] = 1;
  }

  return map;
}

function swap(arr, leftIndex, rightIndex) {
  const temp = arr[leftIndex];
  arr[leftIndex] = arr[rightIndex];
  arr[rightIndex] = temp;
}
