# Bytes	    bytes()	    Returns a new bytes type of object.
# https://realpython.com/python-strings/#bytes-objects

import pytest

# Only ASCII characters are allowed in a bytes literal.
# Any character value greater than 127 must be specified using an appropriate escape sequence:


'''
class bytes()
bytes(iterable_of_ints) -> bytes
bytes(string, encoding[, errors]) -> bytes
bytes(bytes_or_buffer) -> immutable copy of bytes_or_buffer
bytes(int) -> bytes object of size given by the parameter initialized with null bytes
bytes() -> empty bytes object

'''


def test_bytes_literal():
    # literal with b prefix
    b = b'foo bar'
    assert type(b) is bytes
    b = b'foo\xddbar'
    assert b[3] == int(0xdd)

    b = b'foo\\xddbar'
    assert b[3] == ord('\\')


def test_bytes_constructor():
    # empty
    b = bytes()
    assert b == b''

    # str.encode
    b = bytes('foo.bar', 'utf-8')  # UTF-8, UTF8
    assert b == b'foo.bar'

    # init with null (0x00)
    b = bytes(4)
    assert b == b'\x00\x00\x00\x00'

    # with iterable of integer 0~255
    b = bytes([100, 102, 104])
    assert b == b'dfh'


def test_bytes_hexdecimal():
    # fromhex is a class method
    b = bytes.fromhex(' 00 ff')  # pair of hex, spaces are ignored
    assert b[0] == 0
    assert b[1] == 255
    # object method hex() -> hexdecimal string
    assert b.hex() == '00ff'


'''
# bytearray vs bytes 
0. no syntax for literal bytearray like the b prefix for bytes
1. bytearray is mutable , bytes is imutable


'''


def test_bytearray_from_bytes():
    ba = bytearray(b'foo.bar')


def test_bytearray_constructor():
    ba = bytearray('foo.bar', 'utf-8')
    assert ba[3] == ord('.')

    ba = bytearray(4)
    assert ba[3] == 0x00

    ba = bytearray([100, 102, 104])
    assert ba[0] == ord('d')


def test_bytearray_mutable():
    ba = bytearray(4)
    ba[3] = 255
    assert ba[3] == 0xff
    ba = bytearray([1, 2, 3])
    ba.append(4)
    print(ba)
