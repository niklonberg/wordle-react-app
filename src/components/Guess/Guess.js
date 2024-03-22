import React from "react";

function Guess() {
  const [guess, setGuess] = React.useState("");
  return (
    <form className>
      <label htmlFor="guess">Enter guess:</label>
      <input
        id="guess"
        value={guess}
        onChange={(event) => setGuess(event.target.value)}
      ></input>
    </form>
  );
}

export default Guess;
