function TrieNode() {
  this.children = {};
  this.endOfWord = false;
}

var WordDictionary = function () {
  this.root = new TrieNode();
};

/**
 * @param {string} word
 * @return {void}
 */
WordDictionary.prototype.addWord = function (word) {
  let curr = this.root;

  for (const ch of word) {
    if (!(ch in curr.children)) curr.children[ch] = new TrieNode();
    curr = curr.children[ch];
  }

  curr.endOfWord = true;
};

/**
 * @param {string} word
 * @return {boolean}
 */
WordDictionary.prototype.search = function (word) {
  function dfs(j, root) {
    let curr = root;

    for (let i = j; i < word.length; i++) {
      const ch = word[i];
      if (ch === ".") {
        for (const child of Object.values(curr.children)) {
          if (dfs(i + 1, child)) return true;
        }
        return false;
      } else {
        if (!(ch in curr.children)) return false;
        curr = curr.children[ch];
      }
    }

    return curr.endOfWord;
  }
  return dfs(0, this.root);
};

/**
 * Your WordDictionary object will be instantiated and called as such:
 * var obj = new WordDictionary()
 * obj.addWord(word)
 * var param_2 = obj.search(word)
 */
