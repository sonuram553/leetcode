function numPrimeArrangements(n) {
  let primeCount = 0;

  for (let i = 1; i <= n; i++) {
    if (isPrime(i)) primeCount++;
  }

  const arrangements = factorial(n - primeCount) * factorial(primeCount);
  const mod = arrangements % BigInt(10 ** 9 + 7);

  return Number(mod.toString());
}

function isPrime(num) {
  if (num < 2) return false;

  for (let i = 2; i * i <= num; i++) {
    if (num % i === 0) return false;
  }

  return true;
}

function factorial(n) {
  let value = 1n;
  for (let i = 2; i <= n; i++) value *= BigInt(i);

  return value;
}
