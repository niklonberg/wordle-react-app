import React from "react";
import GuessResults from "../GuessResults/GuessResults";
import Guess from "../Guess/Guess";

import { randomSelector } from "../../utilities";
import { WORDS } from "../../guesswords";

const wordToGuess = randomSelector(WORDS);

console.log({ wordToGuess });

function Game() {
  const [guesses, setGuesses] = React.useState([]);

  return (
    <>
      <GuessResults guesses={guesses} />
      <Guess guesses={guesses} setGuesses={setGuesses} />
    </>
  );
}

export default Game;
