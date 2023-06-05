// Recursion
function* inorderTraversal(arr) {
  for (const num of arr) {
    if (Array.isArray(num)) yield* inorderTraversal(num);
    else yield num;
  }
}

// Iteration
function* inorderTraversal(arr) {
  const stack = [arr];

  while (stack.length) {
    const item = stack.pop();

    if (Array.isArray(item)) {
      const size = item.length;
      for (let i = size - 1; i >= 0; i--) stack.push(item[i]);
    } else yield item;
  }
}
