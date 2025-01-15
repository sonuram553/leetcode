/**
 * @param {number[]} asteroids
 * @return {number[]}
 */
var asteroidCollision = function (asteroids) {
  const stack = [];

  asteroids.forEach((ast) => {
    while (stack.length && ast < 0 && stack[stack.length - 1] > 0) {
      const diff = ast + stack[stack.length - 1];

      if (diff < 0) stack.pop();
      else if (diff > 0) ast = 0;
      else {
        ast = 0;
        stack.pop();
      }
    }

    if (ast) stack.push(ast);
  });

  return stack;
};
