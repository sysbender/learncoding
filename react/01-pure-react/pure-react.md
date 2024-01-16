https://www.knowledgehut.com/blog/web-development/react-create-element

```jsx
const Weather =()=>{
    return (
        <>
            <h1>Hello World</h1>
        </h1>

    )
}

```

```javascript
const Weathre = () => {
  return;
  react.default.createElement(
    react.default.Fragment,
    null,
    react.default.createElement("h1", null, "hello world")
  );
};
```

React.createElement Syntax

```javascript
React.createElement(type, { props }, children);
```

ReactDOM.render syntax

```javascript
ReactDOM.render(ReactElement, ContainerElement);
```
