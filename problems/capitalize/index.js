// --- Directions
// Write a function that accepts a string.  The function should
// capitalize the first letter of each word in the string then
// return the capitalized string.
// --- Examples
//   capitalize('a short sentence') --> 'A Short Sentence'
//   capitalize('a lazy fox') --> 'A Lazy Fox'
//   capitalize('look, it is working!') --> 'Look, It Is Working!'

// Main Solution
function capitalize(str) {
  return str.replace(/^.| ./g, (match) => match.toUpperCase());
}

// Alternate Solutions
function capitalizeWithForLoop(str) {
  let result = str[0].toUpperCase();

  for (let i = 1; i < str.length; i++) {
    if (str[i - 1] === " ") {
      result += str[i].toUpperCase();
    } else {
      result += str[i];
    }
  }
  return result;
}

function capitalizeWithStringsSplit(str) {
  const words = [];

  for (let word of str.split(" ")) {
    const capWord = word[0].toUpperCase() + word.slice(1);
    words.push(capWord);
  }

  return words.join(" ");
}

module.exports = capitalize;