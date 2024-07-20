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
 * @return {number[]}
 */
var rightSideView = function (root) {
  if (!root) return [];

  let lastVal;
  const result = [];

  const queue = new Queue(); // Predefined in Leetcode env
  queue.enqueue(root);
  queue.enqueue("E");

  while (true) {
    const node = queue.dequeue();
    if (node === "E") {
      result.push(lastVal);
      if (queue.size()) queue.enqueue("E");
      else break;
    } else {
      lastVal = node.val;
      node.left && queue.enqueue(node.left);
      node.right && queue.enqueue(node.right);
    }
  }

  return result;
};
