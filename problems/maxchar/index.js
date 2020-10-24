// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

// Main Solution
function maxCharWithMap(str) {
  let obj = {};

  for (let char of str) {
    obj[char] = obj[char] + 1 || 1;
  }

  return maxValueOfKey(obj);
}

function maxValueOfKey(obj) {
  let max = 0;
  let char = "";

  for (let key in obj) {
    if (obj[key] > max) {
      max = obj[key];
      char = key;
    }
  }

  return char;
}

// Alternate Solutions
const ascii_0 = 48;

function maxCharWithAscii(str) {
  const charsCount = Array(75).fill(0);

  for (let char of str) {
    charsCount[char.charCodeAt(0) - ascii_0]++;
  }

  const index = maxNumAtIndex(charsCount);

  return String.fromCharCode(ascii_0 + index);
}

function maxNumAtIndex(arr) {
  let index = 0;

  for (let i = 1; i < arr.length; i++) {
    arr[i] > arr[index] ? (index = i) : null;
  }

  return index;
}

module.exports = maxCharWithMap;
