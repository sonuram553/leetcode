function smallerNumbersThanCurrent(nums) {
  const map = {};

  nums.forEach((num, i) => {
    if (num in map) map[num].indices.push(i);
    else map[num] = { indices: [i] };
  });

  countingSort(nums).forEach((num, i) => {
    const { count } = map[num];
    if (count === undefined) map[num].count = i;
  });

  const result = [];

  for (const num in map) {
    const { indices, count } = map[num];
    for (const i of indices) result[i] = count;
  }

  return result;
}

function countingSort(nums) {
  const counter = [];
  const min = Math.min(...nums);
  const max = Math.max(...nums);

  for (let i = 0; i <= max - min; i++) counter.push(0);

  for (const num of nums) counter[num - min] += 1;

  // Cumulative Sum
  for (let i = 1; i < counter.length; i++) counter[i] += counter[i - 1];

  const result = [];

  for (let i = 0; i < nums.length; i++) {
    const num = nums[i];
    result[--counter[num - min]] = num;
  }

  return result;
}
