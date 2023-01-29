function gcdOfStrings(str1, str2) {
  let bigStr, smallStr;

  if (str1.length > str2.length) {
    bigStr = str1;
    smallStr = str2;
  } else {
    bigStr = str2;
    smallStr = str1;
  }

  let t = findT(smallStr);

  if (!isConsistOfTOnly(bigStr, t)) return "";

  const g = gcd(str1.length / t.length, str2.length / t.length);

  let value = "";
  for (let i = 0; i < g; i++) value += t;

  return value;
}

function findT(str) {
  const n = str.length;
  const otherFactors = [];

  for (let i = 1; i * i <= n; i++) {
    if (n % i === 0) {
      if (isConsistOfTOnly(str, str.slice(0, i))) return str.slice(0, i);
      if (i !== 1) otherFactors.push(n / i);
    }
  }

  for (let i = otherFactors.length - 1; i >= 0; i--) {
    const factor = otherFactors[i];
    if (isConsistOfTOnly(str, str.slice(0, factor)))
      return str.slice(0, factor);
  }

  return str;
}

function isConsistOfTOnly(str, t) {
  if (str.length % t.length) return false;

  for (let i = 0; i < str.length; i += t.length) {
    for (let j = 0; j < t.length; j++) {
      if (str[i + j] !== t[j]) return false;
    }
  }

  return true;
}

function gcd(a, b) {
  if (a % b === 0) return b;
  return gcd(b, a % b);
}
