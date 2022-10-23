var removeDuplicates = function (nums) {
  if (nums.length === 0) return 0;

  let i = 0;
  let j = 1;

  while (j < nums.length) {
    if (nums[i] != nums[j]) {
      i += 1;
      if (i != j) nums[i] = nums[j];
    }

    j++;
  }

  return i + 1;
};
