class Solution:
    def minEatingSpeed(self, piles: List[int], h: int) -> int:
        s = 1
        e = max(piles)

        while s <= e:
            mid = (s + e) // 2
            
            hours = 0
            for i in range(len(piles)):
                hours += math.ceil(piles[i] / mid)

            if hours > h: s = mid + 1
            else: e = mid - 1

        return s