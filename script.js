'use strict';

let score = 20;
let highScore = 0;

let secretNumber = Math.trunc(Math.random() * 20) + 1;



//Again Button
document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  highScore = 0;

secretNumber = Math.trunc(Math.random() * 20) + 1;

  displayMessage('Start guessing...');
  displayScore(score);

  displayNumber('?');
  displayBackground('#222');

  displayWidth('15rem');
  document.querySelector('.guess').value='';
});

//refactoring document.query

const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
}

const displayScore = function (score) {
  document.querySelector('.score').textContent = score;
}

const displayNumber = function (number) {
  document.querySelector('.number').textContent = number;
}

const displayBackground = function (color) {
  document.querySelector('body').style.backgroundColor = color;
}

const displayWidth = function (width) {
  document.querySelector('.number').style.width = width;
}


//check block
document.querySelector('.check').addEventListener('click', function () {

  const guess = Number(document.querySelector('.guess').value);
  console.log(guess,typeof guess);

  if (!guess) {

   // document.querySelector('.message').textContent = message;
    displayMessage('⛔ No Number');

  } else if (guess === secretNumber) {
    
    if (highScore < score) {
      highScore = score;

      document.querySelector('.highscore').textContent = highScore;

    }
      displayMessage('🎉 Correct');

      displayBackground('#60b347');

      displayWidth('30rem');

      displayNumber(secretNumber);

  } else if (guess !== secretNumber) {

    if(score>1){
      displayMessage(guess > secretNumber ? '📈 too High' : '📉 too Low');

    score--;
      displayScore(score);
      displayBackground('#222');

    } else {
      displayMessage('💥You Lost The Game');
    }
    
  } 
})