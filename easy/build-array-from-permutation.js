const buildArray = function (nums) {
  const prev = { index: null, value: null };

  for (let i = 0; i < nums.length; i++) {
    const value = nums[i];

    if (prev.index === value) {
      nums[i] = prev.value;
    } else {
      nums[i] = nums[value];
    }

    if (i !== value) {
      prev.index = i;
      prev.value = value;
    }
  }

  return nums;
};
