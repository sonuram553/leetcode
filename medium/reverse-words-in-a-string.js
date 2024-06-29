/**
 * Time complexity O(n)
 * Space complexity O(n)
 * @param {string} s
 * @return {string}
 */
var reverseWords = function (s) {
  const words = s
    .trim()
    .split(" ")
    .filter((word) => Boolean(word));
  // const words = s.trim().split(/\s+/); // Same as above but slower

  let start = 0;
  let end = words.length - 1;

  while (start < end) {
    [words[start], words[end]] = [words[end], words[start]];
    start++;
    end--;
  }

  return words.join(" ");
};

// Reverse words in-place if the string is mutable or string is in the array form
// ['t', 'h', 'e', ' ', 's', 'k', 'y', ' ', 'i', 's', ' ', 'b', 'l', 'u', 'e']
function reverse(arr, start, end) {
  while (start < end) {
    [arr[start], arr[end]] = [arr[end], arr[start]];
    start++;
    end--;
  }
}

var reverseWords = function (s) {
  const arr = [...s];

  // Reverse the whole string.
  reverse(arr, 0, arr.length - 1);

  // Reverse each word.
  let i = 1;
  let start = 0;
  while (i < arr.length) {
    if (arr[i] === " ") {
      reverse(arr, start, i - 1);
      start = i + 1;
    }
    i++;
  }

  reverse(arr, start, i);
  return arr.join("");
};
