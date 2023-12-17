
# https://stackoverflow.com/questions/2776829/difference-between-pythons-generators-and-iterators

import pytest
import collections
import types


def test_range():
    r = range(1, 11)
    print(type(r))


def test_map():
    x = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
    y = map(lambda i: i**2, x)


'''
iterator - any object has a __next__ and __iter__ method 
iteratable - any object has an __iter__ method to return an iterator


__iter__ is call when using an object with for loop
__next__ is called on the iterator object to get each item
StopIteration is raised when iterator is exhausted

'''


def test_types():
    # a generator is an iterator

    assert issubclass(types.GeneratorType, collections.abc.Iterator) == True

    # iterator is subclass of iterable
    assert issubclass(collections.abc.Iterator,
                      collections.abc.Iterable) == True

    # iterables : tuple, list, dict, sets, frozen sets, string, bytes, bytearray, range, memoryview
    assert all(
        isinstance(element, collections.abc.Iterable) for element in (
            (), [], {}, set(), frozenset(), '', b'', bytearray(), range(0), memoryview(b'')
        )
    ) == True


# examples

# generator function
def squares(start, stop):
    for i in range(start, stop):
        yield i * i


# genexp (generator expression)
generator = (i*i for i in range(a, b))


# custom iterator
class Squares(object):
    def __init__(self, start, stop):
        self.start = start
        self.stop = stop

    def __iter__(self):
        return self

    def __next__(self):
        if self.start >= self.stop:
            raise StopIteration
        current = self.start * self.start
        self.start += 1
        return current


iterator = Squares(a, b)
