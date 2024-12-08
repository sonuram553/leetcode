/**
 * @param {string[]} emails
 * @return {number}
 */
var numUniqueEmails = function (emails) {
  const set = new Set();

  for (let i = 0; i < emails.length; i++) {
    const email = emails[i];
    const [localName, domainName] = email.split("@");

    let ln = "";

    for (const ch of localName) {
      if (ch === "+") break;
      if (ch !== ".") ln += ch;
    }

    set.add(`${ln}@${domainName}`);
  }

  return set.size;
};
