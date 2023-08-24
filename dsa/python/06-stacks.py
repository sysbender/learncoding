

'''
LIFO - Last In First Out
all operations happens in the top
- push
- pop
- peek - see the top without removing it
- clear - remove all


'''

# create stack with list
'''
push - append
pop - pop
'''

class Stack():
    def __init__(self) -> None:
        self.stack = list()

    def push(self, item):
        self.stack.append(item)

    def pop(self):
        if len(self.stack)>0:
            return self.stack.pop()
        else:
            return None
        
    def peek(self):
        if len(self.stack)>0:
            return self.stack[-1]
        else:
            return None
    def __str__(self) -> str:
        return str(self.stack)



s = Stack()
s.push(1)
s.push(2)
s.push(3)
print(s.pop())
print(s.pop())
print(s.pop())
print(s.pop())
print(s)