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
 * @param {number} targetSum
 * @return {boolean}
 */
var hasPathSum = function (root, targetSum) {
  function dfs(root, sum = 0) {
    if (!root) return false;

    sum += root.val;
    if (sum === targetSum && !(root.left || root.right)) return true;

    return dfs(root.left, sum) || dfs(root.right, sum);
  }

  return dfs(root);
};
