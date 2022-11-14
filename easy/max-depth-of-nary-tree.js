function maxDepth(root) {
  if (!root) return 0;
  if (!root.children.length) return 1;

  const result = [];

  for (const node of root.children) result.push(maxDepth(node));

  return Math.max(...result) + 1;
}
