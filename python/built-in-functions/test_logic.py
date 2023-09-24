''' 
Logic	    all()	Returns True when all values are true.
Logic	    any()	Returns True when any value is true.
Logic	    callable()	Returns True if object is callable, otherwise False.

'''

import pytest


# callable()  # function, class, method, instance of class
def test_callable():
    assert callable("hello") == False
    assert callable(type("hello")) == True # class is callable

    assert hasattr(bool, '__call__') == True




