import React, { useEffect } from 'react';
import { checkStatus } from '../helpers/helpers';

// Popup component
const Popup = ({correctLetters, wrongLetters, selectedWord, setPlayable, playAgain}) => {
  let finalMessage = '';
  let finalMessageRevealWord = '';
  let playable = true;

  // Condition that updates the popup message according to the current game status and ends the game
  if(checkStatus(correctLetters, wrongLetters, selectedWord) === 'win' ) {
    finalMessage = 'Congratulations! You won! 😃';
    playable = false;
  } else if( checkStatus(correctLetters, wrongLetters, selectedWord) === 'lose' ) {
    finalMessage = 'Unfortunately you lost. 😕';
    finalMessageRevealWord = `...the word was: ${selectedWord}`;
    playable = false;
  }

  // useEffect() hook used to edit the side-effect everytime a letter is entered
  useEffect(() => {
    setPlayable(playable);
  });

  // Displays the message if it is set
  return (
    <div className="popup-container" style={finalMessage !== '' ? {display:'flex'} : {}}>
      <div className="popup">
        <h2>{finalMessage}</h2>
        <h3>{finalMessageRevealWord}</h3>
        <button onClick={playAgain}>Play Again</button>
      </div>
    </div>
  )
}

export default Popup
