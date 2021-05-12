"use strict";
const LETTERS = "abcdefghijklmnopqrstuvwxyz";

// letters we have guessed
// the word itself
// correct letters (or calculate that)
// image to show based on the number of wrong guesses

function Word(props) {
  console.log('rendering Word')
  // if they have guessed the letter print it on the page
  // otherwise just show an empty slot
  const { word, guessedLetters} = props
  const wordDivs = []
  const counter = 1;
  for (const letter of word) {
    wordDivs.push(
      <div key={counter} className="letter-box">
        { guessedLetters.includes(letter) && letter }
      </div>
    )
    counter++;
  }
  return (
    <section>
      { wordDivs}
    </section>
  )
}
// [...guessedLetters, letter] Array that has all the elements from guessedLetters and then the letter value


// when someone clicks a letter button
// add that letter to my guessedLetters state
function Letters(props) {
  console.log('rendering Letters')
  const { guessedLetters, guessLetter} = props
  const letterButtons = []
  for (const letter of LETTERS) {
    letterButtons.push(
      <button
        key={letter}
        onClick={() => guessLetter(letter)}
        disabled={guessedLetters.includes(letter)} 
      >
        { letter }
      </button>
    )
  }
  return (
    <section className="letter-buttons">
      { letterButtons}
    </section>
  )
}

function Sharkwords(props) {
  console.log('rendering Sharkword')
  const guessLetter = (letter) => {
    if (!props.word.includes(letter)) { // wrong guess
      setNumWrong(numWrong + 1);
    }
    // prevLetters is the current state value of guessed letters
    // when this function is called
    setGuessedLetters(prevLetters => [...prevLetters, letter]);
  };

  const { word } = props // const word = props.word
  // uses React to add a state value that we call numWrong and a function to update
  const [ numWrong, setNumWrong ] = React.useState(0);
  // since both Word and Letters need the guessedLetters, we put this
  // in the parent component (which is this Sharkwords component)
  // and then will pass that value to the Word and Letters components
  const [ guessedLetters, setGuessedLetters ] = React.useState([]);

  return (
    <div>
      <img src={`static/images/guess${numWrong}.png`} />
      <Word guessedLetters={guessedLetters} word={word}/>
      <Letters guessedLetters={guessedLetters} guessLetter={guessLetter}/>
    </div>
  )
}

ReactDOM.render(
  <Sharkwords word="hello"/>,
  document.querySelector("#root")
)