function divideString(s, k, fill) {
  if (k === 1) return s.split("");

  let j = 0;
  let str = "";
  const result = new Array(Math.ceil(s.length / k));

  for (let i = 0; i < s.length; i++) {
    str += s[i];

    if ((i + 1) % k === 0) {
      result[j++] = str;
      str = "";
    }
  }

  if (str !== "") {
    while (str.length !== k) {
      str += fill;
    }
    result[j] = str;
  }

  return result;
}
