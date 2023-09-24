import pytest
import collections.abc
''' 
Objects	    delattr()	Deletes an attribute from an object.
Objects	    enumerate()	Returns an enumerate object.
Objects	    id()	Returns the unique id of an object.
Objects	    len()	Returns the length or number of items in an object.
Objects	    memoryview()	Returns a memory view object from an argument.
Objects	    object()	Returns a featureless object.
Objects	    type()	Returns the type of object.
Objects	    vars()	Returns the __dict__ attribute for objects that have them.

'''


person = {
    'name': 'john',
    'age': 30
}


class Person:
    def __init__(self, name, age):
        self.name = name
        self.age = age

# delattr(object, name)


def test_delattr_dict():
    with pytest.raises(AttributeError) as e:
        delattr(person, 'name')

    print(str(e.value))


def print_attr(object):
    for attr, value in object.__dict__.items():
        if not attr.startswith('__'):
            print(attr, '=', value)


def test_delattr_object():
    p = Person('john', 30)
    assert p.name == 'john'
    delattr(p, 'name')

    assert hasattr(p, 'name') == False

    print_attr(p)


# enumerate(iterable, start=0)  :

def enumerate1(sequence, start=0):
    n = start
    for elem in sequence:
        yield n, elem
        n += 1


def test_id():
    a= 'foo'
    b = 'foo'
    a = 1234
    b = 1234
    assert id(a) == id(b)  # imutable have same address
    x = [1,2,3]
    y = [1,2,3]
    assert id(x) != id(y)  # mutable objects have different address

def test_len():
    assert len("hello") == 5
    a = iter([1,2,3,4])
    assert issubclass( collections.abc.Iterator , collections.abc.Sized) == False
    

# memory view is the way to expose buffer protocol
# buffer protocol is for accessing the internal byte-oriented data of an object without making a copy

def test_memoryview():
    b = b'hey'
    ba = bytearray(b)

    m = memoryview(ba)
    m.obj
    m.tobytes()
    m.tolist()

    assert m[0:1].tobytes() == b'h' 
    m[0:1] = b'H'   # modify one byte
    assert ba ==  b'Hey'


def test_object():
    o = object()
    # can not add attribute
    with pytest.raises(AttributeError) as e:
        o.name = "Obj"

    print(str(e.value)) # 'object' object has no attribute 'name'


# sentinel object pattern
''' 
Default values for function arguments, for when a value was not given:
Return values from functions when something is not found or unavailable


sentinel = object()

def step():
    inp = input("enter something: ")
    if inp =='stop':
        return sentinel
    return inp

def test_object_sentinel():
    for inp in iter(step, sentinel):
        print('you entered', inp)

'''
# type(object) , type(name, bases, dict)

def test_type_object():
    assert type("") == str
    assert type( type("")) ==type



# dynamically initalize classes or existing classes with attributes
def test_type_object_name_class_dict():
    c = type("Car", (object, ) , { 'brand':'tesla', 'speed': 300} )
    assert c.speed == 300
    assert c.brand == 'tesla'
    assert c.__class__ ==  type
    # Car class 


# var with out argument = like locals() function
def test_vars():
    name = 'foo'
    assert   vars()['name'] == 'foo'

# var with an object argument - return __dict__ attribute for a module, class, instance/object
def test_vars_object():
    class Car:
        speed = 100

    # print( vars(Car))
    # print( Car.__dict__)
    assert vars(Car) == Car.__dict__


