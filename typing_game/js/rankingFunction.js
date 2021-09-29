'use strict';

function goRanking() {
  if (isPlaying === false) {
    if (isReady === false && isRestartReady === false) return;
    if (isRanking) return;
    isRanking = true;
    updateRanking();
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

function updateRanking() {
  const RANKING_NAME_FIRST    = document.getElementById('ranking_name_first');
  const RANKING_SCORE_FIRST   = document.getElementById('ranking_score_first');
  const RANKING_RANK_FIRST    = document.getElementById('ranking_rank_first');
  const RANKING_NAME_SECOND   = document.getElementById('ranking_name_second');
  const RANKING_SCORE_SECOND  = document.getElementById('ranking_score_second');
  const RANKING_RANK_SECOND   = document.getElementById('ranking_rank_second');
  const RANKING_NAME_THIRD    = document.getElementById('ranking_name_third');
  const RANKING_SCORE_THIRD   = document.getElementById('ranking_score_third');
  const RANKING_RANK_THIRD    = document.getElementById('ranking_rank_third');
  const RANKING_NAME_FOURTH   = document.getElementById('ranking_name_fourth');
  const RANKING_SCORE_FOURTH  = document.getElementById('ranking_score_fourth');
  const RANKING_RANK_FOURTH   = document.getElementById('ranking_rank_fourth');
  const RANKING_NAME_FIFTH    = document.getElementById('ranking_name_fifth');
  const RANKING_SCORE_FIFTH   = document.getElementById('ranking_score_fifth');
  const RANKING_RANK_FIFTH    = document.getElementById('ranking_rank_fifth');
  const RANKING_NAME_SIXTH    = document.getElementById('ranking_name_sixth');
  const RANKING_SCORE_SIXTH   = document.getElementById('ranking_score_sixth');
  const RANKING_RANK_SIXTH    = document.getElementById('ranking_rank_sixth');
  const RANKING_NAME_SEVENTH  = document.getElementById('ranking_name_seventh'); 
  const RANKING_SCORE_SEVENTH = document.getElementById('ranking_score_seventh'); 
  const RANKING_RANK_SEVENTH  = document.getElementById('ranking_rank_seventh'); 
  const RANKING_NAME_EIGHTH   = document.getElementById('ranking_name_eighth');
  const RANKING_SCORE_EIGHTH  = document.getElementById('ranking_score_eighth');
  const RANKING_RANK_EIGHTH   = document.getElementById('ranking_rank_eighth');
  const RANKING_NAME_NINTH    = document.getElementById('ranking_name_ninth');
  const RANKING_SCORE_NINTH   = document.getElementById('ranking_score_ninth');
  const RANKING_RANK_NINTH    = document.getElementById('ranking_rank_ninth');
  const RANKING_NAME_TENTH    = document.getElementById('ranking_name_tenth');
  const RANKING_SCORE_TENTH   = document.getElementById('ranking_score_tenth');
  const RANKING_RANK_TENTH    = document.getElementById('ranking_rank_tenth');

  fetch('https://backdrop-kanaami.ssl-lolipop.jp/typing_event/typing_game/updataRanking.php', {
    method: 'POST'
  })
  .then(response => response.json())
  .then(data => {
    RANKING_NAME_FIRST.textContent    = data[0]['name'];
    RANKING_SCORE_FIRST.textContent   = data[0]['score'];
    RANKING_RANK_FIRST.textContent    = data[0]['rank'];
    RANKING_NAME_SECOND.textContent   = data[1]['name'];
    RANKING_SCORE_SECOND.textContent  = data[1]['score'];
    RANKING_RANK_SECOND.textContent   = data[1]['rank'];
    RANKING_NAME_THIRD.textContent    = data[2]['name'];
    RANKING_SCORE_THIRD.textContent   = data[2]['score'];
    RANKING_RANK_THIRD.textContent    = data[2]['rank'];
    RANKING_NAME_FOURTH.textContent   = data[3]['name'];
    RANKING_SCORE_FOURTH.textContent  = data[3]['score'];
    RANKING_RANK_FOURTH.textContent   = data[3]['rank'];
    RANKING_NAME_FIFTH.textContent    = data[4]['name'];
    RANKING_SCORE_FIFTH.textContent   = data[4]['score'];
    RANKING_RANK_FIFTH.textContent    = data[4]['rank'];
    RANKING_NAME_SIXTH.textContent    = data[5]['name'];
    RANKING_SCORE_SIXTH.textContent   = data[5]['score'];
    RANKING_RANK_SIXTH.textContent    = data[5]['rank'];
    RANKING_NAME_SEVENTH.textContent  = data[6]['name'];
    RANKING_SCORE_SEVENTH.textContent = data[6]['score'];
    RANKING_RANK_SEVENTH.textContent  = data[6]['rank'];
    RANKING_NAME_EIGHTH.textContent   = data[7]['name'];
    RANKING_SCORE_EIGHTH.textContent  = data[7]['score'];
    RANKING_RANK_EIGHTH.textContent   = data[7]['rank'];
    RANKING_NAME_NINTH.textContent    = data[8]['name'];
    RANKING_SCORE_NINTH.textContent   = data[8]['score'];
    RANKING_RANK_NINTH.textContent    = data[8]['rank'];
    RANKING_NAME_TENTH.textContent    = data[9]['name'];
    RANKING_SCORE_TENTH.textContent   = data[9]['score'];
    RANKING_RANK_TENTH.textContent    = data[9]['rank'];
  })
  .catch(() => alert('設定情報の保存に失敗しました'));
}
