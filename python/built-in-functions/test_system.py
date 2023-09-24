
import pytest

'''
System	    globals()	Returns a dictionary of names, methods and classes globally.
System	    hash()	Returns hash integer keys for an object.
System	    locals()	Returns a dictionary of names, methods and classes locally.

Modules	    __import__()	An internal Python function invoked during imports.


'''

# return current local symbol table as dict
# in module level locals() = globals()
# free variables are returned by locals() in function blocks, but not in class blocks
def test_locals():
    before = len( globals())  # first local : before
    name ='foo' # the second local : name
    assert len(locals()) == 2
    assert len(globals()) == before    # global did not change
    
    #assert  (locals() is globals()) == True
    pass


# __import__(name, globals = None, locals=None, fromlist=None, level=0)
# use importlib.import_module() instead
def test_import():
    pass


# immutable = bool, int, float, tuple, str, fronzenset
# mutable = list, set, dict

class AlwaysEqual(object):
    def __eq__(self, other):
        if isinstance(other, AlwaysEqual):
            return True
        return False

class AlwaysEqualHashable(AlwaysEqual):
    def __hash__(self):
        return id(self)


def is_hashable(obj):
    hashable = False
    try:
        hash(obj)
        hashable = True
    except TypeError:
        pass

    return hashable

def test_hash():
     
    AE1 = AlwaysEqualHashable()
    AE2 = AlwaysEqualHashable()

    assert AE1 == AE2
    assert hash(AE1) != hash(AE2)

    assert is_hashable(5) == True
