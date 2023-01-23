function countPrimeSetBits(left, right) {
  let primeCount = 0;

  for (let i = left; i <= right; i++) {
    let temp = i;
    let setBitCount = 0;

    while (temp) {
      const bit = temp % 2;
      if (bit) setBitCount++;
      temp = Math.floor(temp / 2);
    }

    if (isPrime(setBitCount)) primeCount++;
  }

  return primeCount;
}

function isPrime(num) {
  if (num < 2) return false;

  for (let i = 2; i * i <= num; i++) {
    if (num % i === 0) return false;
  }

  return true;
}
