function allSimilar(arr) {
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] !== arr[i - 1]) {
      return false;
    }
  }

  return true;
}

function countHillValley(nums) {
  if (allSimilar(nums)) return 0;

  let count = 0;

  for (let i = 1; i < nums.length - 1; i++) {
    let isLess = false;
    let isGreater = false;

    // Check on i's Left
    for (let j = i - 1; j >= 0; j--) {
      if (nums[i] > nums[j]) {
        isGreater = true;
        break;
      }

      if (nums[i] < nums[j]) {
        isLess = true;
        break;
      }
    }

    if ((isLess || isGreater) && nums[i] !== nums[i - 1]) {
      // Check on i's Right
      for (let j = i + 1; j < nums.length; j++) {
        if (nums[i] !== nums[j]) {
          if (isGreater && nums[i] > nums[j]) count += 1;
          if (isLess && nums[i] < nums[j]) count += 1;
          break;
        }
      }
    }
  }

  return count;
}

console.log(countHillValley([8, 2, 5, 7, 7, 2, 10, 3, 6, 2]));
// countHillValley([8, 2, 5, 7, 7, 2, 10, 3, 6, 2]);
