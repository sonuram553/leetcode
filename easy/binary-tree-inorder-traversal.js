/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var inorderTraversal = function (root) {
  const result = [];

  function dfs(root) {
    if (!root) return;

    dfs(root.left);
    result.push(root.val);
    dfs(root.right);
  }

  dfs(root);
  return result;
};

// Recursive Solution
var inorderTraversal = function (root) {
  const stack = [];
  const result = [];
  let curr = root;

  while (curr || stack.length) {
    while (curr) {
      stack.push(curr);
      curr = curr.left;
    }

    const node = stack.pop();
    result.push(node.val);
    curr = node.right;
  }

  return result;
};
