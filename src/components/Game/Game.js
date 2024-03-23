import React from "react";
import Guess from "../Guess/Guess";

import { randomSelector } from "../../utilities";
import { WORDS } from "../../guesswords";

const wordToGuess = randomSelector(WORDS);

console.log({ wordToGuess });

function Game() {
  return <p>hello</p>;
}

export default Game;
