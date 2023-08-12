function countNodes(root) {
  if (!root) return 0;

  const lh = calculateLeftHeight(root);

  if (lh === calculateRightHeight(root)) {
    return (1 << lh) - 1;
  }

  return 1 + countNodes(root.left) + countNodes(root.right);
}

function calculateLeftHeight(root) {
  let lh = 0;
  while (root) {
    lh++;
    root = root.left;
  }
  return lh;
}

function calculateRightHeight(root) {
  let rh = 0;
  while (root) {
    rh++;
    root = root.right;
  }
  return rh;
}
