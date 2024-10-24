import React, {useState} from 'react'
import Quetions from './Question_templete'
import MCQs from './Questions.json'
export default function Test_templete() {
    // const mcq = [
    //   {
    //     "question": "Which method is used to trigger a re-render in a functional component?",
    //     "options": [
    //       "componentDidMount",
    //       "useState",
    //       "componentWillUnmount",
    //       "useEffect"
    //     ],
    //     "answer": "useState",
    //     "explainer": "useState is the React hook that triggers a re-render when the state is updated in functional components."
    //   },
    //   {
    //     "question": "What is a controlled component in React?",
    //     "options": [
    //       "A component where the form data is handled by the DOM",
    //       "A component where the form data is handled by React state",
    //       "A component that controls the entire app",
    //       "A component that manages multiple states"
    //     ],
    //     "answer": "A component where the form data is handled by React state",
    //     "explainer": "In controlled components, React state is the 'single source of truth' for form input elements."
    //   },
    //   {
    //     "question": "What does useEffect do in React?",
    //     "options": [
    //       "Directly updates the state",
    //       "Performs side effects in a component",
    //       "Handles form submissions",
    //       "Replaces the componentDidMount lifecycle method"
    //     ],
    //     "answer": "Performs side effects in a component",
    //     "explainer": "useEffect is a hook for performing side effects, such as fetching data, directly in functional components."
    //   },
    //   {
    //     "question": "How do you pass data between sibling components in React?",
    //     "options": [
    //       "By passing data via props",
    //       "By using a global state",
    //       "By directly modifying sibling state",
    //       "By using the useState hook"
    //     ],
    //     "answer": "By using a global state",
    //     "explainer": "To pass data between siblings, use a global state like Redux or context API, or pass data through a parent component."
    //   },
    //   {
    //     "question": "Which of the following is a correct way to handle asynchronous operations in React?",
    //     "options": [
    //       "Using promises",
    //       "Using async/await inside useEffect",
    //       "Using a loop",
    //       "Using setTimeout"
    //     ],
    //     "answer": "Using async/await inside useEffect",
    //     "explainer": "Handling asynchronous operations like data fetching is usually done with async/await within useEffect."
    //   },
    //   {
    //     "question": "What is the primary use of the useState hook?",
    //     "options": [
    //       "To fetch data from an API",
    //       "To update the virtual DOM",
    //       "To manage state in a functional component",
    //       "To manipulate the lifecycle of components"
    //     ],
    //     "answer": "To manage state in a functional component",
    //     "explainer": "useState allows you to add state variables to functional components in React."
    //   },
    //   {
    //     "question": "What is the role of useEffect in data fetching?",
    //     "options": [
    //       "It triggers state updates",
    //       "It manages user input",
    //       "It executes code when a component mounts and/or updates",
    //       "It handles form submissions"
    //     ],
    //     "answer": "It executes code when a component mounts and/or updates",
    //     "explainer": "useEffect runs after renders and is commonly used for tasks like data fetching or subscriptions."
    //   },
    //   {
    //     "question": "What are PropTypes used for in React?",
    //     "options": [
    //       "To manage component state",
    //       "To validate props passed to a component",
    //       "To optimize component rendering",
    //       "To handle side effects"
    //     ],
    //     "answer": "To validate props passed to a component",
    //     "explainer": "PropTypes allow you to validate the types of props passed to your component during development."
    //   },
    //   {
    //     "question": "How can you prevent unnecessary re-renders in a functional component?",
    //     "options": [
    //       "By using useCallback or useMemo",
    //       "By avoiding the use of state",
    //       "By using forceUpdate",
    //       "By directly modifying the virtual DOM"
    //     ],
    //     "answer": "By using useCallback or useMemo",
    //     "explainer": "useCallback and useMemo can help prevent re-renders by memoizing functions or values, optimizing performance."
    //   },
    //   {
    //     "question": "What is the role of React Router in a React application?",
    //     "options": [
    //       "To manage API calls",
    //       "To navigate between different components",
    //       "To handle form validation",
    //       "To manage component state"
    //     ],
    //     "answer": "To navigate between different components",
    //     "explainer": "React Router is used to handle navigation between different routes in a single-page application."
    //   },
    //   {
    //     "question": "Which hook would you use to access the previous state value in React?",
    //     "options": [
    //       "useState",
    //       "useRef",
    //       "useEffect",
    //       "useReducer"
    //     ],
    //     "answer": "useRef",
    //     "explainer": "useRef allows you to persist values across renders without triggering a re-render, which is useful for storing the previous state."
    //   },
    //   {
    //     "question": "What is the purpose of the useReducer hook?",
    //     "options": [
    //       "To manage complex state in a component",
    //       "To fetch data from an API",
    //       "To handle side effects",
    //       "To replace useState in functional components"
    //     ],
    //     "answer": "To manage complex state in a component",
    //     "explainer": "useReducer is an alternative to useState when you have more complex state logic to manage."
    //   },
    //   {
    //     "question": "How do you make a network request in React?",
    //     "options": [
    //       "By using useState",
    //       "By using fetch or Axios inside useEffect",
    //       "By directly updating the DOM",
    //       "By using React Router"
    //     ],
    //     "answer": "By using fetch or Axios inside useEffect",
    //     "explainer": "Network requests in React are usually made with the fetch API or Axios inside the useEffect hook."
    //   },
    //   {
    //     "question": "What is the significance of the key prop in React?",
    //     "options": [
    //       "It helps identify each element in a list",
    //       "It prevents re-renders",
    //       "It manages component state",
    //       "It triggers side effects"
    //     ],
    //     "answer": "It helps identify each element in a list",
    //     "explainer": "The key prop helps React efficiently update and render lists of components by identifying which items have changed."
    //   },
    //   {
    //     "question": "Which hook allows you to cache a value that only changes when a dependency changes?",
    //     "options": [
    //       "useEffect",
    //       "useState",
    //       "useMemo",
    //       "useCallback"
    //     ],
    //     "answer": "useMemo",
    //     "explainer": "useMemo is used to memoize a value and only recalculate it when its dependencies change, improving performance."
    //   },
    //   {
    //     "question": "What is the default behavior of the useEffect hook?",
    //     "options": [
    //       "It runs after every render",
    //       "It runs only once when the component mounts",
    //       "It runs when the component unmounts",
    //       "It runs before the component renders"
    //     ],
    //     "answer": "It runs after every render",
    //     "explainer": "useEffect runs after each render by default, but you can control its behavior using dependency arrays."
    //   },
    //   {
    //     "question": "How do you handle forms in React?",
    //     "options": [
    //       "By directly modifying the DOM",
    //       "By using controlled components",
    //       "By using refs to store form data",
    //       "By using componentDidMount"
    //     ],
    //     "answer": "By using controlled components",
    //     "explainer": "In controlled components, React manages the form inputs via state, and the input's value is bound to the state."
    //   },
    //   {
    //     "question": "How do you conditionally apply a class in React?",
    //     "options": [
    //       "Using if/else statements",
    //       "Using the ternary operator inside className",
    //       "By directly modifying the DOM",
    //       "By using the useEffect hook"
    //     ],
    //     "answer": "Using the ternary operator inside className",
    //     "explainer": "You can conditionally apply classes in JSX using the ternary operator inside the className attribute."
    //   },
    //   {
    //     "question": "Which of the following can cause a React component to re-render?",
    //     "options": [
    //       "Changing the state or props",
    //       "Directly updating the DOM",
    //       "Using a for loop",
    //       "Changing the component name"
    //     ],
    //     "answer": "Changing the state or props",
    //     "explainer": "A React component re-renders whenever its state or props change, triggering the virtual DOM diffing process."
    //   },
    //   {
    //     "question": "Which hook is used to access the DOM element directly in React?",
    //     "options": [
    //       "useState",
    //       "useRef",
    //       "useEffect",
    //       "useMemo"
    //     ],
    //     "answer": "useRef",
    //     "explainer": "useRef is used to directly reference DOM elements or store mutable values across renders without causing re-renders."
    //   },
    //   {
    //     "question": "How can you optimize large lists in React to prevent performance issues?",
    //     "options": [
    //       "By using React.memo",
    //       "By using useEffect",
    //       "By using lazy loading and code splitting",
    //       "By using React.Fragment"
    //     ],
    //     "answer": "By using lazy loading and code splitting",
    //     "explainer": "Lazy loading and code splitting can be used to load components or data only when needed, improving performance for large lists."
    //   },
    //     {
    //       "question": "What is the difference between `useEffect` and `useLayoutEffect`?",
    //       "options": [
    //         "useEffect runs after layout calculations, while useLayoutEffect runs before layout calculations.",
    //         "useEffect blocks rendering until the effect is complete, while useLayoutEffect does not.",
    //         "useLayoutEffect blocks rendering until the effect is complete, while useEffect runs after painting.",
    //         "There is no difference between them; both serve the same purpose."
    //       ],
    //       "answer": "useLayoutEffect blocks rendering until the effect is complete, while useEffect runs after painting.",
    //       "explainer": "useLayoutEffect is used when you need to perform DOM mutations before the browser has painted, preventing any flickering."
    //     },
    //     {
    //       "question": "What is the purpose of the dependency array in the `useEffect` hook?",
    //       "options": [
    //         "It controls the number of renders a component can have.",
    //         "It specifies the values that, when changed, trigger the effect to run again.",
    //         "It forces the component to re-render on each update.",
    //         "It stores the state values used in the effect."
    //       ],
    //       "answer": "It specifies the values that, when changed, trigger the effect to run again.",
    //       "explainer": "The dependency array allows you to control when useEffect should re-run based on changes to specified variables."
    //     },
    //     {
    //       "question": "How does React's reconciliation algorithm (Fiber) optimize rendering?",
    //       "options": [
    //         "It uses a stack-based approach for updates.",
    //         "It allows React to break down rendering work into chunks and spread it across multiple frames.",
    //         "It prioritizes rendering elements in order of appearance in the JSX.",
    //         "It updates all elements in the virtual DOM simultaneously."
    //       ],
    //       "answer": "It allows React to break down rendering work into chunks and spread it across multiple frames.",
    //       "explainer": "React Fiber breaks down rendering into units of work, enabling asynchronous rendering and better handling of complex updates."
    //     },
    //     {
    //       "question": "How would you handle deep state updates in a React component efficiently?",
    //       "options": [
    //         "Using `useState` with shallow copies of the state object.",
    //         "Using `useReducer` for complex state logic.",
    //         "Using `useEffect` to track nested state changes.",
    //         "Directly mutating the state object and forcing re-rendering."
    //       ],
    //       "answer": "Using `useReducer` for complex state logic.",
    //       "explainer": "useReducer is better suited for handling complex state structures and logic that involve multiple updates, avoiding the limitations of shallow state updates."
    //     },
    //     {
    //       "question": "How can you implement code-splitting in a React application?",
    //       "options": [
    //         "By using `React.lazy` and `Suspense` components.",
    //         "By dividing the JSX into smaller components.",
    //         "By separating the CSS from the JavaScript files.",
    //         "By splitting the reducer logic into multiple hooks."
    //       ],
    //       "answer": "By using `React.lazy` and `Suspense` components.",
    //       "explainer": "React.lazy dynamically loads components, while Suspense provides a fallback during loading, making them ideal for code-splitting."
    //     },
    //     {
    //       "question": "What is the significance of the `useCallback` hook in performance optimization?",
    //       "options": [
    //         "It ensures that a function reference remains the same between renders unless its dependencies change.",
    //         "It prevents re-renders of the parent component.",
    //         "It caches component state between renders.",
    //         "It prevents changes to the props passed to a child component."
    //       ],
    //       "answer": "It ensures that a function reference remains the same between renders unless its dependencies change.",
    //       "explainer": "useCallback is used to memoize a function so that its reference only changes if its dependencies do, preventing unnecessary re-renders."
    //     },
    //     {
    //       "question": "What is a 'controlled' component in React?",
    //       "options": [
    //         "A component where form inputs are handled by the DOM.",
    //         "A component that manages its own state internally.",
    //         "A component where form inputs are controlled by React state.",
    //         "A component that uses useReducer for state management."
    //       ],
    //       "answer": "A component where form inputs are controlled by React state.",
    //       "explainer": "In a controlled component, the form input's value is derived from the React state, making React the source of truth."
    //     },
    //     {
    //       "question": "Which of the following describes memoization in React?",
    //       "options": [
    //         "A technique to store cached values that remain unchanged unless their dependencies change.",
    //         "A method of deep cloning the component's state.",
    //         "A way to avoid passing props to child components.",
    //         "A hook that forces a re-render after every state update."
    //       ],
    //       "answer": "A technique to store cached values that remain unchanged unless their dependencies change.",
    //       "explainer": "Memoization is a performance optimization technique used to avoid re-calculating or re-rendering expensive operations if their dependencies haven't changed."
    //     },
    //     {
    //       "question": "When using `useEffect`, how can you prevent a side effect from being executed on every render?",
    //       "options": [
    //         "By returning a cleanup function.",
    //         "By passing an empty dependency array.",
    //         "By using useMemo instead.",
    //         "By forcing the effect to run synchronously."
    //       ],
    //       "answer": "By passing an empty dependency array.",
    //       "explainer": "An empty dependency array ensures that the side effect only runs once, when the component mounts."
    //     },
    //     {
    //       "question": "How can React optimize the rendering of long lists?",
    //       "options": [
    //         "By using virtual DOM diffing.",
    //         "By implementing lazy loading and virtualization techniques.",
    //         "By using React.StrictMode.",
    //         "By avoiding the use of keys in list rendering."
    //       ],
    //       "answer": "By implementing lazy loading and virtualization techniques.",
    //       "explainer": "Techniques like lazy loading and list virtualization (e.g., react-window or react-virtualized) can optimize rendering for long lists by rendering only what’s visible."
    //     },
    //     {
    //       "question": "Which lifecycle method does `useEffect` mimic when you pass an empty array as the second argument?",
    //       "options": [
    //         "componentDidMount",
    //         "componentWillUnmount",
    //         "shouldComponentUpdate",
    //         "componentDidUpdate"
    //       ],
    //       "answer": "componentDidMount",
    //       "explainer": "When you pass an empty array to useEffect, it behaves like componentDidMount by running only once when the component mounts."
    //     },
    //     {
    //       "question": "What is the purpose of `useRef` in React?",
    //       "options": [
    //         "To persist a value across renders without causing a re-render.",
    //         "To manage global state.",
    //         "To handle side effects in components.",
    //         "To prevent unnecessary state updates."
    //       ],
    //       "answer": "To persist a value across renders without causing a re-render.",
    //       "explainer": "useRef can store mutable values (such as DOM elements) that persist across renders but do not trigger re-renders when updated."
    //     },
    //     {
    //       "question": "How does `React.memo` help optimize React applications?",
    //       "options": [
    //         "By caching API responses for reuse across components.",
    //         "By memoizing functional components and only re-rendering them when their props change.",
    //         "By preventing side effects from being run during component updates.",
    //         "By allowing the component to skip the rendering phase completely."
    //       ],
    //       "answer": "By memoizing functional components and only re-rendering them when their props change.",
    //       "explainer": "React.memo helps prevent unnecessary re-renders of functional components by memoizing the rendered output based on props."
    //     },
    //     {
    //       "question": "What happens if you forget to add a dependency in the `useEffect` dependency array?",
    //       "options": [
    //         "The effect will run only once, on the initial render.",
    //         "The effect will run infinitely, causing performance issues.",
    //         "The effect will not run at all.",
    //         "The effect will always have stale values for that missing dependency."
    //       ],
    //       "answer": "The effect will always have stale values for that missing dependency.",
    //       "explainer": "When a dependency is missing, useEffect won't update the effect based on its changes, leading to stale values."
    //     },
    //     {
    //       "question": "What is the difference between React context and Redux?",
    //       "options": [
    //         "Context is for handling global state, while Redux is for handling component-specific state.",
    //         "Context is built into React for passing data through the component tree, while Redux is an external library for managing global state.",
    //         "Redux is built into React, while Context is an external library.",
    //         "Context allows mutating state, while Redux does not."
    //       ],
    //       "answer": "Context is built into React for passing data through the component tree, while Redux is an external library for managing global state.",
    //       "explainer": "React Context is part of the core React library and is used to pass data through the component tree, whereas Redux is a more structured state management library for complex global state."
    //     },
    //     {
    //       "question": "How can you handle conditional rendering efficiently in a React component?",
    //       "options": [
    //         "Using ternary operators or logical && expressions inside JSX.",
    //         "Using if/else blocks directly in JSX.",
    //         "By modifying the DOM directly with JavaScript.",
    //         "Using switch statements inside JSX."
    //       ],
    //       "answer": "Using ternary operators or logical && expressions inside JSX.",
    //       "explainer": "Ternary operators and logical && expressions allow for clean and efficient conditional rendering in JSX."
    //     },
    //     {
    //       "question": "How can you manage side effects in functional components?",
    //       "options": [
    //         "By using class component lifecycle methods.",
    //         "By using `useEffect`.",
    //         "By writing them inside the render method.",
    //         "By using `useMemo`."
    //       ],
    //       "answer": "By using `useEffect`.",
    //       "explainer": "useEffect is the hook used for handling side effects in functional components, such as data fetching or subscriptions."
    //     },
    //     {
    //       "question": "What does `Suspense` in React allow you to do?",
    //       "options": [
    //         "It allows you to display fallback content while waiting for asynchronous resources to load.",
    //         "It suspends the rendering of components until all state is updated.",
    //         "It delays API calls until the user interacts with the page.",
    //         "It prevents the re-rendering of child components."
    //       ],
    //       "answer": "It allows you to display fallback content while waiting for asynchronous resources to load.",
    //       "explainer": "Suspense helps in code-splitting, showing fallback content while lazy-loaded components are being fetched."
    //     },
    //     {
    //       "question": "How does React handle reconciliation when updating the virtual DOM?",
    //       "options": [
    //         "React re-renders the entire component tree every time the state changes.",
    //         "React compares the previous virtual DOM with the current one and only updates the necessary parts of the real DOM.",
    //         "React updates all DOM nodes after every state update.",
    //         "React updates only the parent component when state changes."
    //       ],
    //       "answer": "React compares the previous virtual DOM with the current one and only updates the necessary parts of the real DOM.",
    //       "explainer": "Reconciliation in React means comparing the virtual DOM before and after an update to only apply the minimal necessary changes to the real DOM."
    //     },
    //     {
    //       "question": "Which method can be used to optimize the performance of React apps that require heavy image loading?",
    //       "options": [
    //         "Preloading the images with JavaScript.",
    //         "Using a Content Delivery Network (CDN) and lazy loading.",
    //         "Reducing the image size in the componentDidMount lifecycle method.",
    //         "Storing images in Redux state."
    //       ],
    //       "answer": "Using a Content Delivery Network (CDN) and lazy loading.",
    //       "explainer": "A CDN allows for faster image delivery, and lazy loading ensures that images are only loaded when they are needed on the page."
    //     }
      
    // ];
    // const [mcqs, setMcqs] = useState(mcq);
      
    return (
      <div className='container'>
        <h1 className='text-center my-3 p-3'>MCQ Sample Test</h1>
        {
          MCQs.map(
            (question)=>{
              return(
                <Quetions key={question.question} que={question.question} opt={question.options} ans={question.answer} note={question.explainer}/>
              )
            }
          )
        }
      </div>
    )
}
