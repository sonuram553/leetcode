// --- Directions
// Check to see if two provided strings are anagrams of each-other.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False

// Main Solution
function anagrams(strA, strB) {
  const newStrA = cleanString(strA);
  const newStrB = cleanString(strB);

  if (newStrA.length !== newStrB.length) return false;

  const charMapA = {};
  for (let char of newStrA) {
    charMapA[char] = charMapA[char] + 1 || 1;
  }

  const charMapB = {};
  for (let char of newStrB) {
    charMapB[char] = charMapB[char] + 1 || 1;
    if (!charMapA[char] || charMapB[char] > charMapA[char]) return false;
  }

  return true;
}

// Alternate Solutions
function anagrams1(strA, strB) {
  return sortString(strA) === sortString(strB);
}

// Not using second characterMap
function anagrams2(strA, strB) {
  const newStrA = cleanString(strA);
  const newStrB = cleanString(strB);

  if (newStrA.length !== newStrB.length) return false;

  const charMapA = {};

  for (const char of newStrA) {
    charMapA[char] = charMapA[char] + 1 || 1;
  }

  for (const char of newStrB) {
    // Can't find the character or its value is zero then it's not an anagram
    if (charMapA[char] === undefined || charMapA[char] === 0) return false;
    charMapA[char] -= 1;
  }

  return true;
}

// Helper Functions
function cleanString(str) {
  return str.replace(/[^\w]/g, "").toLowerCase();
}

function sortString(str) {
  return cleanString(str).split("").sort().join("");
}

module.exports = anagrams;
