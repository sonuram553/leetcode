function dayOfYear(date) {
  const [year, month, day] = date.split("-");
  const months = [
    31,
    28 + (isLeapYear(parseInt(year)) ? 1 : 0),
    31,
    30,
    31,
    30,
    31,
    31,
    30,
    31,
    30,
    31,
  ];

  let dayCount = 0;
  for (let i = 0; i < parseInt(month) - 1; i++) dayCount += months[i];

  return dayCount + parseInt(day);
}

function isLeapYear(year) {
  if (year % 400 === 0) return true;
  if (year % 100 === 0) return false;
  if (year % 4 === 0) return true;
  return false;
}
