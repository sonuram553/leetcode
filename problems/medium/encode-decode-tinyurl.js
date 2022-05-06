// Encode and Decode Tiny Url

function reverseArray(arr) {
  const size = arr.length;
  for (let i = 0; i < Math.floor(size / 2); i++) {
    const temp = arr[i];
    arr[i] = arr[size - 1 - i];
    arr[size - 1 - i] = temp;
  }
}

// Map to store 62 possible characters
const map = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
let globalId = 1;
let database = {};

function idToShortUrl(n) {
  const shortUrl = [];

  while (n) {
    shortUrl.push(map[n % 62]);
    n = Math.floor(n / 62);
  }

  reverseArray(shortUrl);
  return shortUrl.join("");
}

function shortUrlToId(shortUrl) {
  let id = 0;

  for (let i = 0; i < shortUrl.length; i++) {
    if (shortUrl[i] >= "a" && shortUrl[i] <= "z") {
      id = id * 62 + (shortUrl[i].charCodeAt(0) - "a".charCodeAt(0));
    }

    if (shortUrl[i] >= "A" && shortUrl[i] <= "Z") {
      id = id * 62 + (shortUrl[i].charCodeAt(0) - "A".charCodeAt(0) + 26);
    }

    if (shortUrl[i] >= "0" && shortUrl[i] <= "9") {
      id = id * 62 + (shortUrl[i].charCodeAt(0) - "0".charCodeAt(0) + 52);
    }
  }

  return id;
}

function encode(longUrl) {
  database[globalId] = {
    longUrl,
  };

  shortUrl = idToShortUrl(globalId);
  globalId += 1;
  return shortUrl;
}

function decode(shortUrl) {
  return database[shortUrlToId(shortUrl)].longUrl;
}

console.log(decode(encode("hello world")));
