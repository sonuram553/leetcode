function distinctDifferenceArray(nums) {
  const n = nums.length;

  let set = new Set();
  set.add(nums[0]);

  const countOfDistinctNumsLeftToRight = new Array(n).fill(0);
  countOfDistinctNumsLeftToRight[0] = 1;

  for (let i = 1; i < n; i++) {
    let add = 0;
    if (!set.has(nums[i])) add = 1;

    set.add(nums[i]);

    countOfDistinctNumsLeftToRight[i] =
      countOfDistinctNumsLeftToRight[i - 1] + add;
  }

  set = new Set();
  set.add(nums[n - 1]);

  const countOfDistinctNumsRightToLeft = new Array(n).fill(0);
  countOfDistinctNumsRightToLeft[n - 1] = 1;

  for (let i = n - 2; i >= 0; i--) {
    let add = 0;
    if (!set.has(nums[i])) add = 1;

    set.add(nums[i]);

    countOfDistinctNumsRightToLeft[i] =
      countOfDistinctNumsRightToLeft[i + 1] + add;
  }

  const result = [];

  for (let i = 1; i < n; i++) {
    const diff =
      countOfDistinctNumsLeftToRight[i - 1] - countOfDistinctNumsRightToLeft[i];
    result.push(diff);
  }

  result.push(countOfDistinctNumsLeftToRight[n - 1]);
  return result;
}
