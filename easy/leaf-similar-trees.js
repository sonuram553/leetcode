/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root1
 * @param {TreeNode} root2
 * @return {boolean}
 */
var leafSimilar = function (root1, root2) {
  const leafs1 = [];
  let i = 0;
  let foundNonSimilar = false;

  dfs(root1, (val) => leafs1.push(val));
  dfs(root2, (val) => {
    if (foundNonSimilar) return;

    if (val !== leafs1[i]) {
      foundNonSimilar = true;
    }

    i++;
  });

  return !foundNonSimilar && i === leafs1.length;
};

function dfs(root, cb) {
  if (!root) return;

  dfs(root.left, cb);

  if (!(root.left || root.right)) {
    cb(root.val);
  }

  dfs(root.right, cb);
}
