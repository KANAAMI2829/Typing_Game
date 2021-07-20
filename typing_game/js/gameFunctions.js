'use strict';

// タイマー処理
function updateTimer() {
  // StartTimeはcountDownAnimation()にて値が代入される
  const TIME_LEFT = StartTime + TimeLimit - Date.now();
  TIMER.textContent = (TIME_LEFT / 1000).toFixed(2);

  const TIMEOUT_ID = setTimeout(() => {
    updateTimer();
  }, 10)

  if (isPlaying === false) {
    clearTimeout(TIMEOUT_ID);
    TIMER.textContent = '0.00';
  }

  if (TIME_LEFT < 0) {
    clearTimeout(TIMEOUT_ID);
    isPlaying = false;
    TIMER.textContent = '0.00';
    finishAnimation();
  }
}

// 例：ひらがな => hiragana
function convertHiraganaIntoRomaji(hiragana, romaji) {
  let Hiragana_ThreeLetters;
  let Hiragana_TwoLetters;
  let Hiragana_OneLetter;

  for (let i = 0; i < hiragana.length; i++) {
    Hiragana_ThreeLetters = hiragana[i] + hiragana[i + 1] + hiragana[i + 2];
    Hiragana_TwoLetters   = hiragana[i] + hiragana[i + 1];
    Hiragana_OneLetter    = hiragana[i];

    if (hiragana[i].match(/\w/g) !== null) {
      romaji = romaji + hiragana[i];
    } else if (Object.keys(ROMAJI_TABLE_4).indexOf(Hiragana_ThreeLetters) !== -1) {
      romaji = romaji + ROMAJI_TABLE_4[Hiragana_ThreeLetters][0];
      i += 2;
    } else if (Object.keys(ROMAJI_TABLE_3).indexOf(Hiragana_TwoLetters) !== -1) {
      romaji = romaji + ROMAJI_TABLE_3[Hiragana_TwoLetters][0];
      i++;
    } else if (Object.keys(ROMAJI_TABLE_2).indexOf(Hiragana_TwoLetters) !== -1) {
      romaji = romaji + ROMAJI_TABLE_2[Hiragana_TwoLetters][0];
      i++;
    } else {
      romaji = romaji + ROMAJI_TABLE_1[Hiragana_OneLetter][0];
    }
  }
  return romaji;
}

// 受け取った文字列にROMAJI_TABLEのキーと同じ部分があるかを探す
function typeHiraganaSearch(next_three_hiragana) {
  hiragana = TYPED_HIRAGANA.textContent + NOW_HIRAGANA.textContent + HIRAGANA.textContent;
  if (isNaN(isNaN(next_three_hiragana)) !== true && HIRAGANA.textContent === '') return;
  let next_two_hiragana = next_three_hiragana.slice(0, 2);
  let next_hiragna = next_three_hiragana.slice(0, 1);
  if (Object.keys(ROMAJI_TABLE_4).indexOf(next_three_hiragana) !== -1) 
  return String(next_three_hiragana);
  if (Object.keys(ROMAJI_TABLE_3).indexOf(next_two_hiragana) !== -1)
  return String(next_two_hiragana);
  if (Object.keys(ROMAJI_TABLE_2).indexOf(next_two_hiragana) !== -1)
  return String(next_two_hiragana);
  return String(next_hiragna);
}

function setReibun() {
  JAPANESE.textContent = Random_Reibun[Now_Reibun_Number][1];
  HIRAGANA.textContent = Random_Reibun[Now_Reibun_Number][0];
  ROMAJI.textContent   = convertHiraganaIntoRomaji(HIRAGANA.textContent, ROMAJI.textContent);
  NOW_HIRAGANA.textContent = '';
  TYPED_HIRAGANA.textContent = '';
  TYPED_ROMAJI.textContent = '';
  NOW_HIRAGANA.textContent = typeHiraganaSearch(HIRAGANA.textContent[0] + HIRAGANA.textContent[1] + HIRAGANA.textContent[2]);
  HIRAGANA.textContent = HIRAGANA.textContent.replace(NOW_HIRAGANA.textContent,'');
  Now_Reibun_Number++;
}

