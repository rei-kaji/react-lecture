- What is the purpose of the useState hook?
  To add state to functional components.
- What is the syntax for using useState in a functional component?
  const [value setValue] = useState(initialState);
- What is the default value of a state variable initialized with useState?
  Depends on the value of that author wrote,but if not defined, it will default to undefined.
- Can you update multiple state variables with a single call to useState?
  No
- How do you update a state variable with useState?
  using setState
- What is the purpose of the useEffect hook?
  Control the timing of action in the useEffect
- What is the syntax for using useEffect in a functional component?
  useEffect(()=>{},[])
- When does the callback function passed to useEffect get called?
  rendering or depending on the dependency
- Can you use useEffect more than once in a single component?
  yes
- How do you unsubscribe from a subscription created in a useEffect hook?
  return cleanup(unsubscribe) function
- What is the difference between useEffect and componentDidMount in a class component?
  componentDidMount is called only once, after the initial render, while useEffect is called after every render of the component, including the initial render. Additionally, useEffect can be used in functional components, while componentDidMount is a lifecycle method used in class components.
- What is the difference between useEffect and componentWillUnmount in a class component?
  useEffect is used to perform side effects after rendering, while componentWillUnmount is used to clean up those side effects before the component unmounts.
- What is the difference between useEffect and componentDidUpdate in a class component?
  useEffect is used for both mounting and updating in a function component, while componentDidUpdate is only used for updating in a class component.
- How do you conditionally run the effect only when certain values change?
  You can use the second argument of useEffect, an array of dependencies, to conditionally run the effect only when certain values change.
- What is the second argument to useEffect used for?
  The second argument to useEffect is an array of dependencies that determine when the effect should be re-run.
- How do you simulate componentDidMount with useEffect?
  To simulate componentDidMount with useEffect, pass an empty array as the second argument to useEffect.
- How do you simulate componentWillUnmount with useEffect?
  To simulate componentWillUnmount with useEffect, return a function from the useEffect callback that cleans up any side effects
- How do you simulate componentDidUpdate with useEffect?
  To simulate componentDidUpdate with useEffect, add the state variable(s) that the effect depends on to the array of dependencies in the second argument to useEffect.
- Can you have side effects in the callback function passed to useState?
  Yes, you can have side effects in the callback function passed to useState, but it is generally not recommended.
- Can you have state variables in the callback function passed to useEffect?
  Yes, you can use state variables in the callback function passed to useEffect, but you need to include them in the array of dependencies to avoid infinite loops.
