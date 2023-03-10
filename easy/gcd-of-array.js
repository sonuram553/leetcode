function findGCD(nums) {
  let smallest = nums[0];
  let largest = nums[0];

  for (let i = 1; i < nums.length; i++) {
    if (nums[i] > largest) largest = nums[i];
    if (nums[i] < smallest) smallest = nums[i];
  }

  return gcd(largest, smallest);
}

function gcd(a, b) {
  if (a % b === 0) return b;

  return gcd(b, a % b);
}
k