function replaceReibun(romaji_index, romaji_length) {
  if (romaji_index === romaji_length) {
    if (ENmode === true && ROMAJI.style.color === 'whitesmoke') {
      const CORRECT = document.getElementById('Correct');
      CorrectCount++;
      CORRECT.textContent = CorrectCount;
    }
    if (ENmode) setReibunEN();
    else if (PGmode) setReibunPG();
    else setReibun();
    TypedKey = '';
    Hiragana_Index = 0;
    Romaji_Index = 0;
  }
}

// シャッフルアルゴリズムはFisher-Yates shuffleを使用
function shuffleReibun(array) {
  for (let i = array.length - 1; i >= 0; i--) {
   const j = Math.floor(Math.random() * (i + 1));
   [array[i], array[j]] = [array[j], array[i]];
 }
  return array;
}

// 現在打つべき文字と打ち終わった文字の追跡
function changeTypedHiraganaColor(next_hiragana) {
  function changeColor(typed_hiragana) {
  TYPED_HIRAGANA.textContent = typed_hiragana;
  NOW_HIRAGANA.textContent = '';
  NOW_HIRAGANA.textContent = next_hiragana;
  }
  if (next_hiragana === undefined) next_hiragana = '';

  Typed_Hiragana = TYPED_HIRAGANA.textContent + NOW_HIRAGANA.textContent;
  if (next_hiragana.length === 1 && Number(NOW_HIRAGANA.textContent.length) === 2) {
    let x = next_hiragana;
    if (x === 'ゃ' || x === 'ゅ' || x === 'ょ' || x === 'ぁ' || x === 'ぃ' || x === 'ぅ' || x === 'ぇ' || x === 'ぉ') {
      Typed_Hiragana = TYPED_HIRAGANA.textContent + NOW_HIRAGANA.textContent.slice(0, 1);
      changeColor(Typed_Hiragana);
      return;
    }
    changeColor(Typed_Hiragana)
    HIRAGANA.textContent = HIRAGANA.textContent.replace(next_hiragana,'');
  } else {
    changeColor(Typed_Hiragana);
    HIRAGANA.textContent = HIRAGANA.textContent.replace(next_hiragana,'');
  }
}

function changeTypedRomajiColor(romaji) {
  Typed_Romaji = TYPED_ROMAJI.textContent;
  TYPED_ROMAJI.textContent = Typed_Romaji + romaji[0];
  ROMAJI.textContent = romaji.slice(1);
}

