'use strict';

function goAccountInfo() {
  if (isSetting === false && isPlaying === false) {
    if (isReady === false && isRestartReady === false) return;
    isSetting = true;
    accountInfoAnimation();
  }
}
