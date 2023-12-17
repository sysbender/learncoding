import pytest
# python is compiled then interpreted
# variable lookups happen at runtime, but locations decided at compile time
#
''' 
closure : storing a function with an environment
* a mapping associating each free variable of the function withe the value/storage location to which the name was bound when the closure was created


'''


# def outer_func():
#     message = 'Hi'

#     def inner_func():
#         # free variable, is not defined in the function but we still have access
#         print(message)

#     return inner_func()  # run inner function


# outer_func()


# def outer_func1(msg):
#     message = msg

#     def inner_func1():
#         # free variable, is not defined in the function but we still have access
#         print(message)

#     return inner_func1  # run inner function


# hi_func = outer_func1('Hi')
# hello_func = outer_func1('Hello')

# hi_func()
# hi_func()
# hello_func()


x = 'global x'


def level_one():
    return x


def level_two(v):  # x is determined as local variable at compile time
    print(v)
    if v:
        x = 'local x'

    return x


def test_level_one():
    assert level_one() == 'global x'


def test_level_two():
    with pytest.raises(UnboundLocalError) as e:
        level_two(False) == 'global x'

    assert level_two(True) == 'local x'

# =========================================


def level_three():
    z = 'outer z'

    def inner(y):
        return x, y, z

    return inner('y arg')


def test_level_three():
    a, b, c = level_three()
    assert a == 'global x'
    assert b == 'y arg'
    assert c == 'outer z'


# ==============================================
def level_four():
    z = 'first outer z'

    def inner(y):
        return x, y, z

    z = "second outer z"
    # the inner func is called after the z is assigned the second time
    return inner('y arg')


def test_level_four():
    a, b, c = level_four()
    assert a == 'global x'
    assert b == 'y arg'
    assert c == 'second outer z'
