'use strict';

function setReibunEN() {
  JAPANESE.textContent = Random_Reibun[Now_Reibun_Number][1];
  ROMAJI.textContent = Random_Reibun[Now_Reibun_Number][0];
  TYPED_ROMAJI.textContent = '';
  ROMAJI.style.color = 'whitesmoke';
  TYPED_HIRAGANA.style.fontSize = '20px';
  TYPED_HIRAGANA.style.color = '#666';
  TYPED_HIRAGANA.textContent = '※英訳してください'
  Now_Reibun_Number++;
}

function gamePreparationEN(type_key) {
  if (type_key.match(/\s/g) !== null) {
    if (isPlaying === true || isReady === false) return false;
    if (GRADE.value === 'jhs1') Random_Reibun = shuffleReibun(EN_REIBUN_TABLE_JHS_1);
    else if (GRADE.value === 'jhs2') Random_Reibun = shuffleReibun(EN_REIBUN_TABLE_JHS_2);
    else if (GRADE.value === 'jhs3') Random_Reibun = shuffleReibun(EN_REIBUN_TABLE_JHS_3);
    else if (GRADE.value === 'hs1')  Random_Reibun = shuffleReibun(EN_REIBUN_TABLE_HS_1);
    else if (GRADE.value === 'hs2')  Random_Reibun = shuffleReibun(EN_REIBUN_TABLE_HS_2);
    else if (GRADE.value === 'hs3')  Random_Reibun = shuffleReibun(EN_REIBUN_TABLE_HS_3);

    init();
    ROMAJI.style.color = 'whitesmoke';
    isReady = false;
    COUNT_DOWN_NUMBER.textContent = '3';
    countDownAnimation(COUNT_DOWN_NUMBER.textContent);
    return true;
  }
  return false;
}


function judgeEN() {
  const RATE = document.getElementById('Rate');
  let correct = CorrectCount;
  let miss = MissCount;
  let total_problems_num = correct + miss; 
  let rate = ((correct / total_problems_num) * 100.0).toFixed(1);
  let time = Number(TIME_LIMIT_VALUE.value);
  let x = 0;
  
  RATE.textContent = rate;
  WPM_RESULT.setAttribute('hide', '');
  if (time === 600) x = 3;
  else if (time === 240) x = 7.5;
  else if (time === 120) x = 15;
  else if (time === 90) x = 20;
  else if (time === 60) x = 30;
  else if (time === 30) x = 60;
  else x = 90;
  let score = correct * x;

  if (score < 80) {
    RANK.style.fontSize = '170px';
    return 'G';
  } else if (score >= 80 && score < 160) {
    RANK.style.fontSize = '170px';
    return 'F';
  } else if (score >= 160 && score < 240) {
    RANK.style.fontSize = '170px';
    return 'E';
  } else if (score >= 240 && score < 320) {
    RANK.style.fontSize = '170px';
    return 'D';
  } else if (score >= 320 && score < 400) {
    RANK.style.fontSize = '170px';
    return 'C';
  } else if (score >= 400 && score < 480) {
    RANK.style.fontSize = '170px';
    return 'B';
  } else if (score >= 480 && score < 560) {
    RANK.style.fontSize = '170px';
    return 'B+';
  } else if (score >= 560 && score < 640) {
    RANK.style.fontSize = '170px';
    return 'A';
  } else if (score >= 640 && score < 720) {
    RANK.style.fontSize = '170px';
    return 'A+';
  } else if (score >= 720 && score < 800) {
    RANK.style.fontSize = '170px';
    return 'S';
  } else if (score >= 800 && score < 880) {
    RANK.style.fontSize = '170px';
    return 'S+';
  } else if (score >= 880 && score < 960) {
    RANK.style.fontSize = '170px';
    return 'SS';
  } else if (score >= 960 && score < 1040) {
    RANK.style.fontSize = '170px';
    return 'SS+';
  } else if (score >= 1040 && score < 1120) {
    RANK.style.fontSize = '170px';
    return 'SSS';
  } else if (score >= 1120 && score < 1200) {
    RANK.style.fontSize = '160px';
    return 'SSS+';
  } else if (score >= 1200 && score < 1200) {
    RANK.style.fontSize = '170px';
    return 'X';
  } else if (score >= 1200 && score < 1280) {
    RANK.style.fontSize = '170px';
    return 'X+';
  } else if (score >= 1280 && score < 1360) {
    RANK.style.fontSize = '170px';
    return 'XX';
  } else if (score >= 1360 && score < 1440) {
    RANK.style.fontSize = '170px';
    return 'XX+';
  } else if (score >= 1440 && score < 1520) {
    RANK.style.fontSize = '160px';
    return 'Fast';
  } else if (score >= 1520 && score < 1600) {
    RANK.style.fontSize = '140px';
    return 'Quick';
  } else if (score >= 1600 && score < 1680) {
    RANK.style.fontSize = '140px';
    return 'Adept';
  } else if (score >= 1680 && score < 1760) {
    RANK.style.fontSize = '130px';
    return 'Expert';
  } else if (score >= 1760 && score < 1840) {
    RANK.style.fontSize = '140px';
    return 'Sonic';
  } else if (score >= 1840 && score < 1920) {
    RANK.style.fontSize = '130px';
    return 'Master';
  } else if (score >= 1920 && score < 2000) {
    RANK.style.fontSize = '140px';
    return 'Comet';
  } else if (score >= 2000 && score < 2080) {
    RANK.style.fontSize = '120px';
    return 'Thunder';
  } else if (score >= 2080 && score < 2160) {
    RANK.style.fontSize = '150px';
    return 'Nova';
  } else if (score >= 2160 && score < 2240) {
    RANK.style.fontSize = '110px';
    return 'Neutrino';
  } else if (score >= 2240 && score < 2320) {
    RANK.style.fontSize = '120px';
    return 'Godhand';
  } else if (score >= 2320) {
    RANK.style.fontSize = '150px';
    return 'Zeus';
  }
}