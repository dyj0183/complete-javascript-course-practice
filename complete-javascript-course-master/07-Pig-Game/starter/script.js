// code by Yu-Chun Tung

'use strict';

const rollDice = document.querySelector('.btn--roll');
const hold = document.querySelector('.btn--hold');
const image = document.querySelector('.dice');
const p1Player = document.querySelector('.player--0');
const p2Player = document.querySelector('.player--1');
const p1TotalScore = document.querySelector('#score--0');
const p2TotalScore = document.querySelector('#score--1');
const p1CurrentSocre = document.querySelector('#current--0');
const p2CurrentSocre = document.querySelector('#current--1');

let p1Score = 0;
let p2Score = 0;
let turn = 1;

p1CurrentSocre.textContent = 0;
p2CurrentSocre.textContent = 0;
p1TotalScore.textContent = 0;
p2TotalScore.textContent = 0;

// when users click on roll dice, it will call this function
rollDice.addEventListener('click', function () {

    // update the dice image based on the number of random dice
    // return an interger between 1 - 6
    const randomDice = Math.floor(Math.random() * 6) + 1;
    image.src = `dice-${randomDice}.png`;

    // if dice number equals to 1, score goes back to 0, also check the turn to make sure it is for p1 or p2
    if (randomDice !== 1 && turn === 1) {
        p1Score += randomDice;
        console.log(typeof p1CurrentSocre.textContent);
    } else if (randomDice === 1 && turn === 1) {
        p1Score = 0;
        // change from player1 to player2
        turn = 2;
        // update the CSS 
        p1Player.classList.remove('player--active');
        p2Player.classList.add('player--active');
    } else if (randomDice !== 1 && turn === 2) {
        p2Score += randomDice;
    } else {
        p2Score = 0;
        turn = 1;
        p1Player.classList.add('player--active');
        p2Player.classList.remove('player--active');
    }

    // update the current socre on the game board
    p1CurrentSocre.textContent = p1Score;
    p2CurrentSocre.textContent = p2Score;
});

hold.addEventListener('click', function () {
    if (turn === 1) {
        p1TotalScore.textContent = Number(p1TotalScore.textContent) + p1Score;
        p1CurrentSocre.textContent = 0;
        p1Score = 0

        // change from player1 to player2
        turn = 2;
        // update the CSS 
        p1Player.classList.remove('player--active');
        p2Player.classList.add('player--active');
    } else {
        p2TotalScore.textContent = Number(p2TotalScore.textContent) + p2Score;
        p2CurrentSocre.textContent = 0;
        p2Score = 0;

        // change from player2 to player1
        turn = 1;
        // update the CSS 
        p1Player.classList.add('player--active');
        p2Player.classList.remove('player--active');
    }
})