function decrypt(code, k) {
  const n = code.length;

  if (k === 0) {
    for (let i = 0; i < n; i++) {
      code[i] = 0;
    }
    return code;
  }

  let len = 0;
  let sum = 0;
  const result = new Array(n).fill(0);

  if (k > 0) {
    let i = 1;
    let j = k;

    for (let x = i; x <= j; x++) {
      sum += code[x];
    }

    while (len < n) {
      result[(i - 1 + n) % n] = sum;
      sum -= code[i];
      i = (i + 1) % n;
      j = (j + 1) % n;
      sum += code[j];
      len++;
    }
  } else {
    let i = 0;
    let j = -k - 1;

    for (let x = i; x <= j; x++) {
      sum += code[x];
    }

    while (len < n) {
      result[(j + 1) % n] = sum;
      sum -= code[j];
      j = (j - 1 + n) % n;
      i = (i - 1 + n) % n;
      sum += code[i];
      len++;
    }
  }

  return result;
}
