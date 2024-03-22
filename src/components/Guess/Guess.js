import React from "react";
import styles from "./Guess.module.scss";

function Guess() {
  const [guess, setGuess] = React.useState("");

  function handleSubmitGuess(event) {
    event.preventDefault();
    console.log(guess);
    setGuess("");
  }

  return (
    <form
      className={styles["guess-input-wrapper"]}
      onSubmit={handleSubmitGuess}
    >
      <label htmlFor="guess-input">Enter guess:</label>
      <input
        required
        id="guess-input"
        type="text"
        minLength={5}
        maxLength={5}
        pattern="[a-zA-Z]{5}"
        title="Please enter exactly 5 letters."
        value={guess}
        onChange={(event) => setGuess(event.target.value.toUpperCase())}
      ></input>
      <button>Submit</button>
    </form>
  );
}

export default Guess;
