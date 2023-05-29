function objDiff(obj1, obj2) {
  if (
    isObject(obj1) &&
    isObject(obj2) &&
    Array.isArray(obj1) === Array.isArray(obj2)
  ) {
    const map = {};

    for (const key in obj1) {
      if (key in obj2) {
        const obj = objDiff(obj1[key], obj2[key]);
        if (Object.keys(obj).length) map[key] = obj;
      }
    }

    return map;
  }

  return obj1 !== obj2 ? [obj1, obj2] : {};
}

function isObject(obj) {
  return obj && typeof obj === "object";
}
