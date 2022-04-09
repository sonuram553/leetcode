// Pascal's Triangle

const cache = {};

function factorial(num) {
  if (cache[num]) return cache[num];
  if (num < 2) return 1;

  const result = num * factorial(num - 1);
  cache[num] = result;
  return result;
}

function generate(numRows) {
  const rows = [];

  for (let i = 0; i < numRows; i++) {
    const newRow = [];
    for (let j = 0; j <= i; j++) {
      newRow.push(factorial(i) / (factorial(j) * factorial(i - j)));
    }
    rows.push(newRow);
  }

  return rows;
}

function getRow(rowIndex) {
  const row = [];
  for (let i = 0; i <= rowIndex; i++) {
    row.push(factorial(rowIndex) / (factorial(i) * factorial(rowIndex - i)));
  }
  return row;
}

console.log(generate(4));
