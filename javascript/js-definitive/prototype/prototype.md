

reference: https://stackoverflow.com/questions/8093057/javascript-inheritance-and-the-constructor-property/8096017#8096017


深入理解JavaScript——原型 johanazhu  https://zhuanlan.zhihu.com/p/561882773
深入理解 JavaScript 原型 gongyeju  https://mp.weixin.qq.com/s/1UDILezroK5wrcK-Z5bHOg  

https://www.youtube.com/playlist?list=PLqq-6Pq4lTTaflXUL0v3TSm86nodn0c_u
Objects and Prototypes In-depth


## prototype

### constructor function 
new keyword to tell this is a constructor function - create an object , assign this, return


when Javascript create a function , it creates two object:
1. object for the function
2. object for the prototype

```javascript
function Foo(){}
const foo1 = new Foo()
foo1.__proto__ == Foo.prototype              // true
```





### new keyword
1. a new empty object {} is created
2. function is called with this is assigned to the new create empty {} object
3. the newly created object {} linked to a prototype  (__proto__)
4. the function automatically return the newly created object



### prototype detail

access prototype from :
* constructor function : `Person.prototype`
* instance object : `person.__proto__`

check they are the same object : 
* `Person.prototype === person.__proto__`  return true
* `Person.prototype.isPrototypeOf(person)` return true

can add property and method at two level
* property level
* constructor function level
  
* better only add method at prototype level (not constructor function level, will duplicate the code)

### 

someobj.[[Prototype]]
Object.getPrototypeOf()
Object.setPrototypeOf()
someobject.__proto__    // non-standard implementation


