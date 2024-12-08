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
 * @param {TreeNode} subRoot
 * @return {boolean}
 */
var isSubtree = function (root, subRoot) {
  let isFoundSubtree = false;

  function dfs(root) {
    if (!root || isFoundSubtree) return;

    if (compareTrees(root, subRoot)) isFoundSubtree = true;
    dfs(root.left);
    dfs(root.right);
  }

  function compareTrees(root, subRoot) {
    if (!root && !subRoot) return true; // If both are null return true;

    if (!root || !subRoot) return false; // If any one is null return false
    if (root.val !== subRoot.val) return false;

    return (
      compareTrees(root.left, subRoot.left) &&
      compareTrees(root.right, subRoot.right)
    );
  }

  dfs(root);
  return isFoundSubtree;
};
