function sumBase(n, k) {
  let sum = 0;

  while (n) {
    sum += n % k;
    n = Math.floor(n / k);
  }

  return sum;
}
