// --- Directions
// Implement a Queue datastructure using two stacks.
// *Do not* create an array inside of the 'Queue' class.
// Queue should implement the methods 'add', 'remove', and 'peek'.
// For a reminder on what each method does, look back
// at the Queue exercise.
// --- Examples
//     const q = new Queue();
//     q.add(1);
//     q.add(2);
//     q.peek();  // returns 1
//     q.remove(); // returns 1
//     q.remove(); // returns 2

const Stack = require("./stack");

class Queue {
  leftStack = new Stack();
  rightStack = new Stack();

  add(item) {
    this.leftStack.push(item);
  }

  peek() {
    this.moveToRightStack();
    const peekedItem = this.rightStack.peek();
    this.moveToLeftStack();

    return peekedItem;
  }

  remove() {
    this.moveToRightStack();
    const poppedItem = this.rightStack.pop();
    this.moveToLeftStack();
    return poppedItem;
  }

  moveToRightStack() {
    while (this.leftStack.peek() !== undefined) {
      this.rightStack.push(this.leftStack.pop());
    }
  }

  moveToLeftStack() {
    while (this.rightStack.peek() !== undefined) {
      this.leftStack.push(this.rightStack.pop());
    }
  }
}

module.exports = Queue;
