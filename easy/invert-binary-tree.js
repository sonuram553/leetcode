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
 * @return {TreeNode}
 */
var invertTree = function (root) {
  function dfs(root) {
    if (!root) return root;

    const left = dfs(root.left);
    const right = dfs(root.right);

    root.left = right;
    root.right = left;
    return root;
  }

  dfs(root);
  return root;
};
