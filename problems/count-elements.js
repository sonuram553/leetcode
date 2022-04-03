const nums = [3, 1, 2, 3, 1];

function countElements() {
  let max = nums[0];
  let min = nums[0];
  let allSimilar = true;

  for (let i = 1; i < nums.length; i++) {
    if (nums[i] !== nums[i - 1]) {
      allSimilar = false;
      break;
    }
  }

  if (allSimilar) return 0;

  for (let i = 1; i < nums.length; i++) {
    if (nums[i] > max) {
      max = nums[i];
    } else if (nums[i] < min) {
      min = nums[i];
    }
  }

  let minCount = 0;
  let maxCount = 0;
  for (const num of nums) {
    if (num === min) {
      minCount += 1;
    } else if (num === max) {
      maxCount += 1;
    }
  }

  return nums.length - (minCount + maxCount);
}

console.log(countElements());
