function maximumCount(nums) {
  return Math.max(positiveNumsCount(nums), negativeNumsCount(nums));
}

function positiveNumsCount(nums) {
  const n = nums.length;
  let start = 0;
  let end = n - 1;
  let firstPositiveIntIndex = -1;

  while (start < end) {
    const mid = (start + end) >>> 1;

    if (nums[mid] <= 0) {
      if (mid < n - 1 && nums[mid + 1] > 0) {
        firstPositiveIntIndex = mid + 1;
        break;
      }
      start = mid + 1;
    } else {
      if (mid > 0 && nums[mid - 1] <= 0) {
        firstPositiveIntIndex = mid;
        break;
      }
      end = mid - 1;
    }
  }

  let count;

  if (firstPositiveIntIndex === -1) {
    if (nums[0] > 0) count = n;
    else count = 0;
  } else count = n - firstPositiveIntIndex;

  return count;
}

function negativeNumsCount(nums) {
  const n = nums.length;
  let start = 0;
  let end = n - 1;
  let lastNegativeIntIndex = -1;

  while (start < end) {
    const mid = (start + end) >>> 1;

    if (nums[mid] >= 0) {
      if (mid > 0 && nums[mid - 1] < 0) {
        lastNegativeIntIndex = mid - 1;
        break;
      }
      end = mid - 1;
    } else {
      if (mid < n - 1 && nums[mid + 1] >= 0) {
        lastNegativeIntIndex = mid;
        break;
      }
      start = mid + 1;
    }
  }

  let count;

  if (lastNegativeIntIndex === -1) {
    if (nums[0] < 0) count = n;
    else count = 0;
  } else count = lastNegativeIntIndex + 1;

  return count;
}
