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
 * @return {number[][]}
 */
var pathSum = function (root, targetSum) {
  const result = [];

  function dfs(root, list = [], currSum = 0) {
    if (!root) return;

    const { val } = root;

    if (isLeaf(root) && val + currSum === targetSum) {
      result.push([...list, val]);
    }

    dfs(root.left, [...list, val], currSum + val);
    dfs(root.right, [...list, val], currSum + val);
  }

  dfs(root);
  return result;
};

function isLeaf(node) {
  return !(node.left || node.right);
}
