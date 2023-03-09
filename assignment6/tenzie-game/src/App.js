import "./App.css";
import Die from "./components/Die/Die";
import { useState } from "react";
import { nanoid } from "nanoid";
function App() {
  const [dice, setDice] = useState(allNewDice());

  function generateNewDie() {
    return {
      value: Math.ceil(Math.random() * 6),
      isHeld: false,
      id: nanoid(),
    };
  }

  function allNewDice() {
    const newDice = [];

    for (let i = 0; i < 10; i++) {
      newDice.push(generateNewDie());
    }
    return newDice;
  }

  function rollDice() {
    // Challenge 3:
    // You will setDice, but before you need to check isHeld propery, if its true, you will not give a new random number for die, but if isHeld is false you will generate a new random number for this die.
    const newDice = dice.map((die) => (die.isHeld ? die : generateNewDie()));
    setDice(newDice);
  }

  function holdDice(id) {
    // Challenge 2: Once i click the dice, I need to
    // change isHeld property as toggle

    const newDice = dice.map((die) =>
      die.id === id ? { ...die, isHeld: !die.isHeld } : die
    );
    setDice(newDice);

    let remainNumber = 1;
    for (const element of dice) {
      if (element.isHeld === true) {
        remainNumber++;
      }
    }
    if (remainNumber === 10) {
      alert("Congratulations! You won!");
    }
    console.log(remainNumber);
  }

  const dieElements = (
    <>
      {dice.map(({ value, isHeld, id }) => (
        <Die
          key={id}
          holdDice={() => {
            holdDice(id);
          }}
          value={value}
          isHeld={isHeld}
        />
      ))}
    </>
  );
  // dice array so you can map(iterate) and pass the props to component, and you can use this variable to display the component,
  // Challenge 1: create react element using map function
  // and pass all props also holdDice function to Die component,

  return (
    <main className="main">
      <h1 className="main--title">Tenzies</h1>
      <p className="main--content">
        Roll until all dice are the same. Click each die to freeze it at its
        current value between rolls.
      </p>

      <div className="main--list">
        {dieElements}
        {/* <Die value="1"/>
        <Die value="1"/>
        <Die value="1"/>
        <Die value="2"/>
        <Die value="6"/>
        <Die value="8"/>
        <Die value="8"/>
        <Die value="2"/>
        <Die value="5"/>
        <Die value="4"/> */}
      </div>
      <button className="main--action" onClick={rollDice}>
        Roll
      </button>
    </main>
  );
}

export default App;
