import React from "react";
import styles from "./Guess.module.scss";

function Guess({ guesses, setGuesses }) {
  const [currGuess, setCurrGuess] = React.useState("");

  function handleSubmitGuess(event) {
    event.preventDefault();
    console.log(currGuess);
    setCurrGuess("");
    setGuesses([...guesses, currGuess]);
  }

  return (
    <form className={styles.guessInputWrapper} onSubmit={handleSubmitGuess}>
      <label htmlFor="guess-input">Enter guess:</label>
      <input
        required
        id="guess-input"
        type="text"
        minLength={5}
        maxLength={5}
        pattern="[a-zA-Z]{5}"
        title="Please enter exactly 5 letters."
        value={currGuess}
        onChange={(event) => setCurrGuess(event.target.value.toUpperCase())}
      ></input>
      <button>Submit</button>
    </form>
  );
}

export default Guess;
