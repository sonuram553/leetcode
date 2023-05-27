function jsonToMatrix(arr) {
  function isObject(obj) {
    return obj !== null && typeof obj === "object";
  }

  function getKeys(obj) {
    if (obj === null || typeof obj !== "object") return [""];

    const result = [];
    const keys = Object.keys(obj);

    for (const key of keys) {
      const childKeys = getKeys(obj[key]);
      for (const childKey of childKeys) {
        result.push(childKey ? `${key}.${childKey}` : key);
      }
    }

    return result;
  }

  const keysSet = arr.reduce((acc, curr) => {
    getKeys(curr).forEach((key) => acc.add(key));
    return acc;
  }, new Set());

  const sortedKeys = Array.from(keysSet).sort();

  function getValue(path, obj) {
    const keys = path.split(".");

    let temp = obj;
    for (const key of keys) {
      if (isObject(temp) && key in temp) temp = temp[key];
      else return "";
    }

    return isObject(temp) ? "" : temp;
  }

  const matrix = [sortedKeys];
  for (const obj of arr) {
    matrix.push(sortedKeys.map((key) => getValue(key, obj)));
  }
  return matrix;
}
