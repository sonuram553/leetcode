function restoreString(s, indices) {
  const array = Array(s.length);

  indices.forEach((num, i) => {
    array[num] = s[i];
  });

  return array.join("");
}
