function findSpecialInteger(arr) {
  let count = 1;
  const n = arr.length;
  const oneFourthOfN = n * 0.25;

  for (let i = 1; i < n; i++) {
    if (arr[i] === arr[i - 1]) count++;
    else count = 1;
    if (count > oneFourthOfN) return arr[i];
  }

  return arr[0];
}
