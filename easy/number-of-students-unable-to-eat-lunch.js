// 1700. Number of Students Unable to Eat Lunch

function countStudents(students, sandwiches) {
  const queue = new MyQueue();

  for (const student of students) queue.enqueue(student);

  let i = 0;
  let count = 0;

  while (i < sandwiches.length) {
    const sandwich = sandwiches[i];
    const student = queue.dequeue();

    if (sandwich !== student) {
      queue.enqueue(student);
      count++;

      // We have checked rest of the students. They are unable to eat.
      if (count === queue.size) break;
    } else {
      i++;
      count = 0;
    }
  }

  return queue.size;
}

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class MyQueue {
  head = null;
  tail = null;
  _size = 0;

  get size() {
    return this._size;
  }

  enqueue(value) {
    const node = new Node(value);

    if (!this.head) this.head = this.tail = node;
    else {
      this.tail.next = node;
      this.tail = node;
    }

    return ++this._size;
  }

  dequeue() {
    if (!this.head) return;

    const node = this.head;

    if (this._size === 1) this.tail = null;
    this.head = node.next;
    this._size--;

    return node.value;
  }
}
