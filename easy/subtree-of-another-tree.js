function isSubtree(root, subRoot) {
  let isFoundSubtree = false;

  function preOrder(node) {
    if (!node) return;

    if (equalTrees(node, subRoot)) isFoundSubtree = true;

    if (!isFoundSubtree) preOrder(node.left);
    if (!isFoundSubtree) preOrder(node.right);
  }

  preOrder(root);
  return isFoundSubtree;
}

function equalTrees(firstTreeNode, secondTreeNode) {
  if (firstTreeNode === null && secondTreeNode === null) return true;
  if (firstTreeNode === null || secondTreeNode === null) return false;

  if (firstTreeNode.val !== secondTreeNode.val) return false;

  return (
    equalTrees(firstTreeNode.left, secondTreeNode.left) &&
    equalTrees(firstTreeNode.right, secondTreeNode.right)
  );
}
