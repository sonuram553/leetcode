function maxArea(height) {
  let start = 0;
  let end = height.length - 1;
  let _maxArea = 0;

  while (start < end) {
    const h = Math.min(height[start], height[end]);
    _maxArea = Math.max(_maxArea, h * (end - start));

    if (height[start] === height[end]) {
      start++;
      end--;
    } else if (height[start] > height[end]) end--;
    else start++;
  }

  return _maxArea;
}
