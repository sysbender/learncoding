
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

3:49:56