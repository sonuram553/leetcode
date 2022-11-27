function sortArrayByParity(nums) {
  let i = 0;

  while (nums[i] % 2 === 0) i++;

  let j = i + 1;

  while (j < nums.length) {
    if (nums[j] % 2 === 0) {
      swap(nums, i, j);
      i++;
    }

    j++;
  }

  return nums;
}

function swap(arr, leftIndex, rightIndex) {
  const temp = arr[leftIndex];
  arr[leftIndex] = arr[rightIndex];
  arr[rightIndex] = temp;
}
