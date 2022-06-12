function binaryTreePaths(root) {
  const result = [];

  function depthFirstTraversal(root, path) {
    if (!root) return;
  
    if (!root.left && !root.right) {
      path.push(root.val);
      result.push(path.join("->"));
    }

    depthFirstTraversal(root.left, [...path, root.val]);
    depthFirstTraversal(root.right, [...path, root.val]);
  }

  depthFirstTraversal(root, []);
  return result;
}
