function divisorSubstrings(num, k) {
  const numString = String(num);
  const n = numString.length;
  let count = 0;
  let substring = "";

  for (let i = 0; i < k; i++) {
    substring += numString[i];
  }

  if (num % Number(substring) === 0) count++;

  for (let i = 1; i <= n - k; i++) {
    substring = substring.slice(1) + numString[i + k - 1];
    if (num % Number(substring) === 0) count++;
  }

  return count;
}
