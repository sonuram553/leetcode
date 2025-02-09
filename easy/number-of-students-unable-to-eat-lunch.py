class Solution:
    def countStudents(self, students: List[int], sandwiches: List[int]) -> int:
        dq = deque(students)

        j = 0

        while len(dq): 
            unableToEatAtAll = True
            
            for i in range(len(dq)):
                pref = dq.popleft()
                if pref == sandwiches[j]:
                    unableToEatAtAll = False
                    j += 1
                else: dq.append(pref)
            
            if unableToEatAtAll: return len(dq)
        
        return 0