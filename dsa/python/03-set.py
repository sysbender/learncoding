'''
# unique/non-duplicate item
fast access vs list
math set ops - union , intersect
sets are unordered
'''

tuple1 = (1,2,3,2,1)
set1 = set(tuple1)
set2 : set = {1,2,3}
print(set1)

'''
add -
remove
in
pop - pop random item
clear

'''

'''
intersection - &
union - |
symmetric difference xor - set1 ^ set2
difference - set1 - set2
subset  - set1 <= set2
superset - set2 >= set1
'''


seta= {1,2,3}
setb= {3,4,5}
print("seta ^ setb" , seta ^ setb)
print("setb ^ seta" , setb ^ seta)

print("seta - setb" , seta - setb)
print("setb - seta" , setb - seta)

print("setb & seta" , setb & seta)
print("setb | seta" , setb | seta)

print("setb <= seta" , setb <= seta)