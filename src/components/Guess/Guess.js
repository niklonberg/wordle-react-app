import React from "react";
import styles from "./Guess.module.scss";

function Guess() {
  const [guess, setGuess] = React.useState("");
  return (
    <form className={styles["guess-input-wrapper"]}>
      <label htmlFor="guess-input">Enter guess:</label>
      <input
        id="guess-input"
        value={guess}
        type="text"
        onChange={(event) => setGuess(event.target.value)}
      ></input>
      <button>Submit</button>
    </form>
  );
}

export default Guess;
