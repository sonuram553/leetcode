function flatten(root) {
  if (!root) return null;

  const stack = [];
  let curr = root;
  if (root.right) stack.push(root.right);
  if (root.left) stack.push(root.left);

  while (stack.length) {
    const node = stack.pop();
    curr.right = node;
    curr.left = null;
    curr = node;
    if (node.right) stack.push(node.right);
    if (node.left) stack.push(node.left);
  }

  return root;
}

// Constant Space Complexity
function flatten(root) {
  function dfs(root) {
    if (!root) return null;

    const leftTail = dfs(root.left);
    const rightTail = dfs(root.right);

    if (leftTail) {
      leftTail.right = root.right;
      root.right = root.left;
      root.left = null;
    }

    return rightTail || leftTail || root;
  }

  dfs(root);
}
