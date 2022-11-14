function findTilt(root) {
  let sum = 0;

  function postOrder(node) {
    if (!node) return 0;

    const left = postOrder(node.left);
    const right = postOrder(node.right);

    sum += Math.abs(left - right);
    return left + right + node.val;
  }

  postOrder(root);
  return sum;
}
