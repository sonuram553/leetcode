

/**
 * Time Complexity O(n * m)
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function (haystack, needle) {
  const n = haystack.length;
  const m = needle.length;
  let i = 0;

  while (i <= n - m) {
    let j = 0;
    while (j < m) {
      if (haystack[i + j] !== needle[j]) break;
      j++;
    }

    if (j === m) return i;
    i++;
  }

  return -1;
};
