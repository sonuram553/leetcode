/*
--- Directions
Write a function to collect strings values from an Object. The Object can
have nested objects.

--- Examples
collectStrings({})  // returns [];
collectStrings({firstName: "Sonu", lastName: "Ram"})  // returns ["Sonu", "Ram"];
 */

// Using Pure Recursion
function collectStrings(obj) {
  let result = [];

  for (let key in obj) {
    const value = obj[key];
    if (typeof value === "string") result.push(value);
    else if (typeof value === "object" && !Array.isArray(value))
      result = [...result, ...collectStrings(value)];
  }

  return result;
}

// Using Helper Method Recursion
/* function collectStrings(obj) {
  const result = [];

  function findStrings(obj) {
    for (let key in obj) {
      const value = obj[key];
      if (typeof value === "string") result.push(value);
      else if (typeof value === "object" && !Array.isArray(value))
        findStrings(value);
    }
  }

  findStrings(obj);
  return result;
}
 */
module.exports = collectStrings;