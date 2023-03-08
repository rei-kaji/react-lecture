1. What is a "side effect" in React? What are some examples?
   Side effects is affects something outside of the scope. Like fetch.

2. What is NOT a "side effect" in React? Examples?
   Not a side effect is that not affects something outside. Like useState.

3. When does React run your useEffect function? When does it NOT run
   The useEffect run when the rendering if you didn't specify a dependency array as the second.
   If you set a second argument, useEffect run only the argument is changed.

4. How would you explain what the "dependencies array" is?
   The dependencies array is the trigger that to run useEffect.
