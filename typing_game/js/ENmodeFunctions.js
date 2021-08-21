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


function judgeEN(score) {
  const RATE = document.getElementById('Rate');
  let correct = CorrectCount;
  let miss = MissCount;
  let total_problems_num = correct + miss; 
  let rate = ((correct / total_problems_num) * 100.0).toFixed(1);
  
  RATE.textContent = rate;
  WPM_RESULT.setAttribute('hidden', '');

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
