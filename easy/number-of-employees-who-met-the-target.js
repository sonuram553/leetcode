function numberOfEmployeesWhoMetTarget(hours, target) {
  return hours.reduce((count, num) => (num >= target ? count + 1 : count), 0);
}
