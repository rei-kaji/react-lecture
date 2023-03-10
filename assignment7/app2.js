import React from "react";

/**
 * Challenge: Convert this stateful function component
 * to a stateful class component. At the end, everything
 * should work exactly the way it does now.
 *
 * 1. Change the syntax to a class component
 * 2. Declare state in the class component that
 *    can hold the value of `count`
 * 3. Update the add and subtract methods so you won't
 *    get the error about calling `setState` on undefined
 * 4. Update the values in the render method to account
 *    for the changeover to a class component
 */

// export default function App() {
//   const [count, setCount] = React.useState(0);

//   function add() {
//     setCount((prevCount) => prevCount + 1);
//   }

//   function subtract() {
//     setCount((prevCount) => prevCount - 1);
//   }

//   return (
//     <div className="counter">
//       <button className="counter--minus" onClick={subtract}>
//         –
//       </button>
//       <div className="counter--count">
//         <h1>{count}</h1>
//       </div>
//       <button className="counter--plus" onClick={add}>
//         +
//       </button>
//     </div>
//   );
// }

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { count: 0 };
  }

  add = () => {
    this.setState((prevState) => ({ count: prevState.count + 1 }));
  };
  subtract = () => {
    this.setState((prevState) => ({ count: prevState.count - 1 }));
  };

  render() {
    const { count } = this.state;
    return (
      <div className="counter">
        <button className="counter--minus" onClick={this.subtract}>
          –
        </button>
        <div className="counter--count">
          <h1>{count}</h1>
        </div>
        <button className="counter--plus" onClick={this.add}>
          +
        </button>
      </div>
    );
  }
}
