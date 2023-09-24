import pytest

'''
Category	Function	Description
Attributes	getattr()	Returns the value of the named attribute.
Attributes	hasattr()	Returns True if the object has a specified attribute.
Attributes	setattr()	Set's an attribute for a object.
Binary	    bin()	    Return a binary string for an integer.
Boolean	    bool()	    Returns False if omitted or False values, otherwise True.
Bytes	    bytes()	    Returns a new bytes type of object.
Characters	chr()	    Returns the character equivalent of the Unicode integer.
Classes	    isinstance()	Returns True if argument is an instance of a class.
Classes	    issubclass()	Returns True if argument is an instance of a subclass
Classes	    property()	Returns the property attribute for a class.
Classes	    staticmethod()	Returns a static method for a function.
Classes	    super()	To inherit methods from parent classes.
Code	    eval()	Returns the result of an evaluated statement.
Code	    exec()	For dynamic execution of code.
Compiling	compile()	Compiles source into code.
Containers	frozenset()	Returns a new frozenset object type.
Dictionary	dict()	Create a new dictionary object.
Directory	dir()	Returns a list of names in the local scope, or attributes of the given object.
Files	    open()	Open a file and create a file object.
Formatting	format()	Returns input as formatted by a custom specification.
Functions	classmethod()	Returns a class method for the supplied function.
Functions	filter()	Construct an interator of values that return True
Help	    help()	Invokes the built-in help system.
Interactivity	input()	Reads a line from input as a string.
Iterables	map()	Applies a function to each item of an iterable.
Iterators	next()	Returns the next item from an iterator.
Iterators	zip()	Creates an iterator of tuples.
Lists	    list()	Create a mutable list object.
Lists	    sorted()	Return a sorted list object from an iterable object.
Logic	    all()	Returns True when all values are true.
Logic	    any()	Returns True when any value is true.
Logic	    callable()	Returns True if object is callable, otherwise False.
Loops	    iter()	To iterate over an object like a set or tuple.
Math	    abs()	Absolute value of integer, float or complex number
Math	    divmod()	Returns the quotient and remainder for integers and floats.
Math	    pow()	Returns the exponent.
Math	    sum()	Returns the sum of an iterable object.
Modules	    __import__()	An internal Python function invoked during imports.
Numbers	    complex()	Returns a complex number from string or number.
Numbers	    float()	Returns a floating point number.
Numbers	    hex()	Converts an integer to a lowercase hexadecimal string.
Numbers	    int() 	Returns an integer object constructed from a number or string.
Numbers	    oct()	Converts an integer into an octal string.
Numbers	    round()	Returns a number rounded to specified precision.
Objects	    delattr()	Deletes an attribute from an object.
Objects	    enumerate()	Returns an enumerate object.
Objects	    id()	Returns the unique id of an object.
Objects	    len()	Returns the length or number of items in an object.
Objects	    memoryview()	Returns a memory view object from an argument.
Objects	    object()	Returns a featureless object.
Objects	    type()	Returns the type of object.
Objects	    vars()	Returns the __dict__ attribute for objects that have them.
Printing	print()	Prints objects as text strings to the screen or standard output.
Sequences	bytearray()	Return an array of bytes.
Sequences	range()	To create an immutable sequence type.
Sequences	reversed()	Returns a reverse interator.
Sequences	tuple()	Create an immutable sequence type.
Sets	    set()	Create a set object type.
Slice	    slice()	Returns a slice object from another object.
Sorting	    max()	Returns the largest item from among iterables or arguments.
Sorting	    min()	Returns the smallest item from among iterables of arguments.
Strings	    ascii()	Return printable characters of an object with escaping.
Strings	    ord()	Returns a Unicode integer for a string.
Strings	    repr()	Returns object as a printable string
Strings	    str()	Returns the string version of an object.
System	    globals()	Returns a dictionary of names, methods and classes globally.
System	    hash()	Returns hash integer keys for an object.
System	    locals()	Returns a dictionary of names, methods and classes locally.

'''


class Jeep:
    hp = 300
    model = 'Wrangler'


def test_getattr():
    # getattr( object, name, [default])-> value | AttributeError

    #

    print(getattr(Jeep, 'hpp', 'NNN'))
    with pytest.raises(AttributeError) as e:
        r = getattr(Jeep, 'hpp')

    print(str(e.value))


def test_hasattr():
    # has attr
    # hasattr(object, name) -> bool
    assert hasattr(Jeep, 'hp') == True
    assert hasattr(Jeep, 'hpp') == False


def test_setattr():
    # setattr(object, name, value)->None
    setattr(Jeep, 'hp', 444)
    assert getattr(Jeep, 'hp') == 444
