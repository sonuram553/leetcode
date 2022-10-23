// Inorder Binary Search Tree

class Node {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

let newRoot;
let current;

function increasingBST(root) {
  newRoot = null;
  current = null;
  inOrderTraversal(root);
  return newRoot;
}

function inOrderTraversal(root) {
  if (!root) return;
  inOrderTraversal(root.left);

  if (!newRoot) {
    newRoot = new Node(root.val);
    current = newRoot;
  } else {
    current.right = new Node(root.val);
    current = current.right;
  }

  inOrderTraversal(root.right);
}

const root = new Node(5);
root.left = new Node(3);
root.right = new Node(10);

console.log(increasingBST(root));
