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
var longestZigZag = function (root) {
  let max = 0;

  function dfs(root, goLeft, steps) {
    if (!root) return;

    max = Math.max(max, steps);

    if (goLeft) {
      dfs(root.left, false, steps + 1);
      dfs(root.right, true, 1);
    } else {
      dfs(root.left, false, 1);
      dfs(root.right, true, steps + 1);
    }
  }

  dfs(root, true, 0);
  dfs(root, false, 0);
  return max;
};
