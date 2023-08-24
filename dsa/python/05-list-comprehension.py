
# new list = [ transform sequence [filter] ]

import random

x1 = [ x for x in range(10)]

squares = [ x**2 for x in x1]

odd = [ x for x in range(10) if x%2 ==1]

print(x1, squares, odd)

s= 'i love 2 to t10 the store 7 time a w3ek.'
numbers = [ x for x in s if x.isnumeric()]
print(''.join( numbers))


letters = [ x for x in "ABCDEF"]
random.shuffle(letters)
letters1 = [ a for a in letters if a !='C']
print(letters)




