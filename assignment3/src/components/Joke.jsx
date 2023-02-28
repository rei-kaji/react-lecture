import React from "react";

function Joke({ setup, punchline }) {
  return (
    <div className="joke_card">
      <h3 className="joke_title">{setup}</h3>
      <p className="joke_body">{punchline}</p>
    </div>
  );
}

export default Joke;
