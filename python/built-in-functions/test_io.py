''' 
Files	    open()	Open a file and create a file object.
Formatting	format()	Returns input as formatted by a custom specification.
Interactivity	input()	Reads a line from input as a string.
Printing	print()	Prints objects as text strings to the screen or standard output.
'''
import pytest

# open(file, mode='r', buffering=-1, encoding=None, errors=None, newline=None, closefd=True, opener=None)
# mode : r , w-trunk, x-exclusive creation, a, b, t, +-updating overwrite, 


# string has a format method: " I am {} years old".format(30)

# format(value, format_spec)   - if format_spec is omitted, act as str(value)
def test_formart():
    # float
    assert format(5, '.2%')  == '500.00%'
    assert format(5, '.2f') ==  '5.00'
    assert format(5, '.2e') == '5.00e+00'


# input( prompt )

# print( *objects, sep=' ', end='\n', file=sys.stdout, flush=False)

