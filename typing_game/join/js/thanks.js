'use strict';

const COUNT_PAGE_TRANSITION = document.getElementById('count_page_transition');
let x = 5;

setInterval(() => {x--; COUNT_PAGE_TRANSITION.textContent = `${x}`;}, 1000);
setTimeout(() => {window.location.href = 'http://localhost:8888/typing_game/';}, 5000);
