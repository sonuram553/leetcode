/**
 * // Definition for a Node.
 * function Node(val, neighbors) {
 *    this.val = val === undefined ? 0 : val;
 *    this.neighbors = neighbors === undefined ? [] : neighbors;
 * };
 */

/**
 * @param {Node} node
 * @return {Node}
 */
var cloneGraph = function (node) {
  if (!node) return null;
  const clonedNodes = {};
  const stack = [node];
  clonedNodes[node.val] = new Node(node.val);

  while (stack.length) {
    const node = stack.pop();
    for (const neighbor of node.neighbors) {
      if (!(neighbor.val in clonedNodes)) {
        stack.push(neighbor);
        clonedNodes[neighbor.val] = new Node(neighbor.val);
      }
    }
    // Add neighbors of the new node.
    for (const { val } of node.neighbors) {
      clonedNodes[node.val].neighbors.push(clonedNodes[val]);
    }
  }

  return clonedNodes[node.val];
};
