function findPivot(arr, start = 0, end = arr.length - 1) {
  let pivot = start;

  for (let i = start + 1; i <= end; i++) {
    if (arr[i] < arr[start]) {
      pivot++;

      const left = arr[i];
      arr[i] = arr[pivot];
      arr[pivot] = left;
    }
  }

  const left = arr[start];
  arr[start] = arr[pivot];
  arr[pivot] = left;

  return pivot;
}

function quickSort(arr, start = 0, end = arr.length - 1) {
  if (start > end) return;
  const pivot = findPivot(arr, start, end);

  quickSort(arr, start, pivot - 1);
  quickSort(arr, pivot + 1, end);
}

function threeSum(nums) {
  const n = nums.length;
  const result = [];

  quickSort(nums);

  for (let i = 0; i < n - 1; i++) {
    if (i === 0 || nums[i] > nums[i - 1]) {
      let left = i + 1;
      let right = n - 1;

      while (left < right) {
        if (left > i + 1 && nums[left] === nums[left - 1]) {
          left++;
          continue;
        }

        if (right < n - 1 && nums[right] === nums[right + 1]) {
          right--;
          continue;
        }

        if (nums[i] + nums[left] + nums[right] === 0) {
          result.push([nums[i], nums[left], nums[right]]);
          left++;
          right--;
        } else if (nums[left] + nums[right] > -nums[i]) right--;
        else left++;
      }
    }
  }

  return result;
}
