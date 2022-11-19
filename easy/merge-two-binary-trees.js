function mergeTrees(root1, root2) {
  if (root1 && root2) return merge(root1, root2);
  return root1 || root2;
}

function merge(root1, root2) {
  root1.val = root1.val + root2.val;

  if (root1.left && root2.left) mergeTrees(root1.left, root2.left);
  else if (root2.left) root1.left = root2.left;

  if (root1.right && root2.right) mergeTrees(root1.right, root2.right);
  else if (root2.right) root1.right = root2.right;

  return root1;
}
