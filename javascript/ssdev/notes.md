
converting to same type before compare 
!=  and ==
!== and == not convert

## var vs let
declare with var in block, we get a global , not respect the scope

## falsy value

false, 0, '' NaN undefined null
```javascript
const v = undefined
```

### shortcuts for if-statements

ternary operation ? :
guard operator &&
```
false && 'hello' // return false , stop early if first statement is false
true && 'hello' // return hello
```
default operator ||

```
false || 'hello' // return hello
true || 'hello'  // return true , stop early if first state is true

const currency = undefined || 'USD'    // set default value
```
### object
add property
delete property
```javascript
product = {
    name:'shirt',
    'delevery-time': '1 day'
    fun: function play(){
        console.log('hello');
    }
}
// convert to json
jsonStr = JSON.stringify(product)
// convert to javascript object
JSON.parse(jsonStr)

//dot notation:
product.name;
// bracket notation
product['delevery-time']
// function in object
product.play();



```
### builtin object
console
Math
JSON = Javascript Object Notation

```javascript
 // must use double quote
 // not support function
 {
    "name":"shirt",
    "delivery-time": "1 day"
 }

```

LocalStorage

### null vs undefined

null - intentionally want something to be empty

### autoboxing

autoboxing works with string, number, boolean
not works with : null , undefined

### object is reference
even object is const, we can still change it's property
can not compare two object directly

### shortcut of object

destructuring - assign the value of property to a varialbe that has the same name with property

```javascript
const obj = { message: 'hello', price=7.99};
const {message, price} = obj    
// const message = obj.message ; price=obj.price

// shorthand
const obj1 = {
    message,    // message: message
    price ,       // price: price
    sayHello() {
        console.log('hello')
    }
}

```
shorthand property - do the opposite (assign the value of variable to the property with same name)

shorthand method - 

## Dom - Document Object Model

* document object model
* document.querySelector()
* .innerHtml
* onkeydown=""
* String() , Number()
* window object



* innerText - without the space
* innerHtml - with the space


click, keydown - event
onclick, onkeydown - event listener

### window object
represent the brower- 
window.document 
window.console
window.alert

## array and loops

Array.
* isArray
* length
* push
* splice(index, number) - remove a value
* array2 = array1.slice() - make a copy of array
* const [first, second] = array1
* 

### advanced function
* assign a function to a value
* pass a function to another function as a parameter

hoisting - call before define a function (not working if we save the function into a variable)
```javascript
const func1 = function(){ console.log("hello");}

```

### arrow function
if only one param, the () are optional
if only one statement, the {} and  return is optional
```javascript

        const oneParamFunc = one => {console.log("This is one param");}
        oneParamFunc();
        const oneStatement = (x) => x*x;
        console.log(oneStatement(5));
```

10:16:00