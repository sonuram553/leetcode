function twoSum(nums, target) {
  let end = nums.length - 1;

  for (let i = 0; i <= end; i++) {
    let start = i + 1;
    const diff = target - nums[i];

    while (start <= end) {
      const mid = (start + end) >> 1;

      if (nums[mid] === diff) {
        return [i + 1, mid + 1];
      }

      if (nums[mid] > diff) end = mid - 1;
      else start = mid + 1;
    }
  }
}
