import React, {useState} from 'react'
import Quetions from './Question_templete'

export default function Test_templete() {
    const mcq = [
        {
          "question": "What is the purpose of useState in React?",
          "options": [
            "To manage component state",
            "To handle routing",
            "To fetch data from an API",
            "To validate props"
          ],
          "answer": "To manage component state"
        },
        {
          "question": "How do you update the state in a functional component?",
          "options": [
            "By using this.setState()",
            "By directly modifying the state variable",
            "By using the updater function returned by useState",
            "By calling the constructor function"
          ],
          "answer": "By using the updater function returned by useState"
        },
        {
          "question": "Which of the following is used for prop type validation in React?",
          "options": [
            "useState",
            "PropTypes",
            "useEffect",
            "Redux"
          ],
          "answer": "PropTypes"
        },
        {
          "question": "Which hook would you use to perform side effects in a functional component?",
          "options": [
            "useState",
            "useEffect",
            "useRef",
            "useMemo"
          ],
          "answer": "useEffect"
        },
        {
          "question": "What does JSX stand for?",
          "options": [
            "JavaScript Syntax Extension",
            "JavaScript XML",
            "JavaScript Expression Syntax",
            "JavaScript Extensible Markup"
          ],
          "answer": "JavaScript XML"
        },
        {
          "question": "What is the main purpose of React Router?",
          "options": [
            "To style components",
            "To manage API calls",
            "To enable navigation between pages",
            "To manage local component state"
          ],
          "answer": "To enable navigation between pages"
        },
        {
          "question": "Which of the following is NOT a rule of hooks?",
          "options": [
            "Only call hooks at the top level",
            "Only call hooks inside React components",
            "Only call hooks conditionally",
            "Only call hooks from functional components"
          ],
          "answer": "Only call hooks conditionally"
        },
        {
          "question": "Which of the following does useRef NOT do?",
          "options": [
            "Hold a mutable value that persists across renders",
            "Trigger a re-render when updated",
            "Access a DOM element directly",
            "Store a value without causing the component to re-render"
          ],
          "answer": "Trigger a re-render when updated"
        },
        {
          "question": "What is the use of the map function in React?",
          "options": [
            "To transform an array into an element list",
            "To fetch data from an API",
            "To navigate between routes",
            "To update component state"
          ],
          "answer": "To transform an array into an element list"
        },
        {
          "question": "Which method is called after a component is mounted in a class-based component?",
          "options": [
            "componentDidUpdate",
            "componentDidMount",
            "componentWillUnmount",
            "render"
          ],
          "answer": "componentDidMount"
        },
        {
          "question": "How can you set a default prop value in React?",
          "options": [
            "By setting it in the component's constructor",
            "Using PropTypes.default",
            "By assigning it in defaultProps",
            "By setting it in the componentDidMount method"
          ],
          "answer": "By assigning it in defaultProps"
        },
        {
          "question": "What does async/await help achieve in JavaScript?",
          "options": [
            "Running synchronous code faster",
            "Writing cleaner asynchronous code",
            "Parallelizing functions",
            "Avoiding JavaScript errors"
          ],
          "answer": "Writing cleaner asynchronous code"
        },
        {
          "question": "What is the purpose of useEffect in React?",
          "options": [
            "To manage component state",
            "To perform side effects in functional components",
            "To validate props",
            "To fetch data from a public API"
          ],
          "answer": "To perform side effects in functional components"
        },
        {
          "question": "Which hook is used to manage the component's state?",
          "options": [
            "useEffect",
            "useState",
            "useMemo",
            "useRef"
          ],
          "answer": "useState"
        },
        {
          "question": "Which React hook would you use to track the previous value of a variable?",
          "options": [
            "useState",
            "useEffect",
            "useMemo",
            "useRef"
          ],
          "answer": "useRef"
        },
        {
          "question": "What is the correct syntax for creating a component in React?",
          "options": [
            "function Component() { return <div>Component</div>; }",
            "const Component = () => <div>Component</div>;",
            "class Component extends React.Component { render() { return <div>Component</div>; } }",
            "All of the above"
          ],
          "answer": "All of the above"
        },
        {
          "question": "Which of the following is a valid way to import a React component?",
          "options": [
            "import { MyComponent } from './MyComponent';",
            "require('./MyComponent');",
            "import MyComponent from './MyComponent';",
            "include MyComponent from './MyComponent';"
          ],
          "answer": "import MyComponent from './MyComponent';"
        },
        {
          "question": "Which of the following React methods can trigger a re-render?",
          "options": [
            "componentWillMount",
            "componentDidUpdate",
            "setState",
            "componentWillUnmount"
          ],
          "answer": "setState"
        },
        {
          "question": "Which hook can be used to create a mutable object that persists between renders?",
          "options": [
            "useState",
            "useEffect",
            "useRef",
            "useCallback"
          ],
          "answer": "useRef"
        },
        {
          "question": "How do you prevent re-rendering a component in React when the props or state haven't changed?",
          "options": [
            "Using useState",
            "Using useMemo",
            "Using shouldComponentUpdate in class components",
            "By not calling setState"
          ],
          "answer": "Using shouldComponentUpdate in class components"
        },
        {
          "question": "What is the purpose of the React key attribute?",
          "options": [
            "To identify elements in lists for DOM manipulation",
            "To store a value between renders",
            "To manage the component lifecycle",
            "To track component state"
          ],
          "answer": "To identify elements in lists for DOM manipulation"
        },
        {
          "question": "What does the 'useMemo' hook in React do?",
          "options": [
            "It calculates the value during every render",
            "It memoizes a computed value to avoid expensive calculations",
            "It is used to manage side effects",
            "It controls component rendering"
          ],
          "answer": "It memoizes a computed value to avoid expensive calculations"
        },
        {
          "question": "How does React handle updates to the virtual DOM?",
          "options": [
            "It re-renders the entire virtual DOM",
            "It only updates the nodes that have changed",
            "It re-renders the entire application",
            "It sends a request to the server"
          ],
          "answer": "It only updates the nodes that have changed"
        },
        {
          "question": "Which of the following is true about functional components in React?",
          "options": [
            "They cannot manage state",
            "They have a render method",
            "They can use hooks to manage state and side effects",
            "They must be class-based"
          ],
          "answer": "They can use hooks to manage state and side effects"
        },
        {
          "question": "What is the role of 'useCallback' in React?",
          "options": [
            "It memoizes callback functions to prevent unnecessary re-renders",
            "It is used to manage side effects",
            "It handles DOM manipulation",
            "It stores state in the component"
          ],
          "answer": "It memoizes callback functions to prevent unnecessary re-renders"
        },
        {
          "question": "Which statement is true about componentDidMount?",
          "options": [
            "It is called after the initial render",
            "It is called before the initial render",
            "It is a hook used in functional components",
            "It causes a re-render"
          ],
          "answer": "It is called after the initial render"
        },
        {
          "question": "Which method is used to handle side effects in class components?",
          "options": [
            "componentWillUpdate",
            "componentDidUpdate",
            "componentDidMount",
            "componentWillMount"
          ],
          "answer": "componentDidMount"
        },
        {
          "question": "What is the purpose of React Fragment?",
          "options": [
            "It adds keys to the elements",
            "It allows you to return multiple elements without adding extra nodes to the DOM",
            "It modifies the state",
            "It re-renders the component"
          ],
          "answer": "It allows you to return multiple elements without adding extra nodes to the DOM"
        },
        {
          "question": "Which lifecycle method is used to clean up after a component is removed?",
          "options": [
            "componentDidUpdate",
            "componentDidMount",
            "componentWillUnmount",
            "shouldComponentUpdate"
          ],
          "answer": "componentWillUnmount"
        },
        {
          "question": "What is short-circuit evaluation in JavaScript?",
          "options": [
            "A process that evaluates both sides of the condition",
            "A technique to stop evaluation when the first false value is encountered",
            "A function that always returns true",
            "A method to skip loop iterations"
          ],
          "answer": "A technique to stop evaluation when the first false value is encountered"
        },
        {
          "question": "Which of the following is used to implement routing in React?",
          "options": [
            "useState",
            "useEffect",
            "React Router",
            "useReducer"
          ],
          "answer": "React Router"
        },
        {
          "question": "How do you pass data from a parent component to a child component?",
          "options": [
            "Using useEffect",
            "By passing it as props",
            "By using useState",
            "By calling a function"
          ],
          "answer": "By passing it as props"
        },
        {
          "question": "What is the use of useReducer in React?",
          "options": [
            "To manage component lifecycle",
            "To manage complex state logic",
            "To fetch data from an API",
            "To manipulate the virtual DOM"
          ],
          "answer": "To manage complex state logic"
        },
        {
          "question": "How would you describe the role of the Fetch API?",
          "options": [
            "To style components",
            "To fetch data from external sources",
            "To create a custom hook",
            "To manage component state"
          ],
          "answer": "To fetch data from external sources"
        },
        {
          "question": "Which hook is used to track the position of a scrollable element?",
          "options": [
            "useState",
            "useEffect",
            "useRef",
            "useScroll"
          ],
          "answer": "useRef"
        },
        {
          "question": "What does 'infinite scroll' allow users to do in a React app?",
          "options": [
            "Load data only once",
            "Load new data as the user scrolls",
            "Automatically fetch all data in advance",
            "Scroll to a fixed position"
          ],
          "answer": "Load new data as the user scrolls"
        },
        {
          "question": "What is the main purpose of the Top Loading Bar in React applications?",
          "options": [
            "To show loading progress during API calls",
            "To reset the application state",
            "To track the component lifecycle",
            "To render multiple components simultaneously"
          ],
          "answer": "To show loading progress during API calls"
        },
        {
          "question": "Which of the following is NOT a valid React hook?",
          "options": [
            "useEffect",
            "useReducer",
            "useFetch",
            "useState"
          ],
          "answer": "useFetch"
        },
        {
          "question": "What is the key difference between componentDidMount and useEffect?",
          "options": [
            "componentDidMount is used in functional components",
            "useEffect is used in functional components",
            "useEffect triggers before rendering",
            "componentDidMount is used in class components"
          ],
          "answer": "useEffect is used in functional components"
        },
        {
          "question": "Which hook would you use to create a ref in React?",
          "options": [
            "useState",
            "useEffect",
            "useRef",
            "useMemo"
          ],
          "answer": "useRef"
        },
        {
          "question": "Which statement is true about default props?",
          "options": [
            "They override passed props",
            "They provide fallback values if props are not passed",
            "They trigger re-renders automatically",
            "They are mandatory for every component"
          ],
          "answer": "They provide fallback values if props are not passed"
        },
        {
          "question": "How can you optimize performance in a large React application?",
          "options": [
            "By using React.memo for components that don't re-render frequently",
            "By using setInterval for state updates",
            "By using useState for every variable",
            "By avoiding the use of useEffect"
          ],
          "answer": "By using React.memo for components that don't re-render frequently"
        },
        {
          "question": "What does the React developer tool allow you to do?",
          "options": [
            "View the component tree and state",
            "Minimize application size",
            "Run the app in production mode",
            "Test the app for cross-browser compatibility"
          ],
          "answer": "View the component tree and state"
        },
        {
          "question": "Which of the following is a characteristic of controlled components in React?",
          "options": [
            "The form data is handled by the DOM",
            "The form data is handled by the component state",
            "They cannot be reused",
            "They automatically prevent default events"
          ],
          "answer": "The form data is handled by the component state"
        }
      ];
      const [mcqs, setMcqs] = useState(mcq);
      
  return (
    <div className='container'>
      <h1 className='text-center my-3 p-3'>MCQ Sample Test</h1>
      
        {
            mcqs.map(
                (question)=>{
                    return(
                        <Quetions key={question.question} que={question.question} opt={question.options} ans={question.answer} />

                    )
                }
            )
        }
    </div>
  )
}
