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
 * @param {number} k
 * @return {number}
 */
var kthSmallest = function (root, k) {
  const stack = [];
  let currNode = root;
  let count = 1;

  while (true) {
    if (currNode) {
      stack.push(currNode);
      currNode = currNode.left;
    } else if (stack.length) {
      const node = stack.pop();
      if (count === k) return node.val;
      currNode = node.right;
      count++;
    } else break;
  }
};
