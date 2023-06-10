function numUniqueEmails(emails) {
  const set = new Set();

  for (const email of emails) {
    let [localName, domainName] = email.split("@");
    localName = parseLocalName(localName);
    set.add(`${localName}@${domainName}`);
  }

  return set.size;
}

function parseLocalName(localName) {
  let i = 0;

  while (i < localName.length) {
    if (localName[i] === "+") break;
    i++;
  }

  localName = localName.slice(0, i);
  return localName.split(".").join("");
}
