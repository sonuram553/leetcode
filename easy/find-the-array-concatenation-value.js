function findTheArrayConcVal(nums) {
  let sum = 0;
  let start = 0;
  let end = nums.length - 1;

  while (start < end) {
    const numStr = String(nums[start]) + String(nums[end]);
    sum += Number(numStr);

    start++;
    end--;
  }

  if (start === end) sum += nums[start];
  return sum;
}
