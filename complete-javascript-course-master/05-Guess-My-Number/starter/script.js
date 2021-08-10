/*************************
 *  Code by Yu-Chun Tung 
 *************************/
'use strict';

let secretNumber = Math.trunc(Math.random() * 20);
console.log(secretNumber);

let attempt = 0;
let highScore = 0;

document.querySelector('.check').addEventListener('click', function () {

    attempt++;
    // console.log(attempt);

    // in order to compare, need to turn into number
    const guess = Number(document.querySelector('.guess').value);
    // console.log(guess);
    // console.log(typeof guess);

    if (!guess) {
        document.querySelector('.message').textContent = "Please enter a valid number";
    } else if (guess < 1) {
        document.querySelector('.message').textContent = "Number must be greater or equal to 1";
    } else if (guess >= 20) {
        document.querySelector('.message').textContent = "Number must be smaller than 20";
    } else if (guess < secretNumber) {
        document.querySelector('.message').textContent = "Guess higher";
    } else if (guess > secretNumber) {
        document.querySelector('.message').textContent = "Guess lower";
    } else {
        document.querySelector('.message').textContent = `Great job! You took ${attempt} attempts to finish!`;
        document.querySelector('.number').textContent = secretNumber;
        document.querySelector('body').style.backgroundColor = "green";

        if (document.querySelector('.score').textContent > document.querySelector('.highscore').textContent) {
            document.querySelector('.highscore').textContent = document.querySelector('.score').textContent;
        }
    }
})

document.querySelector('.again').addEventListener('click', function () {
    secretNumber = Math.trunc(Math.random() * 20);
    console.log(`new secretNumber: ${secretNumber}`);

    attempt = 0;

    document.querySelector('.number').textContent = "?";
    document.querySelector('.message').textContent = "Starting guessing...";
    document.querySelector('.guess').value = "";
})