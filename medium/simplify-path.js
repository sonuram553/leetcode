function simplifyPath(path) {
  let curr = "";
  const stack = [];

  for (const ch of path + "/") {
    if (ch === "/") {
      if (curr === "..") stack.length && stack.pop();
      else if (curr && curr !== ".") stack.push(curr);
      curr = "";
    } else curr += ch;
  }

  return "/" + stack.join("/");
}
