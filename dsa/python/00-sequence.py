from pprint import pprint 

'''

sequence : string , list, tuple

*  indexing 

'''

# indexing

xs : str = 'frog'


xl: list = [1,2,3]

xt: tuple = ('a', 'b', 'c')

assert xs[1] =='r'
assert xl[1] == 2
assert xt[1] =='b'
# slicing [start: end+1: step]

x4 = 'computer'
print(x4[-3:])

# adding / concatenating - "+"  for 
# multiplying - "*"
string1 = 'ab' +'c'
list1 = ['a','b'] + ['c']
tuple1 = ('a','b') + ('c',)  # comma

# checking membership - in

# iterating 
for x in (1,2,3):
    pass
for x in enumerate( (1,2,3)):
    pass
# number of items - len
# minimum/maximum - min/max
# sum of numeric - sum
# sorting , not in place - sorted

# sorting by 
tuple9 = ('mike', 'john', 'mary')
print(sorted(tuple9, key=lambda k:k[2]))

# count the time of apperance - count
print('hello'.count('l'))

# return the index of the first occurence of an item - index
print( 'hello'.index('l'))

# unpacking
a ,b,c ='123'
pprint(a)
