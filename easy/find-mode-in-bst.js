function findMode(root) {
  let freq = 0;
  let maxFreq = 0;
  let prevValue = -Infinity;
  let result;

  function depthFirstInorder(node) {
    if (!node) return;

    depthFirstInorder(node.left);

    if (prevValue === node.val) freq++;
    else freq = 1;

    if (freq > maxFreq) {
      maxFreq = freq;
      result = [node.val];
    } else if (freq === maxFreq) result.push(node.val);

    prevValue = node.val;

    depthFirstInorder(node.right);
  }

  depthFirstInorder(root);
  return result;
}
