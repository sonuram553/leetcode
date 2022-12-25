function findEvenNumbers(digits) {
  const n = digits.length;
  const set = new Set();

  for (let i = 0; i < n; i++) {
    if (digits[i] === 0) continue;

    for (let j = 0; j < n; j++) {
      if (i === j) continue;

      for (let k = 0; k < n; k++) {
        if (k === j || k === i || digits[k] % 2) continue;

        set.add(digits[i] * 100 + digits[j] * 10 + digits[k]);
      }
    }
  }

  const result = [];
  for (const num of set.values()) result.push(num);

  return countingSort(result);
}

function countingSort(nums) {
  const counter = [];
  const min = Math.min(...nums);
  const max = Math.max(...nums);

  for (let i = 0; i <= max - min; i++) counter.push(0);

  for (const num of nums) counter[num - min] += 1;

  // Cumulative Sum
  for (let i = 1; i < counter.length; i++) counter[i] += counter[i - 1];

  const result = [];
  for (const num of nums) result[--counter[num - min]] = num;

  return result;
}
