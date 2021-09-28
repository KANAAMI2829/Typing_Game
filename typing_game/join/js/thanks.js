'use strict';

const COUNT_PAGE_TRANSITION = document.getElementById('count_page_transition');
let x = 3;

setInterval(() => {x--; COUNT_PAGE_TRANSITION.textContent = `${x}`;}, 1000);
setTimeout(() => {window.location.href = 'https://backdrop-kanaami.ssl-lolipop.jp/typing_event/typing_game/login/';}, 3000);
