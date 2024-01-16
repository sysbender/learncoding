# reference

Asynchronous JavaScript Crash Course
https://www.youtube.com/watch?v=exBgWAIeIeg&t=2962s

browser

- javascript runtime -single-threaded model
  - memory heap
  - call stack
- web API
  - setTimeout
  - fetch request
  - DOM event
- AJAX

- create a task on callback/task queue
- the event loop wait until the call stack is empty and place the next function from callback queue to call stack

```javascript
console.log("Hi!");

setTimeout(() => {
  console.log("Execute immediately.");
}, 0);

console.log("Bye!");
```

### async example

1. fs - readFile
2. ajax .get
3. setTimeout

## callback

callback function - is a function passed into another function as an argument

two ways the callback may be called:

- sync - called immediately after the invocation of the outer function
  - Array.prototype.map() , Array.prototype.forEach()
- async - called at some point later, after an async operation has completed
  - setTimeout() , Promise.prototype.then()

## promis

ia an object that may produce a single value some time in the future
resolved value, reason that is rejected
3 states:

- fulfilled
- rejected
- pending

### promise property

1. PromiseState - pending(default) resolved/fulfilled, rejected

- pending -> resolved
- pending -> rejected

can only change once the state.

2. PromiseResult

### constructor

create Promise object - to wrap callback-based APIs

- parameters - executor function which accept two function as parameter : resolveFunc, rejectFunc
- return : promise object

```javascript
new Promise(executor);
```

```javascript
function executor(resolveFunc, rejectFunc) {
  // some sync code that accept a callback
}
```

you don't provide an explicit implementation of the resolve function; you simply use it to signal the successful completion of the operation and pass the resolved value (result) to it. The actual behavior of transitioning the Promise to the "fulfilled" state and storing the value is handled by the Promise implementation itself.

### instance methods : then(), catch(), finally()

return promsise and can be chained

## static factory methods - resolve, reject

will return a promise object with the result and state= resolved/reject
(not like constructor, which return promise with state=pending)

if the parameter is also a promise object, then return the result of that promise

### static method - all(), allSettled(), any(), race()

4 static method to facilite concurrency
Promise.all()
Fulfills when all of the promises fulfill; rejects when any of the promises rejects.

Promise.allSettled()
Fulfills when all promises settle.

Promise.any()
Fulfills when any of the promises fulfills; rejects when all of the promises reject.

Promise.race()
Settles when any of the promises settles. In other words, fulfills when any of the promises fulfills; rejects when any of the promises rejects.
