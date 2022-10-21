function countItems(arr) {
  const map = {};

  for (const item of arr) {
    if (map[item]) map[item] += 1;
    else map[item] = 1;
  }

  return map;
}

function findLHS(nums) {
  let lhs = 0;
  const counts = countItems(nums);

  for (let num in counts) {
    num = Number(num);

    if (counts[num + 1]) lhs = Math.max(lhs, counts[num] + counts[num + 1]);
    else if (counts[num - 1])
      lhs = Math.max(lhs, counts[num] + counts[num - 1]);
  }

  return lhs;
}
