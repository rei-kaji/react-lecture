import { useState } from "react";
import "./App.css";
import jokeData from "./jokesData.js";
import Joke from "./components/Joke";

console.log(jokeData);

function App() {
  return (
    <div className="App">
      {jokeData.map(({ setup = "Not setting the setup", punchline }, index) => (
        <Joke setup={setup} punchline={punchline} key={index} />
      ))}
    </div>
  );
}

export default App;
