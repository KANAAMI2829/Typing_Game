'use strict';

function settingsAnimation() {
  let promise = new Promise((resolve, reject) => {
    TYPING_GAME.animate({
      opacity: [1, 0]
    }, {
      duration: 200,
      easing: 'ease',
      fill: 'forwards'
    })
    setTimeout(() => {
      TYPING_GAME.setAttribute('hidden', '');
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

function returnAnimation() {
  let promise = new Promise((resolve, reject) => {
    SETTINGS_SCREEN.animate({
      opacity: [1, 0]
    }, {
      duration: 200,
      easing: 'ease',
      fill: 'forwards'
    })
    setTimeout(() => {
      SETTINGS_SCREEN.setAttribute('hidden', '');
      TYPING_GAME.removeAttribute('hidden');
      resolve();
    }, 250)
  })

  promise.then(() => {
    TYPING_GAME.animate({
      opacity: [0, 1]
    }, {
      duration: 300,
      easing: 'ease',
      fill: 'forwards'
    })
  })
}

// スタート時に3秒のカウントダウンを出力
function countDownAnimation(count_num) {
  COUNT_DOWN_NUMBER.textContent = count_num--;
  COUNT_DOWN.style.opacity = '1';
  let StopId = setInterval(() => {
    if (count_num === 0) {
    isPlaying = true;
    clearInterval(StopId);
    StartTime = Date.now();
    updateTimer();
    if (ENmode) setReibunEN();
    else if (PGmode) setReibunPG();
    else setReibun();
    COUNT_DOWN.style.opacity = '0';
    COUNT_DOWN_NUMBER.textContent = '';
    }
    COUNT_DOWN_NUMBER.textContent = count_num--;
  }, 1000)
}

function missAnimation() {
  MISS_ALERT.animate({
    opacity: [1, 0]
  }, {
    duration: 600,
    easing: 'ease-in',
    fill: 'forwards'
  })
}

// 結果画面にいくまでのアニメーション処理
function finishAnimation() {
  GoodCount = Number(GoodCount);
  MissCount = Number(MissCount);
  const WPM_VALUE = ((GoodCount / TimeLimit) * 60) * 1000;
  const ACCURACY_RATE = (GoodCount + MissCount) === 0 ? 0 : (GoodCount / (GoodCount + MissCount)) * 100.0;
  const SCORE_VALUE = WPM_VALUE * ((ACCURACY_RATE.toFixed(2) / 100) ** 3);

  // 直列処理を行うためにPromiseオブジェクトを使用
  let promise = new Promise((resolve, reject) => {
    JAPANESE.textContent = '';
    HIRAGANA.textContent = '';
    NOW_HIRAGANA.textContent = '';
    TYPED_HIRAGANA.textContent = '';
    ROMAJI.textContent = '';
    TYPED_ROMAJI.textContent = '';
    COUNT_DOWN_NUMBER.textContent = 'Finish!';
    COUNT_DOWN.id = 'Finish';
    COUNT_DOWN.style.opacity = '1';
    Finish = document.getElementById('Finish');

    setTimeout(() => {
      Finish.animate({
        opacity: [1, 0],
        transform:'translate(-40%, -50%)'
      }, {
        duration: 302,
        easing: 'ease-in'
      })
      TIMER_SPACE.animate({
        opacity: [1, 0],
        transform: 'translateX(30px)'
      }, {
        duration: 302,
        easing: 'ease-in'
      })
      setTimeout(() => {
        Finish.style.opacity = '0';
        TIMER_SPACE.animate({
          opacity: [1, 0]
        },{
          fill: 'forwards'
        })
        resolve();
      }, 300)
    }, 1200)
  })

  promise.then(() => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        COUNT_SPACE.animate({
          top: '23%',
          right: '60%',
          fontSize: '40px'
        },{
          duration: 800,
          easing: 'ease-in-out',
          fill: 'forwards'
        })
        GOOD_COUNTER.animate({
          right: '0'
        },{
          duration: 800,
          easing: 'ease-in-out',
          fill: 'forwards'
        })
        MISS_COUNTER.animate({
          top: '60px'
        },{
          duration: 800,
          easing: 'ease-in-out',
          fill: 'forwards'
        })
        setTimeout(() => {
          resolve();
        }, 800)
      }, 100)
    })
  }).then(() => {
    return new Promise((resolve, reject) => {
      WPM.textContent = WPM_VALUE.toFixed(0);
      // style.cssTextでスタイル指定すると二回目以降positionが使えなくなる
      WPM_RESULT.animate({
        top: '120px'
      },{
        fill: 'forwards'
      })
      setTimeout(() => {
        WPM_RESULT.animate({
          opacity: [0, 1]
        },{
          duration: 200,
          easing: 'ease-in-out',
          fill: 'forwards'
        })
        setTimeout(() => {
          resolve();
        }, 200)
      }, 100)
    })
  }).then(() => {
    return new Promise((resolve, reject) => {
      ACCURACY.textContent = ACCURACY_RATE.toFixed(2);
      ACCURACY_RESULT.animate({
        top: '180px'
      },{
        fill: 'forwards'
      })
      setTimeout(() => {
        ACCURACY_RESULT.animate({
          opacity: [0, 1]
        },{
          duration: 200,
          easing: 'ease-in-out',
          fill: 'forwards'
        })
        setTimeout(() => {
          resolve();
        }, 200)
      }, 100)
    })
  }).then(() => {
    return new Promise((resolve, reject) => {
      SCORE.textContent = SCORE_VALUE.toFixed(0);
      SCORE_RESULT.animate({
        top: '240px'
      },{
        fill: 'forwards'
      })
      setTimeout(() => {
        SCORE_RESULT.animate({
          opacity: [0, 1]
        },{
          duration: 200,
          easing: 'ease-in-out',
          fill:'forwards'
        })
        setTimeout(() => {
          resolve();
        }, 200)
      }, 100)
    })
  }).then(() => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        RANK.style.paddingTop = '40px';
        RANK_SPACE.style.display = 'flex';
        RANK_SPACE.animate({
          top: '23%',
          left: '40%',
          opacity: [0, 1],
          fontSize: '50px'
        },{
          fill: 'forwards'
        })
        RANK_RESULT.animate({
          opacity: [0, 1]
        },{
          duration: 400,
          easing: 'ease-in-out',
          fill: 'forwards'
        })
        setTimeout(() => {
          resolve();
        }, 400)
      }, 100)
    })
  }).then(() => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
      RANK.textContent = judgeRank(SCORE.textContent);
        RANK.animate({
          opacity: [0, 1]
        },{
          duration: 500,
          easing: 'ease-in-out',
          fill: 'forwards'
        })
        RESTART.animate({
          opacity: [0, 1]
        },{
          duration: 502,
          easing: 'ease-in-out'
        })
        setTimeout(() => {
          isRestartReady = true;
          RESTART.style.opacity = '1';
        }, 500)
      }, 400)
    })
  }).catch(() => {
    alert('エラーが発生しました。ページを再読み込みしてください。');
  })
}

