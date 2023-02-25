function daysBetweenDates(date1, date2) {
  const ms = Math.abs(new Date(date1) - new Date(date2));
  const secs = ms / 1000;
  const mins = secs / 60;
  const hours = mins / 60;

  return hours / 24; // days
}
