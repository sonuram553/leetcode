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

// Using Two Pointer Technique
// Time Complexity: O(NlogN)
function threeSumClosest(nums, target) {
  let closestSum;
  const n = nums.length;

  quickSort(nums);

  for (let i = 0; i < n; i++) {
    let left = i + 1;
    let right = n - 1;

    while (left < right) {
      const sum = nums[i] + nums[left] + nums[right];

      if (sum === target) return sum;

      if (closestSum === undefined) closestSum = sum;
      else if (Math.abs(target - sum) < Math.abs(target - closestSum))
        closestSum = sum;

      if (sum < target) left++;
      else right--;
    }
  }

  return closestSum;
}