function filterInputKey(type_key) {
  if (type_key.length >= 2) {
    return true;
  }
  if (type_key.match(/[^\s！!？?＆&％%＄$＃#　 、,。.＝=＋+-ー＊*＜<＞>｜|〜~・/：:；;（(）)『{』＠@}]/g) === null) { 
    return false;
  }
  if (type_key.match(/\W/g) !== null) {
    return true;
  }
  return false;
}

function init() {
  Now_Reibun_Number = 0;
  Hiragana_Index = 0;
  Romaji_Index = 0;
  GoodCount = 0;
  MissCount = 0;
  TypedKey = '';
  isPlaying = false;
  isReady = true;
  COUNT_DOWN_NUMBER.textContent = '';
  JAPANESE.textContent = '';
  HIRAGANA.textContent = '';
  NOW_HIRAGANA.textContent = '';
  TYPED_HIRAGANA.textContent = '';
  ROMAJI.textContent = '';
  TYPED_ROMAJI.textContent = '';
  TIMER.textContent = '0.00';
}

// この処理を通らないとゲームを始められない(PG,ENも同様)
function gamePreparation(type_key) {
  if (type_key.match(/\s/g) !== null) {
    if (isPlaying === true || isReady === false) return false;
    init();
    isReady = false;
    Random_Reibun = shuffleReibun(JP_REIBUN_TABLE);
    COUNT_DOWN_NUMBER.textContent = '3';
    countDownAnimation(COUNT_DOWN_NUMBER.textContent);
    return true;
  }
  return false;
}

function startOver() {
  init();
  isReady = true;
  HIRAGANA_SPACE.removeAttribute('hidden');
  TYPED_HIRAGANA.style.fontSize = '26px';
  ROMAJI.style.color = '#a7b1be';
  COUNT_DOWN_NUMBER.textContent = '';
  GOOD.textContent = '0';
  MISS.textContent = '0';
  WPM.textContent = '0';
  ACCURACY.textContent = '0';
  SCORE.textContent = '0';
  RANK.textContent = '';
  JAPANESE.textContent = 'スペースキーを押してスタート';
  CorrectCount = 0;
  if (ENmode === true) document.getElementById('Correct').textContent = '0';
}

// ここでのswitch文はバグを招きかねないので不使用
function judgeRank(score) {
  score = Number(score);
  if (ENmode === true) return judgeEN();
  else if (PGmode === true) return judgePG(score);
  else {
    if (score < 25) {
      RANK.style.fontSize = '170px';
      return 'G';
    } else if (score >= 25 && score < 50) {
      RANK.style.fontSize = '170px';
      return 'F';
    } else if (score >= 50 && score < 75) {
      RANK.style.fontSize = '170px';
      return 'E';
    } else if (score >= 75 && score < 100) {
      RANK.style.fontSize = '170px';
      return 'D';
    } else if (score >= 100 && score < 125) {
      RANK.style.fontSize = '170px';
      return 'C';
    } else if (score >= 125 && score < 150) {
      RANK.style.fontSize = '170px';
      return 'B';
    } else if (score >= 150 && score < 175) {
      RANK.style.fontSize = '170px';
      return 'B+';
    } else if (score >= 175 && score < 200) {
      RANK.style.fontSize = '170px';
      return 'A';
    } else if (score >= 200 && score < 225) {
      RANK.style.fontSize = '170px';
      return 'A+';
    } else if (score >= 225 && score < 250) {
      RANK.style.fontSize = '170px';
      return 'S';
    } else if (score >= 250 && score < 275) {
      RANK.style.fontSize = '170px';
      return 'S+';
    } else if (score >= 275 && score < 300) {
      RANK.style.fontSize = '170px';
      return 'SS';
    } else if (score >= 300 && score < 325) {
      RANK.style.fontSize = '170px';
      return 'SS+';
    } else if (score >= 325 && score < 350) {
      RANK.style.fontSize = '170px';
      return 'SSS';
    } else if (score >= 350 && score < 375) {
      RANK.style.fontSize = '160px';
      return 'SSS+';
    } else if (score >= 375 && score < 400) {
      RANK.style.fontSize = '170px';
      return 'X';
    } else if (score >= 400 && score < 425) {
      RANK.style.fontSize = '170px';
      return 'X+';
    } else if (score >= 425 && score < 450) {
      RANK.style.fontSize = '170px';
      return 'XX';
    } else if (score >= 450 && score < 475) {
      RANK.style.fontSize = '170px';
      return 'XX+';
    } else if (score >= 475 && score < 500) {
      RANK.style.fontSize = '160px';
      return 'Fast';
    } else if (score >= 500 && score < 525) {
      RANK.style.fontSize = '140px';
      return 'Quick';
    } else if (score >= 525 && score < 550) {
      RANK.style.fontSize = '140px';
      return 'Adept';
    } else if (score >= 550 && score < 575) {
      RANK.style.fontSize = '130px';
      return 'Expert';
    } else if (score >= 575 && score < 600) {
      RANK.style.fontSize = '140px';
      return 'Sonic';
    } else if (score >= 600 && score < 625) {
      RANK.style.fontSize = '130px';
      return 'Master';
    } else if (score >= 625 && score < 650) {
      RANK.style.fontSize = '140px';
      return 'Comet';
    } else if (score >= 650 && score < 675) {
      RANK.style.fontSize = '120px';
      return 'Thunder';
    } else if (score >= 675 && score < 700) {
      RANK.style.fontSize = '150px';
      return 'Nova';
    } else if (score >= 700 && score < 725) {
      RANK.style.fontSize = '110px';
      return 'Neutrino';
    } else if (score >= 725 && score < 750) {
      RANK.style.fontSize = '120px';
      return 'Godhand';
    } else if (score >= 750) {
      RANK.style.fontSize = '150px';
      return 'Zeus';
    }
  }
}
