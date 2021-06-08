// Required import files for the App component
import React, {useState, useEffect} from 'react';
import Header from './components/Header';
import Figure from './components/Figure';
import WrongLetters from './components/WrongLetters';
import Word from './components/Word';
import Popup from './components/Popup';
import Notification from './components/Notification';
import {showNotification as show} from './helpers/helpers'; // Name of showNotification is changed as it is already used
import './App.css';
import {words} from './dictionary.js';

// Selects a random word from the imported dictionary
let selectedWord = words[Math.floor(Math.random() * words.length)];

// Main App component
function App() {

    // Utilizes useState() hook to set the initial states of the application
    // This is the same as a class's constructor, but for functions
    const [playable, setPlayable] = useState(true);
    const [correctLetters, setCorrectLetters] = useState([]);
    const [wrongLetters, setWrongLetters] = useState([]);
    const [showNotification, setShowNotification] = useState(false);

    // Utilizes useEffect() hook used to interact with the page as side effects
    // (show correct and incorrect letters & win/ lose notifications)
    useEffect(() => {
            const handleKeydown = event => {
                const {key, keyCode} = event;

                // Condition that checks if the key pressed is a letter key
                if (playable && keyCode >= 65 && keyCode <= 90) {
                    const letter = key.toLowerCase();

                    // Condition that checks if the selected letter is a letter of the current word
                    if (selectedWord.includes(letter)) {

                        // Condition that checks if the selected correct letter hasn't already been selected yet
                        if (!correctLetters.includes(letter)) {
                            // Adds the new correct letter to the current displayed correct letters
                            setCorrectLetters(currentLetters => [...currentLetters, letter]);
                        } else {
                            // Notifies the user that the letter has already been selected
                            show(setShowNotification);
                        }
                    } else {
                        // Condition that checks if the wrong letter hasn't already been selected yet
                        if (!wrongLetters.includes(letter)) {
                            // Adds the new wrong letter to the current displayed wrong letters
                            setWrongLetters(currentLetters => [...currentLetters, letter]);
                        } else {
                            // Notifies the user that the letter has already been selected
                            show(setShowNotification);
                        }
                    }
                }
            }

            // Adds the above event listener for when a key is pressed
            window.addEventListener('keydown', handleKeydown);

            // Removes the added event listener to cleanup the application, otherwise it will become overpopulated
            // with event listeners everytime a button is pressed
            return () => window.removeEventListener('keydown', handleKeydown);
    }   // No array here will call the useEffect everytime the App render
        // An empty array will call it only on the initial render
        // Dependencies are used to allow it to be called on the correct instances
        , [correctLetters, wrongLetters, playable]);

    // Function used to control the play again button after a round is finished
    function playAgain() {
        // Resets playable status after the end-round popup
        setPlayable(true);
        // Resets arrays of letters
        setCorrectLetters([]);
        setWrongLetters([]);
        // Chooses a new random word from the dictionary and updates the selected word
        const random = Math.floor(Math.random() * words.length);
        selectedWord = words[random];
    }

    // Displays the components on the App
    return (
        <>
            <Header/>
            <div className="game-container">
                <Figure wrongLetters={wrongLetters}/>
                <WrongLetters wrongLetters={wrongLetters}/>
                <Word selectedWord={selectedWord} correctLetters={correctLetters}/>
            </div>
            <Popup correctLetters={correctLetters} wrongLetters={wrongLetters} selectedWord={selectedWord}
                   setPlayable={setPlayable} playAgain={playAgain}/>
            <Notification showNotification={showNotification}/>
        </>
    );
}

export default App;
