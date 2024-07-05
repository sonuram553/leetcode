/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var maxVowels = function (str, k) {
  const vowels = "aeiou";
  let currentCount = 0;

  for (let i = 0; i < k; i++) {
    if (vowels.includes(str[i])) {
      currentCount++;
    }
  }

  let maxCount = currentCount;

  for (let i = 0; i < str.length - k; i++) {
    if (vowels.includes(str[i])) {
      currentCount--;
    }

    if (vowels.includes(str[i + k])) {
      currentCount++;
    }

    maxCount = Math.max(maxCount, currentCount);
  }

  return maxCount;
};
