class Solution:
    def subsets(self, nums: List[int]) -> List[List[int]]:
        res = []
        subset = []

        def dfs(i):
            if i >= len(nums):
                res.append(subset.copy())
                return

            # include num at i
            subset.append(nums[i])
            dfs(i + 1)

            # don't include num at i
            subset.pop()
            dfs(i + 1)
            
        dfs(0)
        return res