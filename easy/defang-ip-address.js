function defangIPaddr(address) {
  let ip = "";

  for (const ch of address) {
    if (ch === ".") ip += "[.]";
    else ip += ch;
  }

  return ip;
}
