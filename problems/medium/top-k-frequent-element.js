class MaxHeap {
  constructor() {
    this.values = [];
  }

  add(obj) {
    this.values.push(obj);

    let current = this.values.length - 1;

    while (current > 0) {
      const parent = Math.floor((current - 1) / 2);

      if (this.values[current].value < this.values[parent].value) break;

      const temp = this.values[current];
      this.values[current] = this.values[parent];
      this.values[parent] = temp;

      current = parent;
    }
  }

  pop() {
    const size = this.values.length;

    if (!size) return null;
    if (size < 3) return this.values.shift();

    const max = this.values[0];
    const end = this.values.pop();
    let parentIndex = 0;

    this.values[0] = end;

    while (parentIndex < size) {
      let swapIndex = null;
      const parent = this.values[parentIndex];
      const leftChildIndex = 2 * parentIndex + 1;
      const rightChildIndex = 2 * parentIndex + 2;

      const leftChild =
        leftChildIndex < size ? this.values[leftChildIndex] : null;
      const rightChild =
        rightChildIndex < size ? this.values[rightChildIndex] : null;

      if (leftChild && leftChild.value > parent.value) {
        swapIndex = leftChildIndex;
      }

      if (rightChild && rightChild.value > parent.value) {
        if (!swapIndex || rightChild.value > leftChild.value)
          swapIndex = rightChildIndex;
      }

      if (!swapIndex) break;

      this.values[parentIndex] = this.values[swapIndex];
      this.values[swapIndex] = parent;
      parentIndex = swapIndex;
    }

    return max;
  }
}

function topKFrequent(nums, k) {
  const map = {};
  const result = [];
  const maxHeap = new MaxHeap();

  for (const num of nums) {
    map[num] = (map[num] && map[num] + 1) || 1;
  }

  for (const key in map) {
    maxHeap.add({ key, value: map[key] });
  }

  for (let i = 0; i < k; i++) {
    result.push(maxHeap.pop());
  }

  const values = [];

  for (const value of result) {
    values.push(+value.key);
  }

  return values;
}

const nums = [1, 1, 1, 2, 2, 3],
  k = 2;

console.log(topKFrequent(nums, k));
