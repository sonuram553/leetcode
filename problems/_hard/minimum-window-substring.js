// Using Sliding Window

function countItems(arr) {
  const map = {};

  for (const item of arr) {
    if (map[item]) map[item] += 1;
    else map[item] = 1;
  }

  return map;
}

function minWindow(s, t) {
  let left = 0;
  let right = 0;
  let formed = 0;
  const windowCount = {};
  const map_t = countItems(t);
  const required = Object.keys(map_t).length;
  let result = [Infinity, null, null]; // window length, left index, right index

  while (right < s.length) {
    const ch = s[right];

    if (ch in map_t) {
      windowCount[ch] = (windowCount[ch] || 0) + 1;
      if (windowCount[ch] === map_t[ch]) formed++;
    }

    while (left <= right && formed === required) {
      const ch = s[left];

      if (right - left + 1 < result[0]) {
        result = [right - left + 1, left, right];
      }

      if (ch in map_t) {
        windowCount[ch] -= 1;
        if (windowCount[ch] < map_t[ch]) formed--;
      }

      left++;
    }

    right++;
  }

  if (result[0] === Infinity) return "";
  else return s.slice(result[1], result[2] + 1);
}
