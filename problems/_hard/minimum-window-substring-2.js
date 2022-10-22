// Optimize Sliding Window by filtering s

function minWindow(s, t) {
  let left = 0;
  let right = 0;
  let formed = 0;
  const filtered_s = [];
  const windowCount = {};
  const map_t = countItems(t);
  const required = Object.keys(map_t).length;
  let result = [Infinity, null, null]; // window length, left index, right index

  // Create filtered s
  for (let i = 0; i < s.length; i++)
    if (s[i] in map_t) filtered_s.push([i, s[i]]);

  while (right < filtered_s.length) {
    const ch = filtered_s[right][1];
    windowCount[ch] = (windowCount[ch] || 0) + 1;

    if (windowCount[ch] === map_t[ch]) formed++;

    while (left <= right && formed === required) {
      const ch = filtered_s[left][1];
      const windowLength = filtered_s[right][0] - filtered_s[left][0] + 1;

      if (windowLength < result[0])
        result = [windowLength, filtered_s[left][0], filtered_s[right][0]];

      windowCount[ch] -= 1;
      if (windowCount[ch] < map_t[ch]) formed--;

      left++;
    }

    right++;
  }

  if (result[0] === Infinity) return "";
  else return s.slice(result[1], result[2] + 1);
}

function countItems(arr) {
  const map = {};

  for (const item of arr) {
    if (map[item]) map[item] += 1;
    else map[item] = 1;
  }

  return map;
}
