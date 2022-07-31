function sumOfLeftLeaves(root) {
  let sum = 0;

  function _sumOfLeftLeaves(root) {
    if (!root) return;

    if (root.left) {
      const leftChild = root.left;
      if (!leftChild.left && !leftChild.right) sum += leftChild.val;
    }

    _sumOfLeftLeaves(root.left);
    _sumOfLeftLeaves(root.right);
  }

  _sumOfLeftLeaves(root);
  return sum;
}
