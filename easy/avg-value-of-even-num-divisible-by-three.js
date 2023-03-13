function averageValue(nums) {
  let sum = 0;
  let count = 0;

  for (const num of nums) {
    if (num % 6 === 0) {
      sum += num;
      count++;
    }
  }

  return count ? Math.floor(sum / count) : 0;
}
