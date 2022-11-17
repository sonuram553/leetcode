// Using Recursion

function postorder(root) {
  const result = [];

  function traverse(node) {
    if (!node) return;
    for (const child of node.children) traverse(child);
    result.push(node.val);
  }

  traverse(root);
  return result;
}
