# The isBadVersion API is already defined for you.
# def isBadVersion(version: int) -> bool:

class Solution:
    def firstBadVersion(self, n: int) -> int:
        s = 1
        e = n

        while s <= e:
            mid = (s + e) // 2
            
            if not isBadVersion(mid): s = mid + 1
            else: e = mid - 1
        
        return s