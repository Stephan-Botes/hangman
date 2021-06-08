// Function that controls how long a notification is displayed on the screen
// by toggling a setter for 2 seconds
export function showNotification(setter) {
  setter(true);
  setTimeout(() => {
    setter(false);
  }, 2000);
}

// Function that is used to check the current game status
export function checkStatus(correct, wrong, word) {
  let status = 'win';

  // Condition that checks ff correct letters doesn't include all the letters of the word yet, status is blank
  word.split('').forEach(letter => {
    if(!correct.includes(letter)){
      status = '';
    }
  });
  
  // Condition if the user lost - If incorrect guesses pass 10
  if(wrong.length === 10) status = 'lose';

  return status
}
