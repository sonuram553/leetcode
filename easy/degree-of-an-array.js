function findShortestSubArray(nums) {
  let degree = 0;
  const map = {};
  const n = nums.length;

  for (const num of nums) {
    map[num] = (map[num] || 0) + 1;
    degree = Math.max(degree, map[num]);
  }

  if (degree === 1) return 1;

  let j = 0;
  let frequencies;
  let shortest = Infinity;

  while (j < n) {
    let i = j;
    let degreeNum; // num with frequency equal to the degree
    let currentShortest = 0;

    frequencies = {};

    while (i < n) {
      const num = nums[i];
      frequencies[num] = (frequencies[num] || 0) + 1;

      if (frequencies[num] === degree) {
        degreeNum = num;
        currentShortest = i + 1 - j;
        break;
      }

      i++;
    }

    if (degreeNum !== undefined) {
      while (j < n && nums[j] !== degreeNum) {
        currentShortest--;
        j++;
      }
      shortest = Math.min(shortest, currentShortest);
      if (shortest === degree) break;
    } else break;

    j++;
  }

  return shortest;
}
