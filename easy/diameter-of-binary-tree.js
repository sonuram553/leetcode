function diameterOfBinaryTree(root) {
  let max = 0;

  function postOrder(node) {
    if (!node) return 0;

    let left = 0;
    let right = 0;

    if (node.left) left = postOrder(node.left) + 1;
    if (node.right) right = postOrder(node.right) + 1;

    max = Math.max(max, left + right);
    return Math.max(left, right) + 1;
  }

  postOrder(root);
  return max;
}
