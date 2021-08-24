'use strict';

const MENU1       = document.getElementById('Menu1');
const MENU2       = document.getElementById('Menu2');
const MENU3       = document.getElementById('Menu3');
const SLIDES      = document.getElementById('Slides');
const INSTR_1     = document.getElementById('Instr_1');
const INSTR_2     = document.getElementById('Instr_2');
const INSTR_3     = document.getElementById('Instr_3');
const INSTR_4     = document.getElementById('Instr_4');
const MODE_1      = document.getElementById('Mode_1');
const MODE_2      = document.getElementById('Mode_2');
const MODE_3      = document.getElementById('Mode_3');
const MODE_4      = document.getElementById('Mode_4');
const MODE_5      = document.getElementById('Mode_5');
const MODE_6      = document.getElementById('Mode_6');
const MODE_7      = document.getElementById('Mode_7');
const MODE_8      = document.getElementById('Mode_8');
const MODE_9      = document.getElementById('Mode_9');
const MODE_10     = document.getElementById('Mode_10');
const MODE_11     = document.getElementById('Mode_11');
const RESULT_1    = document.getElementById('Result_1');
const RESULT_2    = document.getElementById('Result_2');
const RESULT_3    = document.getElementById('Result_3');
const RESULT_4    = document.getElementById('Result_4');
const RESULT_5    = document.getElementById('Result_5');
const LEFT_ARROW  = document.getElementById('Left_Arrow');
const RIGHT_ARROW = document.getElementById('Right_Arrow');

let isAnimationNow = false;
let menu_num = 0;
let nowSlideNum = 1;

RETURN_ARROW.addEventListener('click', () => {if (!isAnimationNow) returnHelpMenuAnimation()});
CLOSE_BUTTON.addEventListener('click', () => {if (!isAnimationNow) closeHelpAnimation()});
BACKGROUND.addEventListener('click', () => {if (!isAnimationNow) closeHelpAnimation()});
MENU1.addEventListener('click', () => {
  if (!isAnimationNow) {
    menu_num = 1;
    openSlide();
  }
});
MENU2.addEventListener('click', () => {
  if (!isAnimationNow) {
    menu_num = 2;
    openSlide();
  }
});
MENU3.addEventListener('click', () => {
  if (!isAnimationNow) {
    menu_num = 3;
    openSlide();
  }
});
LEFT_ARROW.addEventListener('click', () => {if (!isAnimationNow) changeSlide('left')});
RIGHT_ARROW.addEventListener('click', () => {if (!isAnimationNow) changeSlide('right')});

function goHelp() {
  isAnimationNow = true;
  isHelping = true;
  HELP_POPUP.removeAttribute('hidden');
  HELP_POPUP.animate({
    opacity: [0, 1]
  }, {
    duration: 500,
    easing: 'ease',
    fill: 'forwards'
  })
  setTimeout(() => isAnimationNow = false, 500);
}

