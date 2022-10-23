/*

Write a function that takes an unsigned integer and returns the number of '1' 
bits it has (also known as the Hamming weight). 

*/

const cache = {};

function hammingWeight(n) {
  if (cache[n]) return cache[n];

  let count = 0;
  let temp = n;

  while (temp) {
    if (temp % 2 === 1) count += 1;
    temp = Math.floor(temp / 2);
  }

  cache[n] = count;

  return count;
}
