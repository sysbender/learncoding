

# https://www.youtube.com/watch?v=Qu3dThVy6KQ

import itertools


# count( start, step)
def test_count():
    counter = itertools.count()
    assert next(counter) == 0
    assert next(counter) == 1


def test_count_zip():
    counter = itertools.count()
    chars = ['a', 'b', 'c']
    result = list(zip(counter, chars))
    assert result[0] == (0, 'a')
