from pprint import pprint

# create list : empty, literal , from tuple

x1 = list()
x2 = ['a', 'b']
x3 = list( (1,2,3)  )

# list comprehension

b = [ i**2 for i in range(10) if i >4]
print(b)

del b[1]
pprint(b)

# append an item
# extend an list  , same as +
# insert
b.insert(1,99)
pprint(b)

# pop - last item
# remove - the first instance of an item
# reverse - in place operation
# sort - in place  (sorted - return a new list)
x8 = [4, 5, 9, 8]
x8.sort(reverse=True)

pprint(x8)


