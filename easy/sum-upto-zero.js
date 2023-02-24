function sumZero(n) {
  if (n === 1) return [0];

  const result = [];
  for (let i = 1; i < n; i++) {
    result.push(i);
  }

  result.push(-sum(n - 1));
  return result;
}

function sum(n) {
  return (n * (n + 1)) / 2;
}
