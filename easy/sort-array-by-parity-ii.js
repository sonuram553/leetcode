function sortArrayByParityII(nums) {
  let i = 0;

  while (i < nums.length) {
    if (i % 2 === 0) {
      // i is EVEN

      if (nums[i] % 2 !== 0) {
        // num is ODD
        let j = i + 1;

        while (j < nums.length) {
          // Find an ODD index which has an EVEN num and replace it with num at index i.
          if (j % 2 !== 0 && nums[j] % 2 === 0) break;
          j++;
        }

        swap(nums, i, j);
      }
    } else {
      // i is ODD

      if (nums[i] % 2 === 0) {
        // num is EVEN
        let j = i + 1;

        while (j < nums.length) {
          // Find an EVEN index which as an ODD num and replace it with num at i.
          if (j % 2 === 0 && nums[j] % 2 !== 0) break;
          j++;
        }

        swap(nums, i, j);
      }
    }

    i++;
  }

  return nums;
}

function swap(arr, leftIndex, rightIndex) {
  const temp = arr[leftIndex];
  arr[leftIndex] = arr[rightIndex];
  arr[rightIndex] = temp;
}
