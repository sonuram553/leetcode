/**
 * @param {number} n
 * @return {number}
 */
var tribonacci = function (n) {
  const arr = [0, 1, 1];

  if (n < 3) return arr[n];

  for (let i = 3; i <= n; i++) {
    const sum = arr[0] + arr[1] + arr[2];
    arr[0] = arr[1];
    arr[1] = arr[2];
    arr[2] = sum;
  }

  return arr[2];
};
