/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function (height) {
  let l = 0;
  let r = height.length - 1;
  let area = 0;

  while (l < r) {
    const minHeight = Math.min(height[l], height[r]);
    area = Math.max(area, minHeight * (r - l));

    if (height[l] < height[r]) l++;
    else r--;
  }

  return area;
};
