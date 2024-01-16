# reference

https://clubmate.fi/array-cheat-sheet

all method of 
* string - https://louiszhai.github.io/2016/01/12/js.String/
* object - https://lxchuan12.gitee.io/js-object-api/
* array -  https://louiszhai.github.io/2017/04/28/array/

## javascript overview

features

- high-level
- prototype-based object-oriented
- multi-paradiam
- interpreted or just-in-time compiled
- dynamic (typedcc)
- single-threaded
- garbage-collected
- first-class functions
- non-blocking event loop concurrency model

runtime

- js engine
- web apis (for browser)
  - DOM
  - Timers
  - Fetch API
- C++ bindings and thread pool (for NodeJS)
- event loop
  - callback queue

## Execution Context

- lexical environment + this
- hoisting - happend in creating execution context

Each time a function is invoked, a new execution context is created. This context includes information about the function's scope, variables, and the value of this.
There are three types of execution contexts in JavaScript:

1. Global Execution Context: The default context, representing the code in the global scope.
2. Function Execution Context: Created when a function is called.
   1. variable, arguments
      1. arrow function has no arguments binding object, instead it inherit the arguments from enclosing scope
   2. scope chain
   3. this keyword
3. Eval Execution Context: Created when code is executed within an eval function.

## Lexical Environment:

- function and variable - map to their value
- reference to the outer lexical environment - (scope chaining)

The lexical environment is a fundamental component of the execution context. It consists of two main parts:

1. Environment Record: A structure that stores variable and function declarations within the scope. It's essentially a mapping of identifiers to values.
2. Outer Environment Reference: A reference to the lexical environment of the outer (enclosing) scope. This reference allows for scope chaining, enabling access to variables in outer scopes.

## how works

1. function and blocks create new execution context with it's own lexical environment.

## hoisting

variable partially hoisted (only var declaration, let/const are not hoisted)
function fully hoisted

- variable - declaration (not include initialization, will be undefined) +
- function - declaration move to the top
