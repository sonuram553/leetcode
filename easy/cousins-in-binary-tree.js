const isCousins = (root, x, y) => {
  const left = getDepth(root, x);
  const right = getDepth(root, y);
  return left[0] !== right[0] && left[1] === right[1];
};

function getDepth(root, val, depth = 0, parent = null) {
  if (!root) return;
  if (root.val === val) return [parent, depth];

  const left = getDepth(root.left, val, depth + 1, root);
  if (left) return left;

  return getDepth(root.right, val, depth + 1, root);
}
