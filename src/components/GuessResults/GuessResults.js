function GuessResults({ guesses }) {
  return (
    <div id="guess-results">
      {guesses.map((guess) => (
        <p className="guess" key={crypto.randomUUID()}>
          {guess}
        </p>
      ))}
    </div>
  );
}

export default GuessResults;
