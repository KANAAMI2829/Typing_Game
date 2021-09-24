'use strict';

const INPUT_NAME      = document.getElementById('input_name');
const INPUT_PASS      = document.getElementById('input_pass');
const ERROR_MESSAGE   = document.getElementById('error_message');
const BUTTON_PASSVIEW = document.getElementById('button_passview');

INPUT_NAME.addEventListener('input', () => {if (ERROR_MESSAGE !== null) ERROR_MESSAGE.remove()});

INPUT_PASS.addEventListener('input', () => {if (ERROR_MESSAGE !== null) ERROR_MESSAGE.remove()});

BUTTON_PASSVIEW.addEventListener('click', (e) => {
  e.preventDefault();
  if (INPUT_PASS.type === 'password') {
    INPUT_PASS.type = 'text';
    BUTTON_PASSVIEW.textContent = '非表示';
  } else {
    INPUT_PASS.type = 'password';
    BUTTON_PASSVIEW.textContent = '表示';
  }
});
