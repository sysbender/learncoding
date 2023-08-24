

'''
key/value pair
associative array , (hashmap in java)
dicts are unordered
'''

d1 = {'a':1, 'b':2, 'c':3}
d2 = dict( [('a',1), ('b',2), ('c',3)] ) # iterable of tuple pair
d3 = dict( a=1,b=2,c=3)  # kargs

print(d1, d2, d3)

#add or update
d1['d'] =44
del d1['d']
len(d1)
d1.clear()
del(d1)

# access
d1.keys()
d1.values()
d1.items()


# check key
'a' in d1
'a' in d1.keys()
# check values
1 in d1.values()


# iterate
for k in d1:
    print(k, d1[k])

for k,v in d1.items():
    print(k,v)