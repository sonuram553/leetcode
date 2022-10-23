// Counting Bits

function countBits(n) {
  if (n === 0) return [0];
  if (n === 1) return [0, 1];

  const result = [0, 1];
  let lastPowerOfTwo;

  for (let i = 2; i <= n; i++) {
    if ((i & (i - 1)) === 0) {
      result.push(1);
      lastPowerOfTwo = i;
    } else {
      const ones = result[i - lastPowerOfTwo] + 1;
      result.push(ones);
    }
  }

  return result;
}
