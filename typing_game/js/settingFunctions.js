'use strict';

GAME_MODE.addEventListener('change', () => selectChange());

function goSettings() {
  if (isSetting === false && isPlaying === false) {
    if (isReady === false && isRestartReady === false) return;
    isSetting = true;
    settingsAnimation();
  }
}

function returnHome() {
  if (isRestartReady) {
    restartNoneAnimation();
    isRestartReady = false;
  }

  if (isPlaying === true) startOver();

  if (isSetting !== true) return;

  if (GAME_MODE.value === 'ja') {
    GOOD_COUNTER.innerHTML = '打鍵数: <span id="Good">0</span>';
    ACCURACY_RESULT.innerHTML = '正確率: <span id="Accuracy">0</span>%';
    STATE_MODE.textContent = '日本語';
    STATE_DETAIL.textContent = '';
    GOOD = document.getElementById('Good');
    ACCURACY = document.getElementById('Accuracy');
    ENmode = false;
    PGmode = false;
  } else if (GAME_MODE.value === 'en') {
    GOOD_COUNTER.innerHTML = '正答数: <span id="Correct">0</span>';
    ACCURACY_RESULT.innerHTML = '正答率: <span id="Rate">0</span>%';
    STATE_MODE.textContent = '英単語学習';
    if (GRADE.value === 'jhs1') STATE_DETAIL.textContent = '〔中一〕';
    if (GRADE.value === 'jhs2') STATE_DETAIL.textContent = '〔中二〕';
    if (GRADE.value === 'jhs3') STATE_DETAIL.textContent = '〔中三〕';
    if (GRADE.value === 'hs1')  STATE_DETAIL.textContent = '〔高一〕';
    if (GRADE.value === 'hs2')  STATE_DETAIL.textContent = '〔高二〕';
    if (GRADE.value === 'hs3')  STATE_DETAIL.textContent = '〔高三〕';
    ENmode = true;
    PGmode = false;
  } else if (GAME_MODE.value === 'pg') {
    GOOD_COUNTER.innerHTML = '打鍵数: <span id="Good">0</span>';
    ACCURACY_RESULT.innerHTML = '正確率: <span id="Accuracy">0</span>%';
    STATE_MODE.textContent = 'プログラミング';
    if (LANG.value === 'js') STATE_DETAIL.textContent = '〔JavaScript〕';
    if (LANG.value === 'c')  STATE_DETAIL.textContent = '〔C言語〕';
    GOOD = document.getElementById('Good');
    ACCURACY = document.getElementById('Accuracy');
    PGmode = true;
    ENmode = false;
  }
  
  STATE_TIMELIMIT.textContent = TIME_LIMIT_VALUE.value;
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
