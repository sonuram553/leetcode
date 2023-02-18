function dayOfTheWeek(day, month, year) {
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

  const weekDays = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  year--;

  const fourthCentury = year - (year % 400);
  const numOfYears = year - fourthCentury;
  const leapYears = Math.floor(numOfYears / 4) - Math.floor(numOfYears / 100);
  let oddDays = leapYears * 2 + numOfYears - leapYears;

  for (let i = 0; i < month - 1; i++) oddDays += months[i];

  oddDays += day;

  return weekDays[oddDays % 7];
}

function isLeapYear(year) {
  if (year % 400 === 0 || (year % 4 === 0 && year % 100)) return true;
  return false;
}
