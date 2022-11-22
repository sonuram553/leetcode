function sumRootToLeaf(root) {
  let sum = 0;

  function traverse(node, binary = "") {
    if (!node) return;

    const { val, left, right } = node;

    if (!left && !right) {
      binary += val;
      sum += binaryToInt(binary);
      return;
    }

    if (left) traverse(left, binary + val);
    if (right) traverse(right, binary + val);
  }

  traverse(root);
  return sum;
}

function binaryToInt(str) {
  let int = 0;

  for (let i = 0; i < str.length; i++) int = 2 * int + Number(str[i]);

  return int;
}
