function containsNearbyDuplicate(nums, k) {
  let i = 0;
  let j = nums.length - 1;
  const map = {};

  while (i < j) {
    if (nums[i] === nums[j] && Math.abs(i - j) <= k) return true;
    i++;
    j--;
  }

  for (let i = 0; i < nums.length; i++) {
    const num = nums[i];

    if (map[num] === undefined) map[num] = i;
    else if (Math.abs(map[num] - i) <= k) return true;
    else map[num] = i;
  }

  return false;
}
