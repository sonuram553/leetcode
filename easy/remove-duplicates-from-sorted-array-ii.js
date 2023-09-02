function removeDuplicates(nums) {
  let count = 1;
  let start = 1;
  let end = nums.length - 1;

  while (start <= end) {
    if (nums[start] === nums[start - 1]) count++;
    else count = 1;

    if (count === 3) {
      let i = start + 1;

      // Find next unique num
      while (i <= end && nums[i] === nums[start]) i++;

      const diff = i - start;
      while (i <= end) {
        nums[i - diff] = nums[i];
        i++;
      }

      end -= diff;
      count = 1;
    } else start++;
  }

  return start;
}
