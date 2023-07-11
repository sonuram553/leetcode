function maximumTime(time) {
  const timeArr = time.split("");

  if (time[0] === "?") {
    if (time[1] === "?") {
      timeArr[0] = "2";
      timeArr[1] = "3";
    } else if (Number(time[1]) < 4) timeArr[0] = "2";
    else timeArr[0] = "1";
  } else if (time[1] === "?") {
    if (time[0] === "2") timeArr[1] = "3";
    else timeArr[1] = "9";
  }

  if (time[3] === "?") timeArr[3] = "5";
  if (time[4] === "?") timeArr[4] = "9";

  return timeArr.join("");
}
