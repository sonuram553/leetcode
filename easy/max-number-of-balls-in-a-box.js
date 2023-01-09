function countBalls(lowLimit, highLimit) {
  const map = {};

  for (let i = lowLimit; i <= highLimit; i++) {
    const sum = sumOfDigits(i);
    map[sum] = (map[sum] || 0) + 1;
  }

  let maxBalls = 0;

  for (const num in map) {
    maxBalls = Math.max(maxBalls, map[num]);
  }

  return maxBalls;
}

function sumOfDigits(num) {
  let sum = 0;

  while (num) {
    sum += num % 10;
    num = Math.floor(num / 10);
  }

  return sum;
}