// 全ての要素を初期位置に戻す(ついでに初期化も)
function restartAnimation() {
  let promise = new Promise((resolve, reject) => {
    Finish.id = 'Count_Down';
    HIRAGANA_SPACE.removeAttribute('hidden');
    TYPED_HIRAGANA.style.color = '#479400';
    TYPED_HIRAGANA.style.fontSize = '26px';
    ROMAJI.style.color = '#a7b1be';
    COUNT_DOWN_NUMBER.textContent = '';
    GOOD.textContent = '0';
    MISS.textContent = '0';
    WPM.textContent = '0';
    ACCURACY.textContent = '0';
    SCORE.textContent = '0';
    RANK.textContent = '';

    COUNT_SPACE.animate({
      top: '90%',
      right: '65px',
      fontSize: '30px'
    },{
      duration: 800,
      easing: 'ease-in-out',
      fill: 'forwards'
    })
    GOOD_COUNTER.animate({
      right: '220px'
    },{
      duration: 800,
      easing: 'ease-in-out',
      fill: 'forwards'
    })
    MISS_COUNTER.animate({
      top: '0',
      right: '0'
    },{
      duration: 800,
      easing: 'ease-in-out',
      fill: 'forwards'
    })
    WPM_RESULT.animate({
      top: '0',
      right: '0',
      opacity: [1, 0]
    },{
      duration: 800,
      easing: 'ease-in-out',
      fill: 'forwards'
    })
    ACCURACY_RESULT.animate({
      top: '0',
      right: '0',
      opacity: [1, 0]
    },{
      duration: 800,
      easing: 'ease-in-out',
      fill: 'forwards'
    })
    SCORE_RESULT.animate({
      top: '0',
      right: '0',
      opacity: [1, 0]
    },{
      duration: 800,
      easing: 'ease-in-out',
      fill: 'forwards'
    })
    RANK_SPACE.animate({
      top: '90%',
      right: '65px',
      opacity: [1, 0],
      fontSize: '0'
    },{
      duration: 800,
      easing: 'ease-in-out',
      fill: 'forwards'
    })
    RESTART.animate({
      opacity: [1, 0],
      transform: 'translateX(30px)'
    },{
      duration: 302,
      easing: 'ease-in-out'
    })
    setTimeout(() => {
      RESTART.style.opacity = '0';
    }, 300)
    setTimeout(() => {
      resolve();
    }, 800)
  })

  promise.then(() => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        JAPANESE.textContent = 'スペースキーを押してスタート';
        TIMER_SPACE.animate({
          opacity: [0, 1]
        },{
          duration: 300,
          easing: 'ease-in-out',
          fill: 'forwards'
        })
        JAPANESE.animate({
          opacity: [0, 1]
        },{
          duration: 300,
          easing: 'ease-in-out',
          fill: 'forwards'
        })
        setTimeout(() => {
          isReady = true;
        }, 400)
      }, 200)
    })
  }).catch(() => {
    alert('エラーが発生しました。ページを再読み込みしてください。');
  })
}

