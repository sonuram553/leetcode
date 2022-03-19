// Binary tree Breadth First traversal
function btBreadthFirstTraversal(root) {
  if (!root) return;

  const nodes = [root];

  while (nodes.length) {
    const node = nodes.shift();

    if (node.left) {
      nodes.push(node.left);
    }
    if (node.right) {
      nodes.push(node.right);
    }

    console.log(node.data);
  }
}

exports.btBreadthFirstTraversal = btBreadthFirstTraversal;
