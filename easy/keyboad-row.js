function findWords(words) {
  const firstRowKeys = {
    q: "1",
    w: "1",
    e: "1",
    r: "1",
    t: "1",
    y: "1",
    u: "1",
    i: "1",
    o: "1",
    p: "1",
  };

  const secondRowKeys = {
    a: "2",
    s: "2",
    d: "2",
    f: "2",
    g: "2",
    h: "2",
    j: "2",
    k: "2",
    l: "2",
  };

  const thirdRowKeys = {
    z: "3",
    x: "3",
    c: "3",
    v: "3",
    b: "3",
    n: "3",
    m: "3",
  };

  const result = [];

  for (const word of words) {
    let row;
    let isOneRow = true;
    let firstKey = word[0].toLowerCase();

    if (firstRowKeys[firstKey]) row = firstRowKeys[firstKey];
    else if (secondRowKeys[firstKey]) row = secondRowKeys[firstKey];
    else if (thirdRowKeys[firstKey]) row = thirdRowKeys[firstKey];

    for (let i = 1; i < word.length; i++) {
      const key = word[i].toLowerCase();

      if (
        (firstRowKeys[key] && firstRowKeys[key] !== row) ||
        (secondRowKeys[key] && secondRowKeys[key] !== row) ||
        (thirdRowKeys[key] && thirdRowKeys[key] !== row)
      ) {
        isOneRow = false;
        break;
      }
    }

    if (isOneRow) result.push(word);
  }

  return result;
}
