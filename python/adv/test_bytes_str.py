

import pytest


# decode - binary to unicode
# encode - unicode to binary

def to_str(bytes_or_str: str | bytes) -> str:
    if isinstance(bytes_or_str, bytes):
        value = bytes_or_str.decode('utf-8')
    else:
        value = bytes_or_str
    return value


def to_bytes(bytes_or_str: str | bytes) -> bytes:
    if isinstance(bytes_or_str, str):
        value = bytes_or_str.encode('utf-8')
    else:
        value = bytes_or_str
    return value


def test_to_str():
    b = b'hello'
    assert isinstance(b, bytes) == True
    s = to_str(b)
    assert isinstance(s, str)


def test_to_bytes():
    s = 'hello'
    assert isinstance(s, str) == True
    b = to_bytes(s)
    assert isinstance(b, bytes) == True


def test_split_ascii():
    text = '字典常用操作 - keys()方法 / values()方法 / items()方法 / setdefault()方法'
    chars = list(text)
    # print(chars)
    for char in chars:
        if len(to_bytes(char)) > 1:
            print('+', char)
        else:
            print('-', char)
