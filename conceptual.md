### Conceptual Exercise

Answer the following questions below:

- What is React? When and why would you use it?
React is a Front End Frameworks(FEF)
Websites, web applications in the browser is has become very complicated and code-heavy, without a front end frameworks, it would be painful to build or maintain a website or app.
 - FEF offers a blueprint to build an app within, their goal is to help develop faster and less painful
 - it has a larger JS libraries to provide a lot of methods to use
 - provide for code re-use
 - most FEF will give you lof of templates of HTML

- What is Babel?
Babel is a complier that transpile JSX into JavaScript.

- What is JSX?
JSX stands for JavaScript syntax extension
it allows developers to write HTML-like code within JavaScript, which makes the code easier to understand and work with.

- How is a Component created in React?
 - Class based components 
 - Functional components 

- What are some difference between state and props?
 - State can change within a given component, props cannot be altered by the component that the props live in or that the props were passed to 

- What does "downward data flow" refer to in React?
refer to the concept that data in a React application flows from parent components to child components.

- What is a controlled component?
when React is in control of the form state, it is called an controlled component

- What is an uncontrolled component?
if React is not in control of the form state, it is called an uncontrolled component 

- What is the purpose of the `key` prop when rendering a list of components?
 - keys help React identify which items are changed/added/removed.
 - keys should be given to repeated elems to provide a stable identity.

- Why is using an array index a poor choice for a `key` prop when rendering a list of components?
because indexed item order may change or items can be deleted.

- Describe useEffect.  What use cases is it used for in React components?
useEffect is a built in book that can be imported from react, it will run after the first render, will run after all rerenders by default, it accepts a callback function as its first argument, it returns undefined or a function.
use cases: Fetching data, starting a timer, manually changing the DOM etc

- What does useRef do?  Does a change to a ref value cause a rerender of a component?
 useRef is another built-in hook in react.
 it returns a mutable object with a key of current, whose value is equal to the initial value passed into the book
 the object persists across renders
 mutating the object does not trigger a re-render.

- When would you use a ref? When wouldn't you use one?
when you need to access an HTMLElement to make use of a Web API,
or to interact some other JavaScript library,
or setting up a file input or any other uncontrolled components

when you can use state, avoid using ref, 

- What is a custom hook in React? When would you want to write one?
a JavaScript function that typically uses built in books
the function name of a custom hook should start with use
custom hooks can be reusable across different components

when there is same business logic inside of multiple components
business logic cluttering up a single component
