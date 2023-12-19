
## constructor function
link to prototype object

don't create function/method in constructor function(will duplicated appear in each instance), 
should use prototype


### new keyword
1. a new empty object {} is created
2. function is called with this is assigned to the new create empty {} object
3. the newly created object {} linked to a prototype  (__proto__)
4. the function automatically return the newly created object



## ES6 classes
syntactic sugar - class is still function

* classes are not hoisted
* first class citizens
* classes are executed in strict mode


class declaration
```javascript
class Person{

}
```
class expression
```javascript
const Person = class {}
```


### getter setter

after defining setter/getter,
a new property will be added to prototype

### static method

* on construction function - without prototype
* on class - with static keyword 

### Object.create()
not used very often, 
but it's the base for inheritance




## Object.create()

linking an object to a prototype object




    ## this
    ## new
    ## prototype

## java
## inheritance

## private vs public
## 4 principles of OOP

