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
var maxLevelSum = function (root) {
  let sum = 0;
  let currLevel = 1;

  let level = 1;
  let maxSum = -Infinity;

  const q = new Queue();
  q.enqueue(root);
  q.enqueue("E");

  while (true) {
    const node = q.dequeue();
    if (node === "E") {
      if (sum > maxSum) {
        level = currLevel;
        maxSum = sum;
      }

      sum = 0;
      currLevel++;
      if (q.size()) q.enqueue("E");
      else break;
    } else {
      sum += node.val;
      node.left && q.enqueue(node.left);
      node.right && q.enqueue(node.right);
    }
  }

  return level;
};
