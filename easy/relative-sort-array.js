function relativeSortArray(arr1, arr2) {
  const map = {};
  const arr = [];
  const extras = [];
  const min = Math.min(...arr2);

  for (let i = 0; i < arr2.length; i++) map[arr2[i] - min] = i;

  // Put nums in extras which do not appear in arr2
  for (const num of arr1)
    if (map[num - min] !== undefined) arr.push(num);
    else extras.push(num);

  return [...countingSort(arr, map), ...countingSort(extras)];
}

function countingSort(nums, map) {
  const counter = [];
  const min = Math.min(...nums);
  const max = Math.max(...nums);

  for (let i = 0; i <= max - min; i++) counter.push(0);

  for (const num of nums) {
    let index = num - min;

    if (map) index = map[index];
    counter[index] += 1;
  }

  // Cumulative Sum
  for (let i = 1; i < counter.length; i++) counter[i] += counter[i - 1];

  const result = [];

  for (let i = 0; i < nums.length; i++) {
    const num = nums[i];
    let index = num - min;

    if (map) index = map[index];

    result[--counter[index]] = num;
  }

  return result;
}
