function pivotInteger(n) {
  let leftSum = 0;
  const sum = (n * (n + 1)) / 2;

  for (let i = 1; i <= n; i++) {
    leftSum += i;

    const rightSum = sum - leftSum + i;

    if (leftSum === rightSum) return i;
    if (leftSum > rightSum) return -1;
  }

  return -1;
}
