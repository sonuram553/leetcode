class Node {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }
}

// const root = null;
const root = new Node(5);
root.left = new Node(4);
// root.left.left = new Node(11);
// root.left.left.left = new Node(7);
// root.left.left.right = new Node(2);
// root.right = new Node(8);
// root.right.left = new Node(13);
// root.left.right = new Node(5);

let foundPath = false;

function hasPathSum(root, targetSum, sum = 0) {
  if (!root) return false;

  if (root.left === null && root.right === null) {
    return sum + root.data === targetSum;
  }

  if (hasPathSum(root.left, targetSum, sum + root.data)) return true;
  if (hasPathSum(root.right, targetSum, sum + root.data)) return true;

  return false;
}

console.log(hasPathSum(root, 8, 0));
