var longestCommonPrefix = function (strs) {
  let prefix = "";
  let index = 0;

  while (true) {
    let char = "";

    for (const str of strs) {
      if (index === str.length) return prefix;
      if (!char) char = str[index];
      else if (char !== str[index]) return prefix;
    }

    prefix += char;
    index += 1;
  }
};

const arr = ["jk","jkl"];
console.log(longestCommonPrefix(arr));
