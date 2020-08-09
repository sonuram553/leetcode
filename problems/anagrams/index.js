// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False

function anagrams(strA, strB) {
  const sortedStrA = strA.replace(/[^\w]/g, "").split("").sort().join("");
  const sortedStrB = strB.replace(/[^\w]/g, "").split("").sort().join("");

  return sortedStrA === sortedStrB;
}

module.exports = anagrams;

/* function anagrams(strA, strB) {
  const newStrA = strA.replace(/[^a-zA-z]/g, "");
  const newStrB = strB.replace(/[^a-zA-Z]/g, "");

  if (newStrA.length !== newStrB.length) return false;

  let objA = {};
  for (let char of newStrA) {
    objA[char] = objA[char] + 1 || 1;
  }

  let objB = {};
  for (let char of newStrB) {
    objB[char] = objB[char] + 1 || 1;
    if (objB[char] && objB[char] > objA[char]) return false;
  }

  return true;
} */

/* function anagrams(stringA, stringB) {
  const newStringA = stringA.replace(/[^a-zA-Z]/g, "").toLowerCase();
  const newStringB = stringB.replace(/[^a-zA-Z]/g, "").toLowerCase();

  if (newStringA.length !== newStringB.length) return false;

  const objA = charsMap(newStringA);
  const objB = charsMap(newStringB);

  for (let key in objA) {
    if (objA[key] !== objB[key]) return false;
  }

  return true;
} 

function charsMap(str) {
  let map = {};

  for (let char of str) {
    map[char] = map[char] + 1 || 1;
  }

  return map;
}*/
