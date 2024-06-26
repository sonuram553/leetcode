from collections import deque


class Solution:
    def ladderLength(self, beginWord: str, endWord: str, wordList: List[str]) -> int:
        if endWord not in wordList:
            return 0

        def is_single_char_different(str1, str2):
            # Check if the lengths of the strings are equal
            if len(str1) != len(str2):
                return False

            # Count the number of differing characters
            diff_count = sum(c1 != c2 for c1, c2 in zip(str1, str2))

            # Return True if there is exactly one differing character
            return diff_count == 1

        q = deque()
        q.append([beginWord, 0])  # [word, moves]
        visited = set()
        visited.add(beginWord)

        # BFS
        while q:
            currWord, moves = q.popleft()

            for word in wordList:
                if word not in visited and is_single_char_different(currWord, word):
                    if word == endWord:
                        return moves + 2

                    visited.add(word)
                    q.append([word, moves + 1])

        return 0


print()
