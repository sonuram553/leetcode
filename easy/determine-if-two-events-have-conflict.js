function haveConflict(event1, event2) {
  if (event2[0] <= event1[1] && event2[0] >= event1[0]) return true;
  if (event2[1] >= event1[0] && event2[1] <= event1[1]) return true;
  if (event2[0] <= event1[0] && event2[1] >= event1[1]) return true;
  return false;
}
