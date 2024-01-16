二十分钟掌握 React 核心理念，老鸟快速入门指南 - https://zhuanlan.zhihu.com/p/662930723
深入理解 React 底层实现原理 : https://zhuanlan.zhihu.com/p/101507773
一篇文章讲清楚 React 的基础概念 https://zhuanlan.zhihu.com/p/28846204

## react tricks and best practices

### 1. Conditional Rendering:

1. Use the ternary operator or logical && operator for concise conditional rendering.

```jsx
{
  isLoggedIn ? <UserGreeting /> : <GuestGreeting />;
}
```

### 2. Destructuring Props:

Destructure props in the function arguments for cleaner code.

```jsx
const MyComponent = ({ prop1, prop2 }) => {
  // ...
};
```

### 3. Spread Attributes:

Use the spread operator to pass props dynamically or merge objects.

```jsx
<ChildComponent {...props} />
```

### 4. Fragment Shorthand:

Use the shorthand <></> or <React.Fragment></React.Fragment> for fragments.

```jsx
<>
  <ChildComponent1 />
  <ChildComponent2 />
</>
```

### 5. Default Props:

Set default values for props using defaultProps.

```jsx
MyComponent.defaultProps = {
  prop1: "default value",
};
```

### 6. Use of key in Lists:

Provide a unique key prop when rendering lists to help React identify items efficiently.

```jsx
{
  items.map((item) => <ListItem key={item.id} item={item} />);
}
```

### 7. React DevTools:

Explore and utilize the React DevTools browser extension for debugging and inspecting your React component hierarchy.

```javascript

```

### 8.Use Callbacks Wisely:

Memoize callbacks using useCallback to prevent unnecessary renders.

```jsx
const handleClick = useCallback(
  () => {
    // handle click
  },
  [
    /* dependencies */
  ]
);
```

### 9.Context API:

Use the Context API for passing data through the component tree without prop drilling.

```jsx
// Create context
const MyContext = React.createContext(defaultValue);

// Provide and Consume
<MyContext.Provider value={/* some value */}>
  <MyContext.Consumer>
    {value => /* render something based on the context value */}
  </MyContext.Consumer>
</MyContext.Provider>

```

### 10. Lazy Loading and Suspense:

Use React.lazy and React.Suspense for code-splitting and lazy loading components.

```jsx
const MyLazyComponent = React.lazy(() => import("./MyLazyComponent"));

const MyParentComponent = () => (
  <React.Suspense fallback={<div>Loading...</div>}>
    <MyLazyComponent />
  </React.Suspense>
);
```

##

https://www.youtube.com/watch?v=m_477l0Er9w

- Functional components
- Props
- Events
  - onClick
  - onBlur
  - onChange
- Hooks
  - useState
  - useEffect
  - useRef

## components

- data
  - props - passed from parent to child, immutable
  - state - can be changed by component logic
- logic
- appearance

## props

pass data from parent to child

## JSX

- jsx like html
- but can enter js mode by using {} , and inside we can use most js feature
- some js feature not allowed : if/else, for, switch
- jsx produce a js expression
  - we can place other piece of JSX inside {}
  - can we write JSX anywhere inside a component (in if/else, assign to variable, pass it into functions , because they are not produce value)
- jsx can only have one root element
  - if you need more, use <React.Fragment></React.Fragment> ( or the short <></>) while won't appear in DOM tree
    - instead of <div></div> which will add extra to DOM tree

```javascript
const el = <h1>Hello</h1>;
const el = React.createElement("h1", null, "Hello");
```

- allow to embed JS, CSS, and React Component into HTML
  each JSX element is converted to a React.createElement function call by Babel

```jsx
<header>
  <h1 style="color: red">Hello React!</h1>
</header>
```

```javascript
React.createElement(
'header',
null,
React.createElement('h1``,{style: {color: 'red'}}  , 'Hello React!'),
)
```

### jsx vs html

- className - class
- htmlFor - for
- calmelCased - lower case (event handler and property , css property)
- exception aria-_ and data-_ like HTML
- comments need to be in {} , because they are JS

### styling

inline style

```javascript
const style = { color: "red", fontSize: "48px" };
return <h1 style={style}>Hello React</h1>;
```

import CSS by webpack

```javascript
import "./index.css"

return <div className="container"> </dev>
```

css component

### conditional rendering

- &&
- ternary - `a>0 ? "something" : null`
- multiple return - use if/else out of jsx

## state

- we can only call hooks( useState) on the top level of component function (not conditionally)
- only state can only be done by hook

### update state based on current state

always use callback

```javascript
setStep((s) => s - 1);
setStep((s) => s - 1);
// not work if do
setStep(step - 1);
setStep(step - 1);
```

### controlled element

value of form element is stored in DOM.
we want it to be controlled by React.

1. create state using useState
2. element value = {stateValue}
3. element onChange = { setValue() }

### think in react

