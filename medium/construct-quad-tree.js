function QuadTreeNode(val, isLeaf, topLeft, topRight, bottomLeft, bottomRight) {
  this.val = val;
  this.isLeaf = isLeaf;
  this.topLeft = topLeft || null;
  this.topRight = topRight || null;
  this.bottomLeft = bottomLeft || null;
  this.bottomRight = bottomRight || null;
}

/**
 * @param {number[][]} grid
 * @return {Node}
 */
var construct = function (grid) {
  function dfs([r, c], n) {
    const node = new QuadTreeNode();
    const val = isHavingSameElements(grid, [r, c], n);

    if (val === false) {
      node.topLeft = dfs([r, c], n / 2);
      node.topRight = dfs([r, c + n / 2], n / 2);
      node.bottomLeft = dfs([r + n / 2, c], n / 2);
      node.bottomRight = dfs([r + n / 2, c + n / 2], n / 2);
    } else {
      node.val = val;
      node.isLeaf = 1;
    }

    return node;
  }

  return dfs([0, 0], grid.length);
};

function isHavingSameElements(grid, [r, c], n) {
  const firstElement = grid[r][c];
  for (let i = r; i < r + n; i++) {
    for (let j = c; j < c + n; j++) {
      if (firstElement !== grid[i][j]) return false;
    }
  }
  return firstElement;
}
