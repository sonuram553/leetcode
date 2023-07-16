function kItemsWithMaximumSum(numOnes, numZeros, numNegOnes, k) {
  if (k <= numOnes) return k;

  let sum = numOnes;
  k -= numOnes;
  if (k <= numZeros) return sum;

  k -= numZeros;
  return sum - k;
}
