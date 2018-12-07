/* 
  GAME FUNCTION:
  - Player must qguess a number between a min and max
  - Player gets a certain mount of guesses
  - Notify player of guesses remaining  
  - Notify the player of the correct answer if loose
  - Let player choose to play again
*/

// Game values
let min = 1,
    max = 10,
    winningNum = getRandomNum(min, max),
    guessesLeft = 3;

// UI elemts
const game = document.querySelector('#game'),
      minNum  = document.querySelector('.min-num'),
      maxNum = document.querySelector('.max-num'),
      guessBtn = document.querySelector('#guess-btn'),
      guessInput = document.querySelector('#guess-input'),
      message = document.querySelector('.message');
      // validation = new RegExp("^(["+min+"-"+(max-1)+"]|"+max+")$");

// Assign UI min and max
minNum.textContent = min;
maxNum.textContent = max;

// Play again event listener
game.addEventListener('mousedown', function(e){
  if(e.target.className === 'play-again') {
    window.location.reload();
  }
});

guessBtn.addEventListener('click', function() {
  let guess = parseInt(guessInput.value);

  // Validate
  // if(!validation.test(guess)) {
  //   setMessage(`Please enter a number between ${min} and ${max}`);
  // }
  if (isNaN(guess) || guess < min || guess > max) {
    setMessage(`Please enter a number between ${min} and ${max}`, 'red');
  }

  // Check if won
  if (guess === winningNum) {
    gameOver(true, `${winningNum} is correct, YOU WIN!`);
  } else {
    guessesLeft -= 1;
    if (guessesLeft === 0) {
      gameOver(false, `Game Over, you lost. The correct number is ${winningNum}`);
    } else {
      guessInput.style.borderColor = 'red';

      // Clear input
      guessInput.value = '';
      // Game continue - answer wrong
      setMessage(`${guess} is not correct, ${guessesLeft} guesses left.`, 'red');
    }
  }
});

// Game over
function gameOver(won, msg) {
  let color;
  won === true ? color = 'green' : color = 'red';
  // Disable the input
  guessInput.disabled = true;
  // Change border color
  guessInput.style.borderColor = color;
  guessInput.style.color = color;
  //  Set Message
  // Game Over - Won
  setMessage(msg, color);

  // PLay again?
  guessBtn.value = 'Play again';
  guessBtn.className += 'play-again';
}

// Set winning num
function getRandomNum(min, max) {
  return Math.floor((Math.random()*(max-min+1)+min));
}

// Set Message
function setMessage(msg, color) {
  message.style.color = color;
  message.textContent = msg;
}