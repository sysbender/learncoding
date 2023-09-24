''' 
Directory	dir()	Returns a list of names in the local scope, or attributes of the given object.
Help	    help()	Invokes the built-in help system.

'''
import pytest

def test_dir():
    # list local names
    print(dir())

    # list module
    print(dir(pytest))

    # list class
    class Car:
        speed = 100

    print(dir(Car))


# help(object)
def test_help():
    print(  help(print) )


    # import module first
    import math
    print( help(math.pow) )
