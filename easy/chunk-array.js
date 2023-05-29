function chunk(arr, size) {
  let i = 0;
  let temp = [];
  let count = 0;
  const result = new Array(Math.ceil(arr.length / size));

  for (const item of arr) {
    temp.push(item);
    count++;

    if (count % size === 0) {
      result[i++] = temp;
      count = 0;
      temp = [];
    }
  }

  if (temp.length) result[i] = temp;

  return result;
}
