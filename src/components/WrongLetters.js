import React from 'react'

// WrongLetters component, with destructured props, that will display all the wrong selected letters
const WrongLetters = ({wrongLetters}) => {
    return (
        <div className="wrong-letters-container">
            <div>
                {/* Condition that starts to display the "wrong" heading if a wrong letter was selected */}
                {wrongLetters.length > 0 &&
                <p>Wrong</p>
                }

                {/* Displays the wrong letters array */}
                {wrongLetters
                    .map((letter, i) => <span key={i}>{letter}</span>)
                    // Condition that splits the displayed wrong letters up if there are more than 1
                    .reduce((prev, curr) => prev === null ? [curr] : [prev, ', ', curr], null)}
            </div>
        </div>
    )
}

export default WrongLetters
