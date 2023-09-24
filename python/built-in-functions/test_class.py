import pytest
from pprint import pprint

'''
Category	Function	Description
Attributes	getattr()	Returns the value of the named attribute.
Attributes	hasattr()	Returns True if the object has a specified attribute.
Attributes	setattr()	Set's an attribute for a object.

Classes	    isinstance()	Returns True if argument is an instance of a class.
Classes	    issubclass()	Returns True if argument is an instance of a subclass
Classes	    property()	Returns the property attribute for a class.
Classes	    staticmethod()	 
Classes	    super()	To inherit methods from parent classes.
Functions	classmethod()	Returns a class method for the supplied function.


'''


class Jeep:
    hp = 300
    model = 'Wrangler'


def test_getattr():
    # getattr( object, name, [default])-> value | AttributeError

    #

    print(getattr(Jeep, 'hpp', 'NNN'))
    with pytest.raises(AttributeError) as e:
        r = getattr(Jeep, 'hpp')

    print(str(e.value))


def test_hasattr():
    # has attr
    # hasattr(object, name) -> bool
    assert hasattr(Jeep, 'hp') == True
    assert hasattr(Jeep, 'hpp') == False


def test_setattr():
    # setattr(object, name, value)->None
    setattr(Jeep, 'hp', 444)
    assert getattr(Jeep, 'hp') == 444


def test_isinstance_against_class():
    assert True == isinstance('hello', str)
    assert False == isinstance('hello', int)


def test_isinstance_against_tuple():
    assert True == isinstance('hello', (str, int, list))


class Car:
    pass


class ElectricCar(Car):
    pass


class Tesla(ElectricCar):
    pass


def test_issubclass():
    assert True == issubclass(Tesla, Car)
    assert False == issubclass(Car, Tesla)
    assert True == issubclass(ElectricCar, (Tesla, int, Car))


''' 
property decorator vs property function
'''

# property function


class C1:
    def __init__(self):
        self._x = None

    def getx(self):
        return self._x

    def setx(self, value):
        self._x = value

    def delx(self):
        del self._x

    x = property(getx, setx, delx, "I'm the 'x' property.")
    print('==============creating c1')


# property decorator
class C2:
    def __init__(self):
        self._x = None

    @property
    def x(self):
        """I'm the 'x' property."""
        return self._x

    @x.setter
    def x(self, value):
        self._x = value

    @x.deleter
    def x(self):
        del self._x


class Dog():
    def __init__(self, name):
        self._name = name

    @property
    def name(self):
        ''' property for dog name'''
        return self._name

    @name.setter
    def name(self, value):
        print('--------- in dog.setter')
        self._name = value

    @name.deleter
    def name(self):
        del self._name


def test_car():
    my_car = Car()
    my_car.name = 'Joey'
    assert my_car.name == 'Joey'
    pprint(C1)


def test_dog():
    d = Dog('puppy')
    assert d.name == 'puppy'
    d.name = 'bar'
    assert d.name == 'bar'


class Cat():
    def __init__(self, name):
        self._name = name

    def getname(self):
        return self._name

    def setname(self, value):
        self._name = value

    def delname(self):
        del self._name

    name = property(getname, setname, delname, 'property for cat name')


def test_cat():
    c = Cat('foo')
    assert c.name == 'foo'
    c.name = 'bar'
    assert c.name == 'bar'

# static method


class Demo1:
    def instance_method1(self):
        return "instance_method1", self

    @classmethod
    def class_method1(cls):
        return 'class_method1', cls

    @staticmethod
    def static_method1():  # no implicit first parameter
        return 'static_method1'


def test_static_method():
    demo1 = Demo1()
    s = demo1.static_method1()
    print(s)

