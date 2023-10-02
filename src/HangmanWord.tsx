type HangmanWordProps = {
  wordToGuess: string;
  guessedLetters: string[];
};

export function HangmanWord({ wordToGuess, guessedLetters }: HangmanWordProps) {
  return (
    <div
      style={{
        display: "flex",
        gap: "2rem",
        fontSize: "6rem",
        fontWeight: "bold",
        textTransform: "uppercase",
        fontFamily: "monospace",
      }}
    >
      {wordToGuess.split("").map((letter, index) => (
        <span key={index} style={{ borderBottom: ".1em solid black" }}>
          <span style={{ visibility: guessedLetters.includes(letter) ? "visible" : "hidden" }}>{letter}</span>
        </span>
      ))}
    </div>
  );
}
