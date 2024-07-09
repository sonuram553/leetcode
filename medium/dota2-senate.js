// https://www.youtube.com/watch?v=zZA5KskfMuQ

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

  peek() {
    return this.head?.value;
  }
}

/**
 * @param {string} senate
 * @return {string}
 */
var predictPartyVictory = function (senate) {
  const n = senate.length;
  const radiantQ = new MyQueue();
  const direQ = new MyQueue();

  for (let i = 0; i < n; i++) {
    if (senate[i] === "R") radiantQ.enqueue(i);
    else direQ.enqueue(i);
  }

  while (radiantQ.size && direQ.size) {
    const radiantIndex = radiantQ.dequeue();
    const direIndex = direQ.dequeue();

    if (radiantIndex < direIndex) {
      radiantQ.enqueue(radiantIndex + n);
    } else {
      direQ.enqueue(direIndex + n);
    }
  }

  return radiantQ.size ? "Radiant" : "Dire";
};
