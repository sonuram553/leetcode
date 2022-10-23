// Invert Binary Tree

function invertTree(root) {
  postOrderTraversal(root);
  return root;
}

function postOrderTraversal(root) {
  if (!root) return;

  postOrderTraversal(root.left);
  postOrderTraversal(root.right);

  const leftChild = root.left;
  const rightChild = root.right;
  root.left = rightChild;
  root.right = leftChild;
}
