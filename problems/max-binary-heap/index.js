class Heap {
  constructor() {
    this.values = [];
  }

  add(val) {
    this.values.push(val);

    let current = this.values.length - 1;
    let parent;

    while (current > 0) {
      parent = Math.floor((current - 1) / 2);

      if (this.values[current] < this.values[parent]) break;

      const temp = this.values[current];
      this.values[current] = this.values[parent];
      this.values[parent] = temp;

      current = parent;
    }
  }

  extractMax() {
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

      if (leftChild && leftChild > parent) {
        swapIndex = leftChildIndex;
      }

      if (rightChild && rightChild > parent) {
        if (!swapIndex || rightChild > leftChild) swapIndex = rightChildIndex;
      }

      if (!swapIndex) break;

      this.values[parentIndex] = this.values[swapIndex];
      this.values[swapIndex] = parent;
      parentIndex = swapIndex;
    }

    return max;
  }
}

const heap = new Heap();

heap.add(100);
heap.add(60);
heap.add(70);
heap.add(50);
heap.add(30);
heap.add(40);

console.log(heap.values);
console.log(heap.extractMax());
console.log(heap.extractMax());
console.log(heap.values);
