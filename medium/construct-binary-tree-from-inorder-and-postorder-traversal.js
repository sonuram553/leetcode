function buildTree(inorder, postorder) {
  if (inorder.length === 0 || postorder.length === 0) return null;

  const rootVal = postorder[postorder.length - 1];
  const root = new TreeNode(rootVal);
  const mid = inorder.findIndex((num) => num === rootVal);
  root.left = buildTree(inorder.slice(0, mid), postorder.slice(0, mid));
  root.right = buildTree(inorder.slice(mid + 1), postorder.slice(mid, -1));
  return root;
}
