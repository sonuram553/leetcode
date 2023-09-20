function sumNumbers(root) {
  let sum = 0;

  function dfs(root, numStr = "") {
    if (!root) return;
    
    if (!root.left && !root.right) {
      sum += Number(numStr + root.val);
      return;
    }

    dfs(root.left, numStr + root.val);
    dfs(root.right, numStr + root.val);
  }

  dfs(root);
  return sum;
}
