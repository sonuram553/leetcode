function maximizeSum(nums, k) {
  const max = Math.max(...nums);
  return (
    sumOfFirstNNaturalNumbers(max + (k - 1)) -
    sumOfFirstNNaturalNumbers(max - 1)
  );
}

function sumOfFirstNNaturalNumbers(n) {
  return (n * (n + 1)) / 2;
}
