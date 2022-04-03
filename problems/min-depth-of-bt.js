class Node {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }
}

const root = new Node(1);
root.left = new Node(2);
root.right = new Node(3);
root.left.left = new Node(4);

function minDepth(root) {
  if (!root) return 0;

  if (root.left === null && root.right === null) return 1;
  if (root.left === null) return minDepth(root.right) + 1;
  if (root.right === null) return minDepth(root.left) + 1;

  const minLeft = minDepth(root.left);
  const minRight = minDepth(root.right);

  return Math.min(minLeft, minRight) + 1;
}

console.log(minDepth(root));
