function reformatDate(date) {
  const MONTHS = {
    Jan: "01",
    Feb: "02",
    Mar: "03",
    Apr: "04",
    May: "05",
    Jun: "06",
    Jul: "07",
    Aug: "08",
    Sep: "09",
    Oct: "10",
    Nov: "11",
    Dec: "12",
  };
  let [day, month, year] = date.split(" ");
  day = prefixZero(parseDay(day));

  return `${year}-${MONTHS[month]}-${day}`;
}

function parseDay(day) {
  let i = 0;
  let num = "";

  while (i < day.length && isNum(day[i])) {
    num += day[i];
    i++;
  }

  return num;
}

function prefixZero(str) {
  const num = Number(str);
  return num > 9 ? String(num) : "0" + num;
}

function isNum(ch) {
  const code = ch.charCodeAt(0);
  return code >= 48 && code <= 57;
}