// リザルト画面から設定画面に行った場合はアニメーションなしで初期位置まで戻す
function restartNoneAnimation() {
  let promise = new Promise((resolve, reject) => {
    Finish.id = 'Count_Down';
    HIRAGANA_SPACE.removeAttribute('hidden');
    TYPED_HIRAGANA.style.color = '#479400';
    TYPED_HIRAGANA.style.fontSize = '26px';
    ROMAJI.style.color = '#a7b1be';
    COUNT_DOWN_NUMBER.textContent = '';
    GOOD.textContent = '0';
    MISS.textContent = '0';
    WPM.textContent = '0';
    ACCURACY.textContent = '0';
    SCORE.textContent = '0';
    RANK.textContent = '';

    COUNT_SPACE.animate({
      top: '90%',
      right: '65px',
      fontSize: '30px'
    },{
      duration: 0,
      easing: 'ease-in-out',
      fill: 'forwards'
    })
    GOOD_COUNTER.animate({
      right: '220px'
    },{
      duration: 0,
      easing: 'ease-in-out',
      fill: 'forwards'
    })
    MISS_COUNTER.animate({
      top: '0',
      right: '0'
    },{
      duration: 0,
      easing: 'ease-in-out',
      fill: 'forwards'
    })
    WPM_RESULT.animate({
      top: '0',
      right: '0',
      opacity: [1, 0]
    },{
      duration: 0,
      easing: 'ease-in-out',
      fill: 'forwards'
    })
    ACCURACY_RESULT.animate({
      top: '0',
      right: '0',
      opacity: [1, 0]
    },{
      duration: 0,
      easing: 'ease-in-out',
      fill: 'forwards'
    })
    SCORE_RESULT.animate({
      top: '0',
      right: '0',
      opacity: [1, 0]
    },{
      duration: 0,
      easing: 'ease-in-out',
      fill: 'forwards'
    })
    RANK_SPACE.animate({
      top: '90%',
      right: '65px',
      opacity: [1, 0],
      fontSize: '0'
    },{
      duration: 0,
      easing: 'ease-in-out',
      fill: 'forwards'
    })
    RESTART.animate({
      opacity: [1, 0],
      transform: 'translateX(30px)'
    },{
      duration: 0,
      easing: 'ease-in-out'
    })
    RESTART.style.opacity = '0';
    resolve();
  })

  promise.then(() => {
    return new Promise((resolve, reject) => {
      JAPANESE.textContent = 'スペースキーを押してスタート';
      TIMER_SPACE.animate({
        opacity: [0, 1]
      },{
        duration: 0,
        easing: 'ease-in-out',
        fill: 'forwards'
      })
      JAPANESE.animate({
        opacity: [0, 1]
      },{
        duration: 0,
        easing: 'ease-in-out',
        fill: 'forwards'
      })
      isReady = true;
    })
  }).catch(() => {
    alert('エラーが発生しました。ページを再読み込みしてください。');
  })
}
