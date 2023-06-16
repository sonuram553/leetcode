function findJudge(n, trust) {
  if (n === 1) return 1;

  const trustCountMap = {};

  for (const [_, trustOn] of trust) {
    trustCountMap[trustOn] = (trustCountMap[trustOn] || 0) + 1;

    if (trustCountMap[trustOn] === n - 1) {
      for (const [left, _] of trust) {
        if (left === trustOn) return -1;
      }
      return trustOn;
    }
  }

  return -1;
}
