function checkIfExist(arr) {
  const map = {};
  
  for (const num of arr) map[num] = (map[num] || 0) + 1;

  for (const num of arr) {
    if (num === 0) {
      if (map[num] > 1) return true;
    } else if (map[2 * num]) return true;
  }

  return false;
}
