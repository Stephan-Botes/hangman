import React from 'react';

// Word component with destructured properties, to be used in the display
const Word = ({selectedWord, correctLetters}) => {
    return (
        <div className="word">
            {/* Maps through each letter in the selected word */}
            {selectedWord.split('').map((letter, i) => {
                return (
                    // Adding the key as index for each letter in the map
                    <span className="letter" key={i}>
                        {/* Condition that checks if the current letter in the loop is in the correctLetters array */}
                        {/* if it is, displays the correct letter in the span, otherwise a blank */}
                        {correctLetters.includes(letter) ? letter : ''}
                    </span>
                )
            })}
        </div>
    )
}

export default Word
