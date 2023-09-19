function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val;
  this.left = left === undefined ? null : left;
  this.right = right === undefined ? null : right;
}

export function buildTree(preOrder, inOrder) {
  if (preOrder.length === 0 || inOrder.length === 0) return null;

  const root = new TreeNode(preOrder[0]);
  const mid = inOrder.findIndex((num) => num === preOrder[0]);
  root.left = buildTree(preOrder.slice(1, mid + 1), inOrder.slice(0, mid));
  root.right = buildTree(preOrder.slice(mid + 1), inOrder.slice(mid + 1));
  return root;
}
