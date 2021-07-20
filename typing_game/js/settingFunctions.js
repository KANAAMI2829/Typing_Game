'use strict';

function goSettings() {
  if (isSetting === false && isPlaying === false) {
    if (isReady === false && isRestartReady === false) return;
    isSetting = true;
    settingsAnimation();
  }
}

function returnHome() {
  if (isRestartReady) {
    restartAnimation();
    isRestartReady = false;
    return false;
  }

  if (isPlaying === true) startOver();

  if (isSetting !== true) return;

  if (GAME_MODE.value === 'ja') {
    GOOD_COUNTER.innerHTML = '打鍵数: <span id="Good">0</span>';
    ACCURACY_RESULT.innerHTML = '正確率: <span id="Accuracy">0</span>%';
    GOOD = document.getElementById('Good');
    ACCURACY = document.getElementById('Accuracy');
    ENmode = false;
    PGmode = false;
  } else if (GAME_MODE.value === 'en') {
    GOOD_COUNTER.innerHTML = '正答数: <span id="Correct">0</span>';
    ACCURACY_RESULT.innerHTML = '正答率: <span id="Rate">0</span>%';
    ENmode = true;
    PGmode = false;
  } else if (GAME_MODE.value === 'pg') {
    GOOD_COUNTER.innerHTML = '打鍵数: <span id="Good">0</span>';
    ACCURACY_RESULT.innerHTML = '正確率: <span id="Accuracy">0</span>%';
    GOOD = document.getElementById('Good');
    ACCURACY = document.getElementById('Accuracy');
    PGmode = true;
    ENmode = false;
  }

  TimeLimit = Number(TIME_LIMIT_VALUE.value) * 1000;
  isSetting = false;
  returnAnimation();

  if (isRestartReady) {
    restartNoneAnimation();
    isRestartReady = false;
  }
}

function selectChange() {
  if (GAME_MODE.value === 'ja') {
    EN_DTL.setAttribute('hidden', '');
    PG_DTL.setAttribute('hidden', '');
  }
  else if (GAME_MODE.value === 'en') {
    EN_DTL.removeAttribute('hidden');
    PG_DTL.setAttribute('hidden', '');
  }
  else if (GAME_MODE.value === 'pg') {
    EN_DTL.setAttribute('hidden', '');
    PG_DTL.removeAttribute('hidden');
  }
}
