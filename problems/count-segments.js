// Number of Segments in a String

function countSegments(str) {
  if (!str.length) return 0;

  // Spaces in the beginning
  let i = 0;
  while (str[i] === " " && i < str.length) i++;
  if (i === str.length) return 0;

  let count = 1;

  for (; i < str.length; i++) {
    if (str[i] === " ") {
      while (str[i] === " ") i++;

      if (i < str.length) count++;
    }
  }

  return count;
}
