const sumOfSquares = (nums) =>
  nums.reduce(
    (sum, num, i) => (nums.length % (i + 1) === 0 ? num * num + sum : sum),
    0
  );
