var romanToInt = function (str) {
  const map = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
    IV: 4,
    IX: 9,
    XL: 40,
    XC: 90,
    CD: 400,
    CM: 900,
  };

  let integer = 0;
  let i = str.length - 1;

  while (i >= 0) {
    let value = 0;

    if (
      (["V", "X"].includes(str[i]) && str[i - 1] === "I") ||
      (["L", "C"].includes(str[i]) && str[i - 1] === "X") ||
      (["D", "M"].includes(str[i]) && str[i - 1] === "C")
    ) {
      value = map[`${str[i - 1]}${str[i]}`];
      i -= 1;
    } else value = map[str[i]];

    integer += value;
    i -= 1;
  }

  return integer;
};


console.log(romanToInt("IV"));