// Time Complexity: O(n) roughly
function checkPerfectNumber(num) {
  let sum = 0;

  for (let i = 1; i <= num >>> 1; i++) {
    if (num % i === 0) sum += i;

    if (sum > num) return false;
  }

  return sum === num;
}

// Time Complexity: O(root(n))
function checkPerfectNumber(num) {
  let sum = 0;

  for (let i = 0; i * i <= num; i++) {
    if (num % i === 0) {
      sum += i;

      if (i * i !== num) sum += num / i;
    }
  }

  return sum - num === num;
}
