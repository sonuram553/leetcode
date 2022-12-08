function finalPrices(prices) {
  const stack = new Stack();
  const result = [];

  for (let i = 0; i < prices.length; i++) {
    while (stack.size && prices[stack.peek()] >= prices[i]) {
      const index = stack.pop();
      result[index] = prices[index] - prices[i];
    }

    stack.push(i);
  }

  while (stack.size) {
    const index = stack.pop();
    result[index] = prices[index];
  }

  return result;
}

class Node {
  constructor(value) {
    this.value = value;
    this.prev = null;
  }
}

class Stack {
  top = null;
  _size = 0;

  get size() {
    return this._size;
  }

  push(value) {
    const node = new Node(value);

    if (!this.top) this.top = node;
    else {
      node.prev = this.top;
      this.top = node;
    }

    return ++this._size;
  }

  pop() {
    if (!this.top) return;

    const node = this.top;
    this.top = node.prev;
    this._size--;

    return node.value;
  }

  peek() {
    return this.top?.value;
  }
}
