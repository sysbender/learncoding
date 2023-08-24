from pprint import pprint

x =()
x = (1,2,3)
x = 1,2,3
x = 1,  # the comma tells python it's a tuple

x += (4,)  # create a new tuple
x = tuple([1,[2],3])

print(id(x))
x[1].append(9)
print(id(x))
pprint(x)

## sets





