''' 
Loops	    iter()	To iterate over an object like a set or tuple.

Functions	filter()	Construct an interator of values that return True
Iterables	map()	Applies a function to each item of an iterable.
Iterators	next()	Returns the next item from an iterator.
Iterators	zip()	Creates an iterator of tuples.

Slice	    slice()	Returns a slice object from another object.
Sorting	    max()	Returns the largest item from among iterables or arguments.
Sorting	    min()	Returns the smallest item from among iterables of arguments.
'''
import pytest
# iter(object, sentinel ) -> iterator object  : 
# 1. without sentinel - first argument object must support __iter__ (iteration protocol) or __getitem (sequence protocol)
# 2. with sentinel is provided, the first argument is a callable 


def test_iter_iterable():
    it = iter("hey")
    assert next(it) =='h'
 


count = 0 
def f():
    global count
    count += 1 
    return count

def test_iter_callable():
    it = iter(f, 2)
    assert next(it) ==1
    with pytest.raises(StopIteration) as e:
        next(it)

def test_iter_readfile():
    line_count = 0
    
    with open( __file__ ) as fp:
        for line in iter(fp.readline, '' ):
            line_count += 1 

    print(f' line_count = {line_count}')



# filter(function, iterable)=========================


# if func is None, will filter the falsy value
def test_filter_none():
    ages =[1, 0, 3]
    assert list(filter(None, ages)) == [1,3]

def test_filter():
    ages =[30, 12, 70, 3]
    def is_adult(age):
        return age>=18


    assert list (filter(is_adult, ages)) == [30, 70]
    print(list(filter(is_adult, ages)))

def test_filter_lambda():
    ages =[30, 12, 70, 3]  
    assert list (filter( lambda x: x>=18 , ages)) == [30, 70]
 

# map(function, iterable, ...) ============================= when multiple iterable , stop when the shortest is exhausted

def test_map_one_iterable():
    nums = [1,2,3]
    def double(n ):
        return n*2

    assert list(map(double, nums)) == [2,4,6]

def test_map_two_iterable():
    nums1 = [1,2,3]
    nums2 = [100,200,300, 400,500]
    def add(a, b):
        return a+b
    assert list(map(add, nums1, nums2)) ==[101, 202, 303]

# zip( iterables, ...)
def test_zip_two_iterable():
    nums =[1,2,3]
    lows = ['a', 'b', 'c']
    ups = ['A', 'B', 'C']
    assert list(zip(nums, lows)) == [(1,'a') , (2,'b'), (3,'c')]
    assert set(zip(nums, lows)) == set([(1,'a') , (2,'b'), (3,'c')])
    assert dict(zip(nums, lows)) == {1:'a' , 2:'b' ,  3:'c'}


def test_zip_three_iterable():
    nums =[1,2,3]
    lows = ['a', 'b', 'c']
    ups = ['A', 'B', 'C']
    assert list(zip(nums, lows, ups)) == [(1,'a', 'A') , (2,'b', 'B'), (3,'c', 'C')]
    assert set(zip(nums, lows, ups)) == set([(1,'a', 'A') , (2,'b', 'B'), (3,'c', 'C')])
    # dict only need two element

    for num, low, up in zip(nums, lows, ups):
        print( num, low, up)

    # next(iterator, default) - call __next__(),  when exhausted, return default or StopIteration  is raised

def test_next():
    nums  = [1,2]
    it = iter(nums)
    assert next(it) == 1
    assert next(it) == 2
    with pytest.raises(StopIteration) as e:
        next(it)

    assert next(it, 999) == 999


