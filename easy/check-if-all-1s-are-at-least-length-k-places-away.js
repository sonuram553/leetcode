function kLengthApart(nums, k) {
  if (k === 0) return true;
  let prevOnesIndex = -1;

  for (let i = 0; i < nums.length; i++) {
    if (nums[i]) {
      if (prevOnesIndex === -1) {
        prevOnesIndex = i;
      } else {
        if (i - prevOnesIndex - 1 < k) return false;
        prevOnesIndex = i;
      }
    }
  }

  return true;
}

export default kLengthApart;
