function interpret(command) {
  let i = 0;
  let str = "";

  while (i < command.length) {
    const ch = command[i];

    if (ch === "G") {
      str += "G";
      i++;
    } else if (command[i + 1] === ")") {
      str += "o";
      i += 2;
    } else {
      str += "al";
      i += 4;
    }
  }

  return str;
}
