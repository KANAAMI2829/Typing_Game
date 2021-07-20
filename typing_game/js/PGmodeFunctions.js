'use strict';

function setReibunPG() {
  JAPANESE.textContent = Random_Reibun[Now_Reibun_Number][1];
  ROMAJI.textContent = Random_Reibun[Now_Reibun_Number][0];
  TYPED_ROMAJI.textContent = '';
  Now_Reibun_Number++;
}

function gamePreparationPG(type_key) {
  if (type_key.match(/\s/g) !== null) {
    if (isPlaying === true || isReady === false) return false;
    if (LANG.value === 'js') Random_Reibun = shuffleReibun(PG_REIBUN_TABLE_JS);
    else if (LANG.value === 'c') Random_Reibun = shuffleReibun(PG_REIBUN_TABLE_C);

    init();
    HIRAGANA_SPACE.setAttribute('hidden', '');
    isReady = false;
    COUNT_DOWN_NUMBER.textContent = '3';
    countDownAnimation(COUNT_DOWN_NUMBER.textContent);
    return true;
  }
  return false;
}

function judgePG(score) {
  if (score < 15) {
    RANK.style.fontSize = '170px';
    return 'G';
  } else if (score >= 15 && score < 30) {
    RANK.style.fontSize = '170px';
    return 'F';
  } else if (score >= 30 && score < 45) {
    RANK.style.fontSize = '170px';
    return 'E';
  } else if (score >= 45 && score < 60) {
    RANK.style.fontSize = '170px';
    return 'D';
  } else if (score >= 60 && score < 75) {
    RANK.style.fontSize = '170px';
    return 'C';
  } else if (score >= 75 && score < 90) {
    RANK.style.fontSize = '170px';
    return 'B';
  } else if (score >= 90 && score < 105) {
    RANK.style.fontSize = '170px';
    return 'B+';
  } else if (score >= 105 && score < 120) {
    RANK.style.fontSize = '170px';
    return 'A';
  } else if (score >= 120 && score < 135) {
    RANK.style.fontSize = '170px';
    return 'A+';
  } else if (score >= 135 && score < 150) {
    RANK.style.fontSize = '170px';
    return 'S';
  } else if (score >= 150 && score < 165) {
    RANK.style.fontSize = '170px';
    return 'S+';
  } else if (score >= 165 && score < 180) {
    RANK.style.fontSize = '170px';
    return 'SS';
  } else if (score >= 180 && score < 195) {
    RANK.style.fontSize = '170px';
    return 'SS+';
  } else if (score >= 195 && score < 210) {
    RANK.style.fontSize = '170px';
    return 'SSS';
  } else if (score >= 210 && score < 225) {
    RANK.style.fontSize = '160px';
    return 'SSS+';
  } else if (score >= 225 && score < 240) {
    RANK.style.fontSize = '170px';
    return 'X';
  } else if (score >= 240 && score < 255) {
    RANK.style.fontSize = '170px';
    return 'X+';
  } else if (score >= 255 && score < 270) {
    RANK.style.fontSize = '170px';
    return 'XX';
  } else if (score >= 270 && score < 285) {
    RANK.style.fontSize = '170px';
    return 'XX+';
  } else if (score >= 285 && score < 300) {
    RANK.style.fontSize = '160px';
    return 'Fast';
  } else if (score >= 300 && score < 315) {
    RANK.style.fontSize = '140px';
    return 'Quick';
  } else if (score >= 315 && score < 330) {
    RANK.style.fontSize = '140px';
    return 'Adept';
  } else if (score >= 330 && score < 345) {
    RANK.style.fontSize = '130px';
    return 'Expert';
  } else if (score >= 345 && score < 360) {
    RANK.style.fontSize = '140px';
    return 'Sonic';
  } else if (score >= 360 && score < 375) {
    RANK.style.fontSize = '130px';
    return 'Master';
  } else if (score >= 375 && score < 390) {
    RANK.style.fontSize = '140px';
    return 'Comet';
  } else if (score >= 390 && score < 405) {
    RANK.style.fontSize = '120px';
    return 'Thunder';
  } else if (score >= 405 && score < 420) {
    RANK.style.fontSize = '150px';
    return 'Nova';
  } else if (score >= 420 && score < 435) {
    RANK.style.fontSize = '110px';
    return 'Neutrino';
  } else if (score >= 435 && score < 450) {
    RANK.style.fontSize = '120px';
    return 'Godhand';
  } else if (score >= 450) {
    RANK.style.fontSize = '150px';
    return 'Zeus';
  }
}