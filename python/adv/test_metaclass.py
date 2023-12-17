

# https://www.youtube.com/watch?v=NAQEj-c2CI8

def test_class_type():
    class Shape:
        pass

    assert type(Shape) == type


# type(name, bases, dict)
def test_class_create_from_type():
    # this is how class is created instead of declared
    Shape = type('Shape', (), {'x': 1})
    assert type(Shape) == type

    s = Shape()
    s.y = 2

    assert s.x == 1
    assert s.y == 2

    def hello(self):
        return "hello!"
    Circle = type('Circle', (Shape, ), {'hello': hello})
    c = Circle()
    assert c.x == 1
    assert c.hello() == 'hello!'


class MyMeta(type):
    def __new__(self, clas_name: str, bases: tuple, attrs: dict[str, str]):
        # print(attrs)

        result_attrs = {}
        for key, value in attrs.items():
            if key.startswith('__'):
                result_attrs[key] = value
            else:
                result_attrs[key.upper()] = value

        return type(clas_name, bases, result_attrs)


class Dog(metaclass=MyMeta):  # default metaclass for every class is type, we change to our own type class
    x = 5
    y = 8

    def hello(self):
        print("hi")


def test_mymeta():
    d = Dog()
    d.HELLO()
