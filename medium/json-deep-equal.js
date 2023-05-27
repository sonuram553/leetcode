// Recursive
function areDeeplyEqual(o1, o2) {
  if (o1 === o2) return true;
  if (o1 === null || o2 === null) return false;

  // Both are Arrays
  if (areArrays(o1, o2)) {
    if (o1.length !== o2.length) return false;

    for (let i = 0; i < o1.length; i++) {
      const bool = areDeeplyEqual(o1[i], o2[i]);
      if (!bool) return false;
    }

    return true;
  }

  // Both are Objects
  if (areObjects(o1, o2)) {
    if (Object.keys(o1).length !== Object.keys(o2).length) return false;

    for (const key in o1) {
      const bool = areDeeplyEqual(o1[key], o2[key]);
      if (!bool) return false;
    }

    return true;
  }

  return false;
}

function areArrays(left, right) {
  return Array.isArray(left) && Array.isArray(right);
}

function areObjects(value1, value2) {
  return (
    typeof value1 === "object" &&
    value1 !== null &&
    !Array.isArray(value1) &&
    typeof value2 === "object" &&
    value2 !== null &&
    !Array.isArray(value2)
  );
}

// Iterative
function areDeeplyEqual(o1, o2) {
  const stack = [[o1, o2]];

  while (stack.length) {
    const [o1, o2] = stack.pop();

    if (o1 === o2) continue;
    if (typeof o1 !== "object" || typeof o2 !== "object") return false;
    if (Array.isArray(o1) !== Array.isArray(o2)) return false;

    const keys1 = Object.keys(o1);
    const keys2 = Object.keys(o2);

    if (keys1.length !== keys2.length) return false;

    for (const key of keys1) {
      if (!(key in o2)) return false;
      stack.push([o1[key], o2[key]]);
    }
  }

  return true;
}
