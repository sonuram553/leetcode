function getLucky(s, k) {
  let num = 0;

  // First Transformation
  for (const ch of s) {
    num += digitsSum(ch.charCodeAt(0) - 96);
  }

  for (let i = 1; i < k; i++) {
    num = digitsSum(num);
  }

  return num;
}

function digitsSum(num) {
  let sum = 0;
  while (num) {
    sum += num % 10;
    num = Math.floor(num / 10);
  }
  return sum;
}
