type HangmanWordProps = {
  wordToGuess: string;
  guessedLetters: string[];
  reveal?: boolean;
};

export function HangmanWord({ wordToGuess, reveal = false, guessedLetters }: HangmanWordProps) {
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
          <span
            style={{
              visibility: guessedLetters.includes(letter) || reveal ? "visible" : "hidden",
              color: !guessedLetters.includes(letter) && reveal ? "tomato" : "black",
            }}
          >
            {letter}
          </span>
        </span>
      ))}
    </div>
  );
}
