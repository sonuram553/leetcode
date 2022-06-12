// Lowest Common Ancestor of a Binary Search Tree

function lowestCommonAncestor(root, p, q) {
  if (p.val < root.val && q.val < root.val)
    return lowestCommonAncestor(root.left, p, q);

  if (p.val > root.val && q.val > root.val)
    return lowestCommonAncestor(root.right, p, q);

  return root;
}
