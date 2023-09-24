''' 
Math	    abs()	Absolute value of integer, float or complex number
Math	    divmod()	Returns the quotient and remainder for integers and floats.
Math	    pow()	Returns the exponent.
Math	    sum()	Returns the sum of an iterable object.

Numbers	    complex()	Returns a complex number from string or number.
Numbers	    float()	Returns a floating point number.
Numbers	    hex()	Converts an integer to a lowercase hexadecimal string.
Numbers	    int() 	Returns an integer object constructed from a number or string.
Numbers	    oct()	Converts an integer into an octal string.
Numbers	    round()	Returns a number rounded to specified precision.

'''

def test_divmod():
    x = 7
    y = 3
    assert divmod(7,3)  ==(2,1)    
    assert divmod(x, y)  ==( x//y , x%y )

def test_round():
    assert round(3.14159, 2) == 3.14

    # limitation
    assert round(2.675, 2) == 2.67  # instead of 2.68
    assert round(1.5) == 2
    assert round(2.5) ==2  # instead of 3