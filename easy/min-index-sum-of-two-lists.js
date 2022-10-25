function findRestaurant(list1, list2) {
  let smallerList = list1;
  let biggerList = list2;

  if (list1.length > list2.length) {
    biggerList = list1;
    smallerList = list2;
  }

  const smallerListIndexMap = {};

  for (let i = 0; i < smallerList.length; i++) {
    const word = smallerList[i];
    smallerListIndexMap[word] = i;
  }

  let words = [];
  let minSum = Infinity;

  for (let i = 0; i < biggerList.length; i++) {
    const word = biggerList[i];
    if (smallerListIndexMap[word] !== undefined) {
      const indexSum = i + smallerListIndexMap[word];
      if (indexSum < minSum) {
        minSum = indexSum;
        words = [word];
      } else if (indexSum === minSum) words.push(word);
    }
  }

  return words;
}
