// Array to a binary tree
function insertItemToTree(root, arr, index = 0) {
  if (index < arr.length) {
    root = new Node(arr[index]);
    root.left = insertItemToTree(root.left, arr, 2 * index + 1);
    root.right = insertItemToTree(root.right, arr, 2 * index + 2);
  }

  return root;
}

function traverseBreadthFirst(root) {
  if (!root) return;

  const nodes = [root];

  while (nodes.length) {
    const node = nodes.shift();

    if (node.left) {
      nodes.push(node.left);
    }
    if (node.right) {
      nodes.push(node.right);
    }

    console.log(node.data);
  }
}

class Node {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }
}

function height(root) {
  if (root === null) return 0;

  const left = height(root.left);
  const right = height(root.right);

  return Math.max(left, right) + 1;
}

const nodes = [3, 9, 10, 11];
const root = insertItemToTree(null, nodes);

if (Math.abs(height(root.left) - height(root.right)) < 2) console.log(true);
else console.log(false);
