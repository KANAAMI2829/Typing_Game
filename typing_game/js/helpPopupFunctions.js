'use strict';

const MENU1       = document.getElementById('Menu1');
const MENU2       = document.getElementById('Menu2');
const MENU3       = document.getElementById('Menu3');
const SLIDES      = document.getElementById('Slides');
const INSTR_1     = document.getElementById('Instr_1');
const INSTR_2     = document.getElementById('Instr_2');
const INSTR_3     = document.getElementById('Instr_3');
const LEFT_ARROW  = document.getElementById('Left_Arrow');
const RIGHT_ARROW = document.getElementById('Right_Arrow');

let isAnimationNow = false;
let menu_num = 0;
let nowSlideNum = 1;

CLOSE_BUTTON.addEventListener('click', () => {if (!isAnimationNow) closeHelpAnimation()});
BACKGROUND.addEventListener('click', () => {if (!isAnimationNow) closeHelpAnimation()});
MENU1.addEventListener('click', () => {
  if (!isAnimationNow) {
    menu_num = 1;
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
  setTimeout(() => {isAnimationNow = false}, 500);
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
  setTimeout (() => {
  HELP_POPUP.setAttribute('hidden', '');
  SLIDES.setAttribute('hidden', '');
  INSTR_1.setAttribute('hidden', '');
  INSTR_2.setAttribute('hidden', '');
  INSTR_3.setAttribute('hidden', '');
  LEFT_ARROW.setAttribute('hidden', '');
  MENU.removeAttribute('hidden');
  RIGHT_ARROW.removeAttribute('hidden');
  MENU.animate({opacity: 1}, {duration: 0, fill: 'forwards'});
  INSTR_1.animate({opacity: 0}, {duration: 0, fill: 'forwards'});
  INSTR_2.animate({opacity: 0}, {duration: 0, fill: 'forwards'});
  INSTR_3.animate({opacity: 0}, {duration: 0, fill: 'forwards'});
  RIGHT_ARROW.animate({opacity: 0}, {duration: 0, fill: 'forwards'});
  isAnimationNow = false;
  isHelping = false;
  menu_num = 0;
  nowSlideNum = 1;
  }, 500);
}

function openSlide() {
  isAnimationNow = true;
  SLIDES.removeAttribute('hidden');
  if (menu_num === 1) INSTR_1.removeAttribute('hidden');
  openSlideAnimation(menu_num);
  setTimeout(() => {
    isAnimationNow = false;
  }, 550);
}

function changeSlide(pressed_arrow) {
  if (nowSlideNum !== 1) LEFT_ARROW.removeAttribute('hidden');
  else if (menu_num === 1 && nowSlideNum === 3) RIGHT_ARROW.setAttribute('hidden', '');
  else LEFT_ARROW.setAttribute('hidden', '');

  if (pressed_arrow === 'left') goToSlideLeftAnimation();
  else goToSlideRightAnimation();
}
