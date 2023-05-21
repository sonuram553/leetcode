function diStringMatch(s) {
  let left = 0;
  let right = s.length;
  const result = [];

  for (const ch of s) {
    if (ch === "I") result.push(left++);
    else result.push(right--);
  }

  result.push(right);

  return result;
}
