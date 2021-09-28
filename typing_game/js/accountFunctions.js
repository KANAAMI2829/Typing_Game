'use strict';

function goAccountInfo() {
  isAnimationNow = true;
  ACCOUNTINFO_POPUP.removeAttribute('hidden');
  ACCOUNTINFO_POPUP.animate({
    opacity: [0, 1]
  }, {
    duration: 500,
    easing: 'ease',
    fill: 'forwards'
  })
  setTimeout(() => isAnimationNow = false, 500);
}

function closeAccountAnimation() {
  isAnimationNow = true;
  ACCOUNTINFO_POPUP.animate({
    opacity: [1, 0]
  }, {
    duration: 500,
    easing: 'ease',
    fill: 'forwards'
  })
  setTimeout(() => {
    isAnimationNow = false;
    ACCOUNTINFO_POPUP.setAttribute('hidden', '');
  }, 500);
}

if (isLogin) {
  ACCOUNT_CLOSE.addEventListener('click', () => {if (!isAnimationNow) closeAccountAnimation()});
  ACCOUNT_BACKGROUND.addEventListener('click', () => {if (!isAnimationNow) closeAccountAnimation()});
}
