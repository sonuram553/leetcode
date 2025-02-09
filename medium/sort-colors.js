/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var sortColors = function (nums) {
  const colors = Array(3).fill(0);

  nums.forEach((num) => colors[num]++);

  let k = 0;
  colors.forEach((count, i) => {
    for (let j = 0; j < count; j++) {
      nums[k] = i;
      k++;
    }
  });

  return nums;
};
