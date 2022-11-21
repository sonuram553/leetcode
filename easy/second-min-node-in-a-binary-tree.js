function findSecondMinimumValue(root) {
  const min = root.val;
  let secondMin = -1;

  function helper(node) {
    if (node.left) {
      const { val } = node.left;

      if (val > min) {
        if (secondMin === -1) secondMin = val;
        else if (val < secondMin) secondMin = val;
      } else helper(node.left);
    }

    if (node.right) {
      const { val } = node.right;

      if (val > min) {
        if (secondMin === -1) secondMin = val;
        else if (val < secondMin) secondMin = val;
      } else helper(node.right);
    }
  }

  helper(root);
  return secondMin;
}
