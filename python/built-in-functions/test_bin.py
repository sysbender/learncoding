
# Binary	    bin()	    Return a binary string for an integer.

import pytest


def test_bin():
    # int
    assert bin(4) == '0b100'
    assert bin(4) == format(4, '#b')
