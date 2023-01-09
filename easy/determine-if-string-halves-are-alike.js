function halvesAreAlike(str) {
  const n = str.length;
  const vowels = "aeiouAEIOU";
  let leftHalfVowelsCount = 0;
  let rightHalfVowelsCount = 0;

  for (let i = 0; i < n >>> 1; i++) {
    if (vowels.includes(str[i])) leftHalfVowelsCount++;
  }

  for (let i = n >>> 1; i < n; i++) {
    if (vowels.includes(str[i])) rightHalfVowelsCount++;
  }

  return leftHalfVowelsCount === rightHalfVowelsCount;
}
