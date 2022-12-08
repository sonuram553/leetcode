// Maximum Nesting Depth of the Parentheses

function maxDepth(s) {
  let count = 0;
  let maxCount = 0;

  for (const ch of s) {
    if (ch === "(") count++;
    else if (ch === ")") maxCount = Math.max(maxCount, count--);
  }

  return maxCount;
}
