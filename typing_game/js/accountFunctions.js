'use strict';

function goAccountInfo() {
  isAnimationNow = true;
  ACCOUNTINFO_POPUP.removeAttribute('hidden');
  ACCOUNTINFO_POPUP.animate({
    opacity: [0, 1]
  }, {
    duration: 500,
    easing: 'ease',
    fill: 'forwards'
  })
  updateAccountInfo();
  setTimeout(() => isAnimationNow = false, 500);
}

function closeAccountAnimation() {
  isAnimationNow = true;
  ACCOUNTINFO_POPUP.animate({
    opacity: [1, 0]
  }, {
    duration: 500,
    easing: 'ease',
    fill: 'forwards'
  })
  setTimeout(() => {
    isAnimationNow = false;
    ACCOUNTINFO_POPUP.setAttribute('hidden', '');
  }, 500);
}

if (isLogin) {
  ACCOUNT_CLOSE.addEventListener('click', () => {if (!isAnimationNow) closeAccountAnimation()});
  ACCOUNT_BACKGROUND.addEventListener('click', () => {if (!isAnimationNow) closeAccountAnimation()});
}

function updateAccountInfo() {
  const ACCOUNT_SCORE = document.getElementById('account_score');
  const ACCOUNT_RANK = document.getElementById('account_rank');
  const ACCOUNT_RANKING = document.getElementById('account_ranking');

  fetch('https://backdrop-kanaami.ssl-lolipop.jp/typing_event/typing_game/updateAccountInfo.php', {
    method: 'POST'
  })
  .then(response => response.json())
  .then(data => {
    ACCOUNT_SCORE.textContent = data[0];
    ACCOUNT_RANK.textContent = data[1];
    ACCOUNT_RANKING.textContent = data[2];
  })
  .catch(() => alert('サーバーとの通信に失敗しました'));
}
