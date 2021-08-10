/*************************
 *  Code by Yu-Chun Tung 
 *************************/
'use strict';

const showModal = document.querySelectorAll('.show-modal');
const modal = document.querySelector('.modal');
const closeModalBtn = document.querySelector('.close-modal');
const overlay = document.querySelector('.overlay');

for (let button of showModal) {
    button.addEventListener('click', function () {
        modal.classList.remove('hidden');
        overlay.classList.remove('hidden');
    })
}

closeModalBtn.addEventListener('click', function () {
    modal.classList.add('hidden');
    overlay.classList.add('hidden');
})

document.addEventListener('keydown', function (event) {
    console.log(event);
    if (event.code === "Escape") {
        modal.classList.add('hidden');
        overlay.classList.add('hidden');
    }
})