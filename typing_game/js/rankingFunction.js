'use strict';

function goRanking() {
  if (isPlaying === false) {
    if (isReady === false && isRestartReady === false) return;
    if (isRanking) return;
    isRanking = true;
    rankingAnimation();
  }
}

function rankingGoSettings() {
  isRanking = false;
  let promise = new Promise((resolve, reject) => {
    RANKING_SCREEN.animate({
      opacity: [1, 0]
    }, {
      duration: 200,
      easing: 'ease',
      fill: 'forwards'
    })
    setTimeout(() => {
      RANKING_SCREEN.setAttribute('hidden', '');
      SETTINGS_SCREEN.removeAttribute('hidden');
      resolve();
    }, 250)
  })

  promise.then(() => {
    SETTINGS_SCREEN.animate({
      opacity: [0, 1]
    }, {
      duration: 300,
      easing: 'ease',
      fill: 'forwards'
    })
  })
}
