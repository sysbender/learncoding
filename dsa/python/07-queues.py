'''
FIFO - First In First Out

- enqueue
- dequeue

'''

from collections import deque
'''
python Deque

- enqueue : append()
- dequeue : popleft()
'''

q = deque()
q.append(1)
q.append(2)

print(q)
print( q.popleft())
print(q)
