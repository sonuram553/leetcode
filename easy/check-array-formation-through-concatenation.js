function canFormArray(arr, pieces) {
  const map = {};

  for (let i = 0; i < arr.length; i++) {
    map[arr[i]] = i;
  }

  for (const arr of pieces) {
    if (arr.length > 1) {
      for (let i = 0; i < arr.length - 1; i++) {
        if (map[arr[i]] === undefined || map[arr[i + 1]] === undefined)
          return false;
        if (map[arr[i + 1]] - map[arr[i]] !== 1) return false;
      }
    } else if (!(arr[0] in map)) return false;
  }

  return true;
}
