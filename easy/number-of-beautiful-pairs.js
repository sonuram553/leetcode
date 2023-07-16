export function countBeautifulPairs(nums) {
  let pairs = 0;
  const n = nums.length;
  for (let i = 0; i < n - 1; i++) {
    for (let j = i + 1; j < n; j++) {
      const firstDigit = Number(String(nums[i])[0]);
      const lastDigit = nums[j] % 10;
      if (gcd(firstDigit, lastDigit) === 1) pairs++;
    }
  }
  return pairs;
}

const gcd = (a, b) => (a % b === 0 ? b : gcd(b, a % b));
