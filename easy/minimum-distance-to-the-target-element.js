function getMinDistance(nums, target, start) {
  let dist = -1;

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === target) {
      if (i === start) return 0;
      const value = Math.abs(i - start);
      if (dist === -1) dist = value;
      else if (value > dist) return dist;
      else dist = value;
    }
  }

  return dist;
}
