/**
 * @param {number[]} asteroids
 * @return {number[]}
 */
var asteroidCollision = function (asteroids) {
  const stack = [asteroids[0]];

  for (let i = 1; i < asteroids.length; i++) {
    if (isColliding(peek(stack), asteroids[i])) {
      const asteroid = Math.abs(asteroids[i]);
      while (stack.length) {
        if (!isColliding(peek(stack), asteroids[i])) {
          stack.push(asteroids[i]);
          break;
        }

        const topVal = Math.abs(peek(stack));
        if (topVal === asteroid) {
          // Destroy both
          stack.pop();
          break;
        } else if (topVal < asteroid) {
          const size = stack.length;
          stack.pop();

          if (size === 1) {
            stack.push(asteroids[i]);
            break;
          }
        } else break;
      }
    } else stack.push(asteroids[i]);
  }

  return stack;
};

function peek(stack) {
  return stack[stack.length - 1];
}

function isColliding(val1, val2) {
  return val1 > 0 && val2 < 0;
}
