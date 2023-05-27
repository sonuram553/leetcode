function jsonStringify(object) {
  if (object === null) return String(null);
  if (typeof object === "string") return `"${object}"`;

  if (Array.isArray(object)) {
    const mapped = object.map((item) => jsonStringify(item));
    return `[${mapped.join()}]`;
  }

  if (typeof object === "object") {
    const keys = Object.keys(object);
    const mapped = keys.map((key) => `"${key}":${jsonStringify(object[key])}`);
    return `{${mapped.join()}}`;
  }

  return String(object);
}