think about state

- when to use state
  - will data change - no: regular const variable
    - computed from existing state/props - yes: Derive state
      - should re-render component - no: useRef
        - place a new state in component
- type of state: local vs global
  - local: in one component and child component via props
  - global/shared : using context API or Redux
- where to place each piece of state
  - only local - yes: in the component
    - need by child - yes: pass by props
      - need by sibling or parent - yes: lift up to higher level
        - global finally

data flow

- one-way data flow
- child-to-parent communication
- access global state

### pass anything between the open/close tag as children

```javascript
<button id="1">any thing here can be access from props.children</button>;

function Button({ id, children }) {
  console.log(children);
}
```

## component composition

using the children prop or (explicitly defined props)

1. create highly reusable and flexible components
2. fix prop drilling( great for layout)

### PropTypes

```javascript
import PropTypes from "prop-types";
MyComponent.propTypes = {
  myProp1: PropTypes.number.required,
};
```

## how react works

### component, instance, element

- component - is a js function to returns React element tree
  - function Component( props)
- instance - component used multiple times , (function called with props and return JSX)
  - Component(props) => JSX
- React element - JSX converted to React.createElement().
  - React.createElement(JSX)

### phase

1. trigger - for entire applicaiton
   - two condition
     1. initial render
     2. state is updated
   - render is scheduled after triggered, batching of multiple setState calls
2. render
   1. if one parent React element is update, all the children React element will also be recreated.
   2. reconciliation + diffing =>fiber tree update
      1. reconciliation - deciding which DOM element need to be inserted,deleted,updated for reflecting changes
      2. reconciler (Fiber )
   3. React Element tree is recreated each time. but fiber tree is created the first time, then will only be updated(not recreated)
3. commit - in one go . (by ReactDOM for browser, ReactNative for OS, Remotion for Video )
4. browser updating display -

### how diff work

- same position , different element
  - component and state are rebuild/reset
- same position , same element
  - element will be kept , include state
  - new props /attributes are passed if they changed between renders

Key prop

- allow react to distinguish between multiple instances of the same component type
- if the key is same, event element position changed, the element will be kept in the DOM

two use of key

1. using key in list
2. using key to reset state - if key changed, element will be destroy even if the position not change

## two types of logic in React component

1. render logic in the function body , include return
2. event handler function

React require the render logic (1) to be pure:

- no side effect
- same input produce same output

not allowed :

- network request
- start timers
- use DOM API
- not mutate object or variable, props outside of the function scope
- not update state( or refs) : will create an infinite loop

exception(no harm):

- console.log
- random number

where to use :

- in event handler
- in useEffect

### state updates are batched

this is for performance optimization.
but if we use console.log() to show the value before the commit is done,
the result might is stall.

automatic batching

- event handler - React 17 and 18
- timout - 18
- promise - 18
- native DOM event - 18

opt out of automatic batching by wrapping a state update in ReactDOM.flushSync() - never need to

### exercise

use console.log() in a button Onclick event handler,
if no state is changed, then when we click , the console.log() doesn't run.

```javascript
// this won't work because of batching
function handle() {
  setCount(count + 1);
  setCount(count + 1);
}

// this will work -with callback
function handle() {
  setCount((count) => count + 1);
  setCount((count) => count + 1);
}
```

## event

- React event is a wrapper of DOM event
- same as DOM event - preventDefault, stopPropagation
- some event that is not bubbled in DOM are made as bubbled (except scroll?)
-

## effect

### life cycle

- mount - init render
- re render
- unmount

### useEffect

to register an effect - not run it during rendering
two argument

1. effect function - function body
2. clean up function - function return
3. dependency array

```javascript
useEffect(
  function () {
    // effect function
    setData(newData);
    // clean function
    return () => {
      console.log(cleanup);
    };
  },
  [] // dependency array
);
```

when apply side effect

- use event handler - react to event
  - when the corresponding event happens
- useEffect - sync with outside system
  - executed after the component mount (init render)
  - and after subsequent re-rerenders (according to dependency array)

note: event handler is preferred than useEffect

### handle error

```javascript
async function fetchMovie() {
  try {
    const res = await fetch(url);
    if (!res.ok) throw new Error("Fetch failed, check internet connection");

    const data = await res.json();
    if (data.Response === "False") throw new Error("Movie not found");
    setMovies(data.Search);
  } catch (err) {
    setErrorMsg(err.message);
  } finally {
    setIsLoading(false);
  }
}

useEffect(function () {
  setIsLoading(true);
  fetchMovie();
}, []);
```

### dependency array

determine - when the effect will be executed

- state variable and prop can be used inside the effect
- other wise will cause stall closure.

3 use case:

- useEffect(fn, [x,y,z]) - sync with x,y,z , run on mount and re-render triggered by updating x,y,z
- useEffect(fn, []) - sync with no state/props, run only on mount (initial render)
- useEffect(fn) - effect sync with everything, run on each render

