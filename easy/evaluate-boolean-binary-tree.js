function evaluateTree(root) {
  if (root.val === 0 || root.val === 1) return root.val;

  const left = evaluateTree(root.left);
  const right = evaluateTree(root.right);

  return root.val === 2 ? left || right : left && right;
}
