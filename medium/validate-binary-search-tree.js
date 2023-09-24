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
 * @return {boolean}
 */
var isValidBST = function (root, leftBound = -Infinity, rightBound = Infinity) {
  if (root.val > leftBound && root.val < rightBound) {
    let left = true;
    let right = true;
    if (root.left) left = isValidBST(root.left, leftBound, root.val);
    if (root.right) right = isValidBST(root.right, root.val, rightBound);
    return left && right;
  }
  return false;
};