* ineffect will run after browser paint (because effect could delay paint if it runs before paint )
  - mount
  - commit
  - browser paint
  - effect

## deep dive hook

react hook are special built-in functions that allow us to hook into react internals

- creating and accessing state from Fiber tree
- registering side effect in Fiber tree
- started with use
- enable easy reusing of non-visual logic -

* most used - useState, useEffect, useReducer, useContext
* less used - useRef, useCallback, useMemo, useTransition, useDeferredValue
* use learn - useLayoutEffect, useDebugValue, useImperativeHandle, useId
* only for lib - useSyncExternalStore, useInsertionEffect

### rules of hook

- only call hooks at the top level
  - this ensure the hooks are always called in the same order (hooks rely on this)
  - FIber tree hold a linked list of used hooks.
- only call hooks from React function (function component , custom hook)

#### hooks must be keeping the same number and same order. (no conditional, early return allowed to change hooks )

### useState

setState is async, it could be updated only next run(or render)
in order to get the updated value, should use a callback function ,

```javascript
//
setData(oldValue + 1); // the old value bold be stall
setData((oldValue) => oldValue + 1); // get the updated old value
```

By using the callback function, you avoid potential issues related to the asynchronous nature of state updates and ensure that you are working with the latest state when updating it.

```javascript
import React, { useState } from "react";

const MyComponent = () => {
  const [count, setCount] = useState(0);

  const handleIncrement = () => {
    // Using the callback function to update state based on the previous state
    setCount((prevCount) => prevCount + 1);
  };

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={handleIncrement}>Increment</button>
    </div>
  );
};

export default MyComponent;
```

### useRef

use cases

- create a variable that stays the same between renders ( setTimeout id etc)
- selecting and storing DOM elements

* use them in event handler of effects (don't read/write in render logic)
* not use it to store visible data (which should useState)

### custom hook

hook is just a function that using any hooks.

- take some parameter
- return some result that we need in App

## vite

```shell
npm create vite@4

cd project
npm install
npm run dev
# manual open browser


npm install eslint vite-plugin-eslint eslint-config-react-app --save-dev

create .eslintrc.json
{
  "extends":"react-app"
}

import eslint from "vite-plugin-eslint"

  plugins: [react(), eslint()],


```

## react-router

npm i react-router-dom@6
is a third part lib, to map url to UI views

### add route

### nav

- Router
  - Route -
    - Outlet - to receive nested components
    - index - as the default child component

add PageNav component

- Navlink - support active class
- Link

### url for state management

- easy way to store state in a global place
- good way to pass data from one page into the next page
- make it possible to bookmark and share the page with the state

```
ex.com/app/cityes/mtl?lat=38&lng=-9

```

- param: mtl
  - `useParams()`
- query string: lat=38&lng=-9
  - `useSearchParams()`

1. create new route
2. link route with state
3. in router, read the state

```javascript
const x = useParams();
console.log("x=", x);

const [searchParams, setSearchParams] = useSearchParams();
const lat = searchParams.get("lat");
const lng = searchParams.get("lng");
```

### programmatically navigation

after submitting a form, navigate to a new page

- navigate component is not used very often
  - inside nested routes
  - like a redirect from app/ to app/cities

### style

react separation of concerns

1.  inline css to JSX element using style prop - local
2.  external css file/ sass , className prop - global
3.  css modules , one css file per component, - component
4.  css-in-js (styled component) , create new component
5.  utility-first Css (tailwindcss) , JSX element
6.  UI lib

CSS module

- must use class, selector will apply to whole application instead of component
- css-module will produce a unique class name for each class ,
  - can not use the class by literal name ` nav become _nav_uy2sd_1`
  - ## use variable

````javascript
import styles from "./AppNav.module.css";
function AppNav() {
  return <nav className={styles.nav}>AppNav</nav>;
}
    ```
````

- to keep the original name and use as global style:
  - can be used for 'active' class in <NavLink>

```css
.nav :global(.active) {
  background-color: blue;
  color: red;
}
```

## context API

for advanced state management

- to broadcast global state to the entire app
  - provider : give all child components access to value
    - value : when value is updated, all consumers re-render
  - Consumers :all components that read the value

### adv pattern

move - state and setState
into custom context provider component

## user authentication

1. form - get user id and password
2. auth - again API, set the result in state, redirect to default page
3. check - check each url to see if user has access

## performance

1. prevent wasted renders

   - memo
   - useMemo
   - useCallback
   - passing elements as children or regular prop

2. improve app speed / responsiveness

   - useMemo
   - useCallback
   - useTransition

3. reduce bundle size
   - use fewer 3rd-party packages
   - code splitting and lazy loading

### when re-render component

- state change
- subscribed context changed
- parent component re-render

when re-render , the props could change ( prop change is not the reason of re-rendering)

wasted render - a render that didn't produce any change in the DOM
