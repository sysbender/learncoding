

''' 
Characters	chr()	    Returns the character equivalent of the Unicode integer.
Strings	    ord()	Returns a Unicode integer for a string.

int rang 0~ 1M

Strings	    ascii()	Return printable characters of an object with escaping.
Strings	    ord()	Returns a Unicode integer for a string.
Strings	    repr()	Returns object as a printable string
Strings	    str()	Returns the string version of an object.

'''


def test_chr():
    assert chr(97) == 'a'
    assert ord('a') == 97
