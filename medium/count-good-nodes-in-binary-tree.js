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
 * @return {number}
 */
var goodNodes = function (root) {
  let count = 0;

  function dfs(root, currMax = -Infinity) {
    if (!root) return;

    if (root.val >= currMax) {
      count++;
      currMax = root.val;
    }

    dfs(root.left, currMax);
    dfs(root.right, currMax);
  }

  dfs(root);
  return count;
};
