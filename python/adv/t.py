from typing import Annotated


def add(a, b):

    return a + b


def fr() -> enumerate:

    fruits = ['apple', 'banana', 'carrot']

    return enumerate(fruits)


def get_full_name(first: Annotated[str, "first name"], last: int | None):
    return first + last


get_full_name()
