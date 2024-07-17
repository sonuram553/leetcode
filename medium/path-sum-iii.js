// https://www.youtube.com/watch?v=ofMqFAFVcKY

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */

/**
 * Time Complexity O(n^2);
 * Space Complexity O(1);
 * @param {TreeNode} root
 * @param {number} targetSum
 * @return {number}
 */
var pathSum = function (root, targetSum) {
  let count = 0;

  function innerDfs(root, currSum = 0) {
    if (!root) return;

    if (root.val + currSum === targetSum) {
      count++;
    }

    innerDfs(root.left, root.val + currSum);
    innerDfs(root.right, root.val + currSum);
  }

  function outerDfs(root) {
    if (!root) return;

    innerDfs(root);
    outerDfs(root.left);
    outerDfs(root.right);
  }

  outerDfs(root);
  return count;
};

// Using Prefix Sum
// Time Complexity O(n)
// Space Complexity O(n)
var pathSum = function (root, targetSum) {
  let count = 0;
  const map = {};

  function dfs(root, prefixSum = 0) {
    if (!root) return;

    prefixSum += root.val;

    if (prefixSum === targetSum) {
      count++;
    }

    const diff = prefixSum - targetSum;
    count += map[diff] || 0;
    map[prefixSum] = (map[prefixSum] || 0) + 1;

    dfs(root.left, prefixSum);
    dfs(root.right, prefixSum);
    map[prefixSum]--;
  }

  dfs(root);
  return count;
};
