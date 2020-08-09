// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

function maxChar(str) {
  let obj = {};

  for (let char of str) {
    obj[char] = obj[char] + 1 || 1;
  }

  return maxValueOfkey(obj);
}

function maxValueOfkey(obj) {
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

module.exports = maxChar;

/* const asciiFor_0 = 48;

function maxChar(str) {
  const lowerCaseAlphabets = Array(75).fill(0);

  for (let char of str) {
    lowerCaseAlphabets[char.charCodeAt(0) - asciiFor_0]++;
  }
  let index = maxNumAtIndex(lowerCaseAlphabets);
  return String.fromCharCode(asciiFor_0 + index);
}

function maxNumAtIndex(arr) {
  let index = 0;
  for (let i = 1; i < arr.length; i++) {
    arr[i] > arr[index] ? (index = i) : "";
  }

  return index;
} */
