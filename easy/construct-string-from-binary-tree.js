function tree2str(root) {
  let str = "";

  function traverse(root) {
    if (!root) return;

    str += root.val;

    if (root.left) {
      str += "(";
      traverse(root.left);
      str += ")";
    }

    if (root.right) {
      if (!root.left) str += "()";
      str += "(";
      traverse(root.right);
      str += ")";
    }
  }

  traverse(root);
  return str;
}
