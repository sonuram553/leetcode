export function strongPasswordCheckerII(password) {
  if (password.length < 8) return false;

  const SPECIAL_CHARS = "!@#$%^&*()-+";
  const counts = {
    upperCase: 0,
    lowerCase: 0,
    digit: 0,
    specialChar: 0,
  };

  for (const ch of password) {
    if (isLowerCase(ch)) counts.lowerCase++;
    else if (isUpperCase(ch)) counts.upperCase++;
    else if (isDigit(ch)) counts.digit++;
    else if (SPECIAL_CHARS.includes(ch)) counts.specialChar++;
  }

  for (const key in counts) {
    if (counts[key] === 0) return false;
  }

  let i = 1;
  while (i < password.length) {
    if (password[i] === password[i - 1]) return false;
    i++;
  }

  return true;
}

function isLowerCase(ch) {
  const code = ch.charCodeAt(0);
  return code >= 97 && code <= 122;
}

function isUpperCase(ch) {
  const code = ch.charCodeAt(0);
  return code >= 65 && code <= 90;
}

function isDigit(ch) {
  const code = ch.charCodeAt(0);
  return code >= 48 && code <= 57;
}
