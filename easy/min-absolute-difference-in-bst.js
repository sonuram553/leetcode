// Similar to - 783. Minimum Distance Between BST Nodes

// Use in-order traversal coz doing so we will get a sorted list
function getMinimumDifference(root) {
  let min = Infinity;
  let prevValue = null;

  function ínOrder(node) {
    if (!node) return;

    ínOrder(node.left);

    if (prevValue !== null) min = Math.min(min, Math.abs(node.val - prevValue));
    prevValue = node.val;

    ínOrder(node.right);
  }

  ínOrder(root);
  return min;
}
