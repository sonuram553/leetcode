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
 * @return {string}
 */
var tree2str = function (root, str) {
  if (!root) return "";

  let leftStr = "";
  let rightStr = "";

  if (root.left) {
    leftStr = "(" + tree2str(root.left) + ")";
  }

  if (root.right) {
    rightStr = "(" + tree2str(root.right) + ")";
    if (!leftStr) leftStr = "()";
  }

  return root.val + leftStr + rightStr;
};
