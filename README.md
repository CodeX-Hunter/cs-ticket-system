## 1. What is JSX, and why is it used?

JSX stands for JavaScript XML. It allows developers to write HTML-like syntax inside JavaScript. It is used in React to make the UI code easier to read and to describe how the interface should look.

## 2. What is the difference between State and Props?

Props are used to pass data from one component to another, usually from parent to child, and they cannot be changed. State is used to store data inside a component and it can change during the component’s lifecycle.

## 3. What is the useState hook, and how does it work?

The useState hook is used in functional components to create and manage state. It allows a component to store values and update them when needed. When the state changes, the component automatically re-renders.

## 4. How can you share state between components in React?

State can be shared by lifting the state to a common parent component. The parent component keeps the state and passes it to other components through props.

## 5. How is event handling done in React?

Event handling in React is done by attaching event handlers to elements using camelCase event names and passing functions that run when the event occurs.
