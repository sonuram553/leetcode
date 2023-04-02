function countMatches(items, ruleKey, ruleValue) {
  return items.reduce((count, item) => {
    if (
      (ruleKey === "type" && item[0] === ruleValue) ||
      (ruleKey === "color" && item[1] === ruleValue) ||
      (ruleKey === "name" && item[2] === ruleValue)
    )
      return count + 1;

    return count;
  }, 0);
}
