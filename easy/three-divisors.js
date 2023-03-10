function isThree(n) {
  if (n < 4) return false;

  let count = 2;

  for (let i = 2; i * i <= n; i++) {
    if (n % i === 0) {
      if (i * i !== n) return false;
      count++;
    }
  }

  return count === 3;
}
