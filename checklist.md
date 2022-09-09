1. [CODE STYLE] - Method's name should start with a verb (so you could easily tell what your method actually do)

BAD EXAMPLE:
```jsx
clickHandler = () => {
 console.log('Hello, world');
}
```

GOOD EXAMPLE:
```jsx
handleClick = () => {
 console.log('Hello, world');
}
```

2. [CODE KNOWLEDGE] - Create separate methods instead of creating inline event handlers (if we do so - we don't create new arrow function after component re-rendering)

BAD EXAMPLE:
```jsx
<button 
  type="button"
  onClick={() => {}}
>
 Click me
</button>
```

GOOD EXAMPLE:
```jsx
handleClick = () => {};

return (
  <button 
    type="button"
    onClick={handleClick}
  >
   Click me
</button>
)
```

3. [CODE KNOWLEDGE] - If your method get `event` as argument  or don't get any argument, you don't need to create new arrow function.
Just pass your method.

BAD EXAMPLE:
```jsx
handleClick = () => console.log(333);

return (
  <button 
    type="button"
    onClick={() => this.handleClick()}
  >
   Click me
</button>
)
```


GOOD EXAMPLE:
```jsx
handleClick = () => console.log(333);

return (
  <button 
    type="button"
    onClick={this.handleClick}
  >
   Click me
</button>
)
```

BAD EXAMPLE:
```jsx
handleClick = (event) => console.log(event);

return (
  <button 
    type="button"
    onClick={(event) => this.handleClick(event)}
  >
   Click me
</button>
)
```

GOOD EXAMPLE:
```jsx
handleClick = (event) => console.log(event);

return (
  <button 
    type="button"
    onClick={this.handleClick}
  >
   Click me
</button>
)
```

4. [CODE KNOWLEDGE] - NEVER EVER EVER use array index as a key prop
