function sortSentence(s) {
  return countingSort(s.split(" "))
    .map((word) => word.slice(0, -1))
    .join(" ");
}

function countingSort(words) {
  const counter = [];
  const min = 1;
  const max = 9;

  for (let i = 0; i <= max - min; i++) counter.push(0);

  for (const word of words) {
    const index = Number(word[word.length - 1]);
    counter[index - min] += 1;
  }

  // Cumulative Sum
  for (let i = 1; i < counter.length; i++) counter[i] += counter[i - 1];

  const result = [];
  for (const word of words) {
    const index = Number(word[word.length - 1]);
    result[--counter[index - min]] = word;
  }

  return result;
}
