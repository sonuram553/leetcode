// Counts number of one bits
function bitOneCount(num) {
  let count = 0;

  while (num) {
    if (num % 2 === 1) count++;
    num = Math.floor(num / 2);
  }

  return count;
}

function combinations(bits, type) {
  const result = [];
  let maxValue = 11;

  if (type === "mm") maxValue = 59;

  for (let i = 0; i <= maxValue; i++) {
    if (bitOneCount(i) <= bits) {
      result.push(i);
    }
  }

  return result;
}

function formattedTime(hour, minute) {
  let value = `${hour}:`;
  if (minute < 10) value += `0${minute}`;
  else value += minute.toString();
  return value;
}

function readBinaryWatch(turnedOn) {
  if (turnedOn >= 9) return [];

  const result = [];
  const hh = combinations(turnedOn);
  const mm = combinations(turnedOn, "mm");

  for (let i = 0; i < hh.length; i++) {
    for (let j = 0; j < mm.length; j++) {
      if (bitOneCount(hh[i]) + bitOneCount(mm[j]) === turnedOn)
        result.push(formattedTime(hh[i], mm[j]));
    }
  }

  return result;
}
