"use strict"

const generate = document.querySelector('.generate');
const number = document.querySelector('.number');
let  x = 0;

window.addEventListener('load', () =>{
    makeNumber();
})

generate.addEventListener('click', () => {
    makeNumber();
})

function makeNumber() {
    x = Math.floor((Math.random() * 100) + 1);
    number.innerText = x;
}