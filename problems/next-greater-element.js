// Quadratic Complexity - Using nested loops
function nextGreaterElement(arr) {
  const result = [];

  for (let i = 0; i < arr.length; i++) {
    let nextGreater = -1;

    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] > arr[i]) {
        nextGreater = arr[j];
        break;
      }
    }

    result.push(nextGreater);
  }
}

// Linear Complexity - Using Stack
class Node {
  constructor(data) {
    this.data = data;
    this.prev = null;
  }
}

class Stack {
  top = null;
  size = 0;

  push(data) {
    const node = new Node(data);
    node.prev = this.top;
    this.top = node;

    this.size++;
  }

  pop() {
    if (!this.top) return;

    const node = this.top;
    this.top = node.prev;
    node.prev = null;

    this.size--;
    return node.data;
  }

  peek() {
    if (!this.top) return;
    return this.top.data;
  }
}

// Unordered next greater elements
// function nextGreaterElement(arr) {
//   const result = [];
//   const stack = new Stack();

//   stack.push(arr[0]);

//   for (let i = 1; i < arr.length; i++) {
//     const next = arr[i];

//     while (next > stack.peek() && stack.size) {
//       console.log(`${stack.pop()} -> ${next}`);
//     }

//     stack.push(next);
//   }

//   while (stack.size) {
//     console.log(`${stack.pop()} -> -1`);
//   }
// }

// Ordered next greater elements
function nextGreaterElement(arr) {
  const result = Array(arr.length).fill(-1);
  const stack = new Stack();
  stack.push({ value: arr[0], index: 0 });

  for (let i = 1; i < arr.length; i++) {
    const next = arr[i];

    while (stack.size && next > stack.peek().value) {
      result[stack.pop().index] = next;
    }

    stack.push({ value: next, index: i });
  }

  return result;
}
