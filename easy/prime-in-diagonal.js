function diagonalPrime(nums) {
  const n = nums.length;
  let largestPrime = 0;

  for (let i = 0; i < n; i++) {
    if (isPrime(nums[i][i])) largestPrime = Math.max(largestPrime, nums[i][i]);
    if (isPrime(nums[i][n - 1 - i]))
      largestPrime = Math.max(largestPrime, nums[i][n - 1 - i]);
  }

  return largestPrime;
}

function isPrime(num) {
  if (num < 2) return false;
  for (let i = 2; i * i <= num; i++) {
    if (num % i === 0) return false;
  }
  return true;
}
