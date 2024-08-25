// https://www.youtube.com/watch?v=D4T2N0yAr20

/**
 * @param {string[]} products
 * @param {string} searchWord
 * @return {string[][]}
 */
var suggestedProducts = function (products, searchWord) {
  products.sort();

  const result = [];
  let start = 0;
  let end = products.length - 1;

  for (let i = 0; i < searchWord.length; i++) {
    const ch = searchWord[i];

    while (start <= end && products[start][i] !== ch) {
      start++;
    }

    while (start <= end && products[end][i] !== ch) {
      end--;
    }

    const arr = [];
    const remain = end - start + 1;
    for (let i = 0; i < Math.min(3, remain); i++) {
      arr.push(products[start + i]);
    }

    result.push(arr);
  }

  return result;
};
