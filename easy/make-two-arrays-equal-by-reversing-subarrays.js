function canBeEqual(target, arr) {
  if (target.length !== arr.length) return false;

  const targetCountMap = countItems(target);
  const arrCountMap = countItems(arr);

  for (const num in targetCountMap)
    if (targetCountMap[num] !== arrCountMap[num]) return false;

  return true;
}

function countItems(arr) {
  const map = {};

  for (const item of arr) {
    if (map[item]) map[item] += 1;
    else map[item] = 1;
  }

  return map;
}