function helpInit(pushed_button) {
  setTimeout (() => {
    if (pushed_button === 'close') HELP_POPUP.setAttribute('hidden', '');
    SLIDES.setAttribute('hidden', '');
    INSTR_1.setAttribute('hidden', '');
    INSTR_2.setAttribute('hidden', '');
    INSTR_3.setAttribute('hidden', '');
    INSTR_4.setAttribute('hidden', '');
    MODE_1.setAttribute('hidden', '');
    MODE_2.setAttribute('hidden', '');
    MODE_3.setAttribute('hidden', '');
    MODE_4.setAttribute('hidden', '');
    MODE_5.setAttribute('hidden', '');
    MODE_6.setAttribute('hidden', '');
    MODE_7.setAttribute('hidden', '');
    MODE_8.setAttribute('hidden', '');
    MODE_9.setAttribute('hidden', '');
    MODE_10.setAttribute('hidden', '');
    MODE_11.setAttribute('hidden', '');
    RESULT_1.setAttribute('hidden', '');
    RESULT_2.setAttribute('hidden', '');
    RESULT_3.setAttribute('hidden', '');
    RESULT_4.setAttribute('hidden', '');
    RESULT_5.setAttribute('hidden', '');
    RETURN_ARROW.setAttribute('hidden', '');
    LEFT_ARROW.setAttribute('hidden', '');
    MENU.removeAttribute('hidden');
    RIGHT_ARROW.removeAttribute('hidden');
    if (pushed_button === 'close') MENU.animate({opacity: 1}, {duration: 0, fill: 'forwards'});
    else MENU.animate({opacity: [0, 1]}, {duration: 300, easing: 'ease', fill: 'forwards'});
    INSTR_1.animate({opacity: 0}, {duration: 0, fill: 'forwards'});
    INSTR_2.animate({opacity: 0}, {duration: 0, fill: 'forwards'});
    INSTR_3.animate({opacity: 0}, {duration: 0, fill: 'forwards'});
    INSTR_4.animate({opacity: 0}, {duration: 0, fill: 'forwards'});
    MODE_1.animate({opacity: 0}, {duration: 0, fill: 'forwards'});
    MODE_2.animate({opacity: 0}, {duration: 0, fill: 'forwards'});
    MODE_3.animate({opacity: 0}, {duration: 0, fill: 'forwards'});
    MODE_4.animate({opacity: 0}, {duration: 0, fill: 'forwards'});
    MODE_5.animate({opacity: 0}, {duration: 0, fill: 'forwards'});
    MODE_6.animate({opacity: 0}, {duration: 0, fill: 'forwards'});
    MODE_7.animate({opacity: 0}, {duration: 0, fill: 'forwards'});
    MODE_8.animate({opacity: 0}, {duration: 0, fill: 'forwards'});
    MODE_9.animate({opacity: 0}, {duration: 0, fill: 'forwards'});
    MODE_10.animate({opacity: 0}, {duration: 0, fill: 'forwards'});
    MODE_11.animate({opacity: 0}, {duration: 0, fill: 'forwards'});
    RESULT_1.animate({opacity: 0}, {duration: 0, fill: 'forwards'});
    RESULT_2.animate({opacity: 0}, {duration: 0, fill: 'forwards'});
    RESULT_3.animate({opacity: 0}, {duration: 0, fill: 'forwards'});
    RESULT_4.animate({opacity: 0}, {duration: 0, fill: 'forwards'});
    RESULT_5.animate({opacity: 0}, {duration: 0, fill: 'forwards'});
    RETURN_ARROW.animate({opacity: 0}, {duration: 0, fill: 'forwards'});
    RIGHT_ARROW.animate({opacity: 0}, {duration: 0, fill: 'forwards'});
    isAnimationNow = false;
    isHelping = false;
    menu_num = 0;
    nowSlideNum = 1;
  }, 500);
}

function returnHelpMenuAnimation() {
  isAnimationNow = true;
  SLIDES.animate({
    opacity: [1, 0]
  }, {
    duration: 500,
    easing: 'ease',
    fill: 'forwards'
  })
  helpInit('return');
}

function closeHelpAnimation() {
  isAnimationNow = true;
  HELP_POPUP.animate({
    opacity: [1, 0]
  }, {
    duration: 500,
    easing: 'ease',
    fill: 'forwards'
  })
  helpInit('close');
}

function openSlide() {
  isAnimationNow = true;
  if (menu_num === 1) INSTR_1.removeAttribute('hidden');
  else if (menu_num === 2) MODE_1.removeAttribute('hidden');
  else if (menu_num === 3) RESULT_1.removeAttribute('hidden');
  SLIDES.removeAttribute('hidden');
  RETURN_ARROW.removeAttribute('hidden');
  SLIDES.animate({opacity: [1]}, {duration: 0,fill: 'forwards'});
  
  openSlideAnimation(menu_num);
  setTimeout(() => {  
    isAnimationNow = false;
  }, 550);
}

function changeSlide(pressed_arrow) {
  if (pressed_arrow === 'left') goToSlideLeftAnimation();
  else goToSlideRightAnimation();
}
