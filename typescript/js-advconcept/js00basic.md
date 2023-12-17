
## ECMA 

babel 

## 7 types

  1. number
  2. string
  3. boolean
  4. object
  5. undefined
  6. null
  7. symboccc


## terms

* function declaration
* function expression
* 


## scope

* window is the roor scope
* function scope :  var let const
* block scope  : let const


## ES5 & ES6

let and const
desctructing
 
object dynamic attribute name
```javascript
let name ='hello'
const ob = {
    [name]: 'world',
    [1+2]: 'age'
    []
}

```

### closure

```javascript 
function outer() {
  let num = Math.random();
  console.log("print in outer", num);
  function inner() {
    console.log("print in inner", num);
  }
  return inner;
}

let in1 = outer();
// let in2 = outer();
in1();
// in2();
in1();


```

### curring



### compose

```javascript
// take two function as parameter,
const doub = (a) => a * 2;
const inc = (a) => ++a;

const compose = (f1, f2) => (a) => f1(f2(a));

const doubInc = compose(doub, inc);
console.log(doubInc(6)); //14 , inc first , then double 
```