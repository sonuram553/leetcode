/**
 * @param {number[]} heights
 * @return {number}
 */
var largestRectangleArea = function (heights) {
  let maxArea = 0;
  const stack = []; // pair: (index, height)

  heights.forEach((h, i) => {
    let start = i;

    while (stack.length && stack[stack.length - 1][1] > h) {
      const [index, height] = stack.pop();
      maxArea = Math.max(maxArea, height * (i - index));
      start = index;
    }

    stack.push([start, h]);
  });

  while (stack.length) {
    const [index, height] = stack.pop();
    maxArea = Math.max(maxArea, height * (heights.length - index));
  }

  return maxArea;
};
