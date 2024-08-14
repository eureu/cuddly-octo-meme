
let score = JSON.parse(localStorage.getItem('score')) || {
  wins: 0,
  losses: 0, 
  ties: 0
};

function updateScore() {
document.querySelector('.js-score').innerHTML = `Wins: ${score.wins} Losses: ${score.losses} Ties: ${score.ties}`;
};

function showResult(text) {
document.querySelector('.js-result').innerText = text
};

function showMoves(myMove, computerMove) {
document.querySelector('.js-moves').innerText = `You ${myMove} - ${computerMove} Computer`
}

updateScore();


function pickComputerMove() {
const randomNumber = Math.random();
if (randomNumber > 0 && randomNumber < 1/3) {
  return 'rock';
} else if (randomNumber >= 1/3 && randomNumber < 2/3) {
  return 'paper';
} else if (randomNumber >= 2/3 && randomNumber < 1) {
  return 'scissors';
}
}

function getResult(myMove) {
const computerMove = pickComputerMove();
let result = '';
if (myMove === 'rock') {
  if (computerMove === 'rock') {
    result = 'Tie.';
  } else if (computerMove === 'paper') {
    result = 'Lose.';
  } else if (computerMove === 'scissors') {
    result = 'Win.';
  }
} else if (myMove === 'paper') {
  if (computerMove === 'rock') {
    result = 'Win.';
  } else if (computerMove === 'paper') {
    result = 'Tie.';
  } else if (computerMove === 'scissors') {
    result = 'Lose.';
  }
} else if (myMove === 'scissors') {
  if (computerMove === 'rock') {
    result = 'Lose.';
  } else if (computerMove === 'paper') {
    result = 'Win.';
  } else if (computerMove === 'scissors') {
    result = 'Tie.';
  }
}
if (result === 'Win.') {
  score.wins++;
} else if (result === 'Lose.') {
  score.losses++;
} else if (result === 'Tie.') {
  score.ties++;
}

localStorage.setItem('score', JSON.stringify(score));

updateScore();
showResult(result);
showMoves(myMove, computerMove);

// alert(`You choose ${myMove}. Computer choose ${computerMove}. ${result}\n
// Wins: ${score.wins} Losses: ${score.losses} Ties: ${score.ties}`);
}

const interval = setInterval(
  function() {
    myMove = pickComputerMove();
    getResult(myMove);
  },

5000);
clearInterval(interval);

document.querySelector('.js-rock-button').addEventListener('click', () => {
  getResult('rock');
});

document.querySelector('.js-paper-button').addEventListener('click', () => {
  getResult('paper');
});

document.querySelector('.js-scissors-button').addEventListener('click', () => {
  getResult('scissors');
});

document.body.addEventListener('keydown', (event) => {
  if (event.key === 'r') {
    getResult('rock');
  } else if (event.key === 'p') {
    getResult('paper');
  } else if (event.key === 's') {
    getResult('scissors');
  }
});