// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'elppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

// Main Solution
function strReverseWithForLoop(str) {
  const charArr = str.split("");

  for (let i = 0, j = charArr.length - 1; i < j; i++, j--) {
    const temp = charArr[i];
    charArr[i] = charArr[j];
    charArr[j] = temp;
  }

  return charArr.join("");
}

// Alternate Solutions
function strReverseWithJsReduce(str) {
  return str.split("").reduce((reversed, char) => char + reversed);
}

function strReverseWithJsReverse(str) {
  return str.split("").reverse().join("");
}

function strReverseWithForOfLoop(str) {
  let reversed = "";

  for (let char of str) {
    reversed = char + reversed;
  }

  return reversed;
}

function strReverseWithRecursion(str, index = 0) {
  if (index === str.length - 1) return str[index];

  return strReverseWithRecursion(str, index + 1) + str[index];
}

module.exports = strReverseWithForLoop;
