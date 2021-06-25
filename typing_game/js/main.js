'use strict';

const SETTINGS_BUTTON   = document.getElementById('Settings_Button');
const SETTINGS_SCREEN   = document.getElementById('Settings_Screen');
const GAME_MODE         = document.getElementById('Game_Mode');
const TIME_LIMIT_VALUE  = document.getElementById('Time_Limit_Value');
const HOME_BUTTON       = document.getElementById('Home_Button');
const TYPING_GAME       = document.getElementById('Typing_Game');
const TIMER_SPACE       = document.getElementById('Timer_Space');
const TIMER             = document.getElementById('Timer');
const COUNT_DOWN        = document.getElementById('Count_Down');
const COUNT_DOWN_NUMBER = document.getElementById('Count_Down_Number');
const JAPANESE          = document.getElementById('Japanese');
const HIRAGANA_SPACE    = document.getElementById('Hiragana_Space');
const HIRAGANA          = document.getElementById('Hiragana');
const NOW_HIRAGANA      = document.getElementById('Now_Hiragana');
const TYPED_HIRAGANA    = document.getElementById('Typed_Hiragana');
const ROMAJI            = document.getElementById('Romaji');
const TYPED_ROMAJI      = document.getElementById('Typed_Romaji');
const MISS_ALERT        = document.getElementById('Miss_Alert');
const COUNT_SPACE       = document.getElementById('Count_Space');
const RANK_SPACE        = document.getElementById('Rank_Space');
const GOOD_COUNTER      = document.getElementById('Good_Counter');
const MISS_COUNTER      = document.getElementById('Miss_Counter');
const WPM_RESULT        = document.getElementById('WPM_Result');
const ACCURACY_RESULT   = document.getElementById('Accuracy_Result');
const SCORE_RESULT      = document.getElementById('Score_Result');
const RANK_RESULT       = document.getElementById('Rank_Result');
const GOOD              = document.getElementById('Good');
const MISS              = document.getElementById('Miss');
const WPM               = document.getElementById('WPM');
const ACCURACY          = document.getElementById('Accuracy');
const SCORE             = document.getElementById('Score');
const RANK              = document.getElementById('Rank');
const RESTART           = document.getElementById('Restart');

let TimeLimit = 30 * 1000;
let isSetting = false;
let isPlaying = false;
let isRestartReady = false;
let isReady = true;
let ENmode = false;
let PGmode = false;
let StartTime;
let Finish;
let TypeKey;
let TypedKey;
let Now_Hiragana;
let Hiragana_Index;
let Typed_Hiragana;
let Romaji;
let Romaji_Index;
let Typed_Romaji;
let Random_Reibun;
let Now_Reibun_Number;
let GoodCount;
let MissCount;

// 設定画面に行く
SETTINGS_BUTTON.addEventListener('click', () => {
  if (isSetting === false && isPlaying === false) {
    if (isReady === false && isRestartReady === false) return;
    isSetting = true;
    settingsAnimation();
  }
})

// 設定画面から元の画面に戻る
HOME_BUTTON.addEventListener('click', () => {
  if (isSetting !== true) return;
  if (GAME_MODE.value === 'ja') {
    ENmode = false;
    PGmode = false;
  } else if (GAME_MODE.value === 'en') {
    ENmode = true;
    PGmode = false;
  } else if (GAME_MODE.value === 'pg') {
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
})

// ゲーム中の処理
document.addEventListener('keydown', e => {
  if (isRestartReady) {
    if (e.key === 'Escape' || e.key.match(/\s/) !== null) {
      restartAnimation();
      isRestartReady = false;
      return false;
    }
  }
  if (isSetting) return;
  if (e.key === 'Escape' && isPlaying === true) startOver();

  if (ENmode === true && gamePreparationEN(e.key)) return;

  if (PGmode === true && gamePreparationPG(e.key)) return;

  if (PGmode === false && gamePreparation(e.key)) return;

  // [A-Za-z0-9]と指定された記号以外は通さない
  if (COUNT_DOWN_NUMBER.textContent === ''
  || JAPANESE.textContent === '' 
  || filterInputKey(e.key)
  || isPlaying === false
  || isRestartReady === true
  || isReady === true) {
    return;
  }

  TypeKey = `${ROMAJI_TABLE_1[`${e.key}`]}`;
  TypedKey = TypedKey + TypeKey;
  Typed_Romaji = TYPED_ROMAJI.textContent;
  Romaji = ROMAJI.textContent;
  GoodCount = GOOD.textContent;
  MissCount = MISS.textContent;
  Now_Hiragana = aimai();

  // 正誤判定処理
  if (TypeKey === Romaji[0]) {
    Romaji_Index++;
    GoodCount++;
    GOOD.textContent = GoodCount;
    changeTypedRomajiColor(ROMAJI.textContent);
    replaceReibun(Romaji_Index, Typed_Romaji.length + Romaji.length);
  } else {
    MissCount++;
    MISS.textContent = MissCount;
    ROMAJI.style.color = '#a7b1be';
    TypedKey = TypedKey.slice(0, -1);
    missAnimation();
  }
});
