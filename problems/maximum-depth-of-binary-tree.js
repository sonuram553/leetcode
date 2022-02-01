const maxDepth = function (root) {
  if (!root) return 0;

  const stack = [root];
  let count = 1;

  while (stack.length) {
    const node = stack.pop();
    if (node.left || node.right) count += 1;
    if (node.left) stack.push(node.left);
    if (node.right) stack.push(node.right);
  }

  return count;
};
