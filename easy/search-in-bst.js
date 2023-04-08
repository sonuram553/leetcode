function searchBST(root, val) {
  while (root) {
    if (root.val === val) return root;

    if (val > root.val) root = root.right;
    else root = root.left;
  }

  return null;
}
