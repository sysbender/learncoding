''' 
Lists	    sorted()	Return a sorted list object from an iterable object.

Sequences	bytearray()	Return an array of bytes.
Sequences	range()	To create an immutable sequence type.
Sequences	reversed()	Returns a reverse interator.
Sequences	tuple()	Create an immutable sequence type.
Sets	    set()	Create a set object type.
Slice	    slice()	Returns a slice object from another object.


'''
# sorted( iterable, key=None, reverse=False)

def test_sorted():
    assert sorted( [0, 2, -1]) == [-1 , 0, 2]
    assert sorted( [0,2,-1] , key=abs )  == [0, -1, 2]

    assert sorted( ['B', 'a', 'C']) == ['B', 'C', 'a']
    assert sorted( ['B', 'a', 'C'], key=str.lower) == [ 'a', 'B', 'C']

    assert sorted( [0, 2, -1], reverse=True) == [ 2, 0, -1]



# slice return slice object, ( don't confuse with slice notation)
# slice(stop)
# slice(start, stop, step)

def test_slices():
    nums = [1,2,3,4,5]
    # slice notation
    assert nums[:2] == [1,2]

    slice_obj = slice(2)
    assert nums[slice_obj] == [1,2]

    assert nums[:2] == nums[slice_obj]


    # 
    slice_odds = slice(0, None, 2)
    assert nums[slice_odds] == [1,3,5]

    # 
    slice_backward = slice(None, None, -1) # [::-1]
    assert nums[slice_backward] == [5,4,3,2,1]

    # 
    assert nums[1:3:2] == nums[slice(1,3,2)]

