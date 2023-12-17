
# general

vscode - two plugins : live server, prettier
vscode - settings - disable compact folder

## vs shortcut


shift + up /down   : select
ctrl  + right/left : move cursor
alt + up/down : move line

shift + alt : up/down

shift select, ctrl+d to next , edit all

ctrl + shift +L : select all : 
alt + place cursor : edit selected

## open files
ctrl + shift + o : select and open file
ctrl + shift + f : search every file
## toggle side bar

ctrl +b
ctrl + ~ : open terminal


# varialbe and data type

## console

```javascript
const m = 'foo bar';
console.group('demo');
console.log(1, 'hello');
console.warn(m);
console.error(m);
console.groupEnd('demo');

console.table({name: 'John', age: 30 } );

//log with style
console.log("hello %c world %c kyle", "color: red;", "background-colo9r: green;");

```


## data type
* primitive (stored on stack) - string, number, boolean, null, undefined, symbol, bigint
* reference (stored on heap) - array , function, object

### string to number

```javascript
let amount = '100';
let n = 0
n = parseInt(amount)
parseFloat('100.123');

n = + amount;  // uniary
n = Number(amount)

// number to string
amount.toString();  // autobox
String(amount)
 
```



1:21:11
https://www.youtube.com/watch?v=BI1o2H9z9fo&t=30s