'use strict';

GAME_MODE.addEventListener('change', () => selectChange());

window.addEventListener('DOMContentLoaded', function() {
  if (isLogin === true) {
    alert('ログイン中です');
    setLastSettings(LAST_SETTINGS_DATA);
  }
})

function goSettings() {
  if (isSetting === false && isPlaying === false) {
    if (isReady === false && isRestartReady === false) return;
    isSetting = true;
    settingsAnimation();
  }
}

function setLastSettings(settingData) {
  const MODE          = settingData['mode'];
  const DETAIL        = settingData['detail'];
  const TIME_LIMIT    = settingData['time_limit'];
  const RANKING_STATE = settingData['ranking'];

  switch (MODE) {
    case 'ja': break;
    case 'en':
      GOOD_COUNTER.innerHTML = '正答数: <span id="Correct">0</span>';
      ACCURACY_RESULT.innerHTML = '正答率: <span id="Rate">0</span>%';
      STATE_MODE.textContent = '英単語学習';
      GAME_MODE.options[1].selected = true;
      ENmode = true;
      break;
    case 'pg':
      STATE_MODE.textContent = 'プログラミング';
      GAME_MODE.options[2].selected = true;
      PGmode = true;
      break;
    default:
      alert('エラーが発生しました。\nページを再読み込みしてください。');
      break;
  }

  switch (DETAIL) {
    case 'none': break;
    case 'jhs1':
      STATE_DETAIL.textContent = '〔中一〕';
      break;
    case 'jhs2':
      STATE_DETAIL.textContent = '〔中二〕';
      GRADE.options[1].selected = true;
      break;
    case 'jhs3':
      STATE_DETAIL.textContent = '〔中三〕';
      GRADE.options[2].selected = true;
      break;
    case 'hs1':
      STATE_DETAIL.textContent = '〔高一〕';
      GRADE.options[3].selected = true;
      break;
    case 'hs2':
      STATE_DETAIL.textContent = '〔高二〕';
      GRADE.options[4].selected = true;
      break;
    case 'hs3':
      STATE_DETAIL.textContent = '〔高三〕';
      GRADE.options[5].selected = true;
      break;
    case 'js' :
      STATE_DETAIL.textContent = '〔JavaScript〕';
      break;
    case 'c':
      STATE_DETAIL.textContent = '〔C言語〕';
      LANG.options[1].selected = true;
      break;
    default:
      alert('エラーが発生しました。\nページを再読み込みしてください。');
      break;
  }

  switch (Number(TIME_LIMIT)) {
    case 20:
      TIME_LIMIT_VALUE.options[0].selected = true;
      break;
    case 30:
      TIME_LIMIT_VALUE.options[1].selected = true;
      break;
    case 60: break;
    case 90:
      TIME_LIMIT_VALUE.options[3].selected = true;
      break;
    case 120:
      TIME_LIMIT_VALUE.options[4].selected = true;
      break;
    case 240: 
      TIME_LIMIT_VALUE.options[5].selected = true;
      break;
    case 600:
      TIME_LIMIT_VALUE.options[6].selected = true;
      break;
    default:
      alert('エラーが発生しました。\nページを再読み込みしてください。');
      break;
  }

  switch (RANKING_STATE) {
    case 'on': break;
    case 'off':
      RANKING.checked = false;
      break;
    default:
      alert('エラーが発生しました。\nページを再読み込みしてください。');
      break;
  }

  STATE_TIMELIMIT.textContent = String(TIME_LIMIT);
  TimeLimit = Number(TIME_LIMIT) * 1000;
}

function returnHome() {
  if (isRestartReady) {
    restartNoneAnimation();
    isRestartReady = false;
  }

  if (isPlaying === true) startOver();

  if (isSetting !== true) return;

  let setting_data = new FormData;

  setting_data.append('mode', `${GAME_MODE.value}`);
  setting_data.append('time_limit', `${TIME_LIMIT_VALUE.value}`);
  if (RANKING.checked) setting_data.append('ranking', `${RANKING.value}`);
  else setting_data.append('ranking', 'off');

  if (GAME_MODE.value === 'ja') {
    GOOD_COUNTER.innerHTML = '打鍵数: <span id="Good">0</span>';
    ACCURACY_RESULT.innerHTML = '正確率: <span id="Accuracy">0</span>%';
    STATE_MODE.textContent = '日本語';
    STATE_DETAIL.textContent = '';
    setting_data.append('detail', 'none');
    GOOD = document.getElementById('Good');
    ACCURACY = document.getElementById('Accuracy');
    ENmode = false;
    PGmode = false;
  } else if (GAME_MODE.value === 'en') {
    GOOD_COUNTER.innerHTML = '正答数: <span id="Correct">0</span>';
    ACCURACY_RESULT.innerHTML = '正答率: <span id="Rate">0</span>%';
    STATE_MODE.textContent = '英単語学習';
    setting_data.append('detail', `${GRADE.value}`);
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
    setting_data.append('detail', `${LANG.value}`);
    if (LANG.value === 'js') STATE_DETAIL.textContent = '〔JavaScript〕';
    if (LANG.value === 'c')  STATE_DETAIL.textContent = '〔C言語〕';
    GOOD = document.getElementById('Good');
    ACCURACY = document.getElementById('Accuracy');
    PGmode = true;
    ENmode = false;
  }
  
  STATE_TIMELIMIT.textContent = TIME_LIMIT_VALUE.value;
  TimeLimit = Number(TIME_LIMIT_VALUE.value) * 1000;

  if (isLogin) {
    let xhr = new XMLHttpRequest();
    xhr.open('POST', 'http://localhost:8888/typing_game/saveSettings.php');
    xhr.send(setting_data);
    xhr.addEventListener('error', () => {alert('設定情報の保存に失敗しました')});
  }

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
