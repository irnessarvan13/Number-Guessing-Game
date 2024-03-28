'use strict';

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highScore = 0;

//Using the DRY principle
const displayMessage = (message) => {
	document.querySelector('.message').textContent = message;
};

//game logic to make the game work
document.querySelector('.check').addEventListener('click', function () {
	const guess = Number(document.querySelector('.guess').value);
	console.log(guess);

	if (!guess) {
		displayMessage('❌ No Number! ❌');
	} else if (guess === secretNumber) {
		displayMessage('✅ Correct Number! ✅');
		document.querySelector('.number').textContent = secretNumber;
		document.querySelector('body').style.backgroundColor = '#60b347';
		document.querySelector('.number').style.width = '30rem';

		// Update high score
		if (score > highScore) {
			highScore = score;
			document.querySelector('.highscore').textContent = highScore;
		}
	} else if (guess !== secretNumber) {
		if (score > 1) {
			displayMessage(guess > secretNumber ? '❌ Too high ❌' : '❌ Too Low ❌');
			score -= 1;
			document.querySelector('.score').textContent = score;
		} else {
			displayMessage('You Lose💔');
			document.querySelector('.score').textContent = 0;
		}
	}
});

// change game back to normal after guessing the right number.
document.querySelector('.again').addEventListener('click', function () {
	score = 20;
	secretNumber = Math.trunc(Math.random() * 20) + 1;

	document.querySelector('body').style.backgroundColor = '#222';
	document.querySelector('.number').style.width = '15rem';
	displayMessage('Start Guessing...');
	document.querySelector('.score').textContent = score;
	document.querySelector('.number').textContent = '?';
	document.querySelector('.guess').value = '';
});

//Previous code did not meet the DRY principle.
// else if (guess > secretNumber) {
//     if (score > 1) {
//         document.querySelector('.message').textContent = '❌ Too high ❌';
//         score -= 1;
//         document.querySelector('.score').textContent = score;
//     } else {
//         document.querySelector('.message').textContent = 'You Lose💔';
//         document.querySelector('.score').textContent = 0;
//     }
// } else if (guess < secretNumber) {
//     if (score > 1) {
//         document.querySelector('.message').textContent = '❌ Too Low ❌';
//         score -= 1;
//         document.querySelector('.score').textContent = score;
//     }
