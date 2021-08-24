'use strict';

function openSlideAnimation(menu_num) {
  let promise = new Promise((resolve, reject) => {
    MENU.animate({
      opacity: [1, 0]
    }, {
      duration: 200,
      easing: 'ease',
      fill: 'forwards'
    })
    setTimeout(() => {
      MENU.setAttribute('hidden', '');
      resolve();
    }, 250)
  })

  promise.then(() => {
    if (menu_num === 1) {
      INSTR_1.animate({
        opacity: [0, 1]
      }, {
        duration: 300,
        easing: 'ease',
        fill: 'forwards'
      })
    } else if (menu_num === 2) {
      MODE_1.animate({
        opacity: [0, 1]
      },{
        duration: 300,
        easing: 'ease',
        fill: 'forwards'
      })
    } else if (menu_num === 3) {
      RESULT_1.animate({
        opacity: [0, 1]
      },{
        duration: 300,
        easing: 'ease',
        fill: 'forwards'
      })
    }
    RETURN_ARROW.animate({
      opacity: [0, 1]
    }, {
      duration: 300,
      easing: 'ease',
      fill: 'forwards'
    })
    RIGHT_ARROW.animate({
      opacity: [0, 1]
    }, {
      duration: 300,
      easing: 'ease',
      fill: 'forwards'
    })
  })
}

function goToSlideLeftAnimation() {
  if (nowSlideNum === 2) {
    if (menu_num === 1) {
      let promise = new Promise((resolve, reject) => {
        nowSlideNum = 1;
        INSTR_2.animate({
          opacity: [1, 0]
        }, {
          duration: 200,
          easing: 'ease',
          fill: 'forwards'
        })
        LEFT_ARROW.animate({
          opacity: [1, 0]
        }, {
          duration: 200,
          easing: 'ease',
          fill: 'forwards'
        })
        setTimeout(() => {
          INSTR_2.setAttribute('hidden', '');
          LEFT_ARROW.setAttribute('hidden', '');
          resolve();
        }, 250)
      })
    
      promise.then(() => {
        INSTR_1.removeAttribute('hidden');
        INSTR_1.animate({
          opacity: [0, 1]
        }, {
          duration: 300,
          easing: 'ease',
          fill: 'forwards'
        })
      })
    } else if (menu_num === 2) {
      let promise = new Promise((resolve, reject) => {
        nowSlideNum = 1;
        MODE_2.animate({
          opacity: [1, 0]
        }, {
          duration: 200,
          easing: 'ease',
          fill: 'forwards'
        })
        LEFT_ARROW.animate({
          opacity: [1, 0]
        }, {
          duration: 200,
          easing: 'ease',
          fill: 'forwards'
        })
        setTimeout(() => {
          MODE_2.setAttribute('hidden', '');
          LEFT_ARROW.setAttribute('hidden', '');
          resolve();
        }, 250)
      })
    
      promise.then(() => {
        MODE_1.removeAttribute('hidden');
        MODE_1.animate({
          opacity: [0, 1]
        }, {
          duration: 300,
          easing: 'ease',
          fill: 'forwards'
        })
      })
    } else if (menu_num === 3) {
      let promise = new Promise((resolve, reject) => {
        nowSlideNum = 1;
        RESULT_2.animate({
          opacity: [1, 0]
        }, {
          duration: 200,
          easing: 'ease',
          fill: 'forwards'
        })
        LEFT_ARROW.animate({
          opacity: [1, 0]
        }, {
          duration: 200,
          easing: 'ease',
          fill: 'forwards'
        })
        setTimeout(() => {
          RESULT_2.setAttribute('hidden', '');
          LEFT_ARROW.setAttribute('hidden', '');
          resolve();
        }, 250)
      })
    
      promise.then(() => {
        RESULT_1.removeAttribute('hidden');
        RESULT_1.animate({
          opacity: [0, 1]
        }, {
          duration: 300,
          easing: 'ease',
          fill: 'forwards'
        })
      })
    }
  } else if (nowSlideNum === 3) {
    if (menu_num === 1) {
      let promise = new Promise((resolve, reject) => {
        nowSlideNum = 2;
        INSTR_3.animate({
          opacity: [1, 0]
        }, {
          duration: 200,
          easing: 'ease',
          fill: 'forwards'
        })
        setTimeout(() => {
          INSTR_3.setAttribute('hidden', '');
          resolve();
        }, 250)
      })

      promise.then(() => {
        INSTR_2.removeAttribute('hidden');
        INSTR_2.animate({
          opacity: [0, 1]
        }, {
          duration: 300,
          easing: 'ease',
          fill: 'forwards'
        })
      })
    } else if (menu_num === 2) {
      let promise = new Promise((resolve, reject) => {
        nowSlideNum = 2;
        MODE_3.animate({
          opacity: [1, 0]
        }, {
          duration: 200,
          easing: 'ease',
          fill: 'forwards'
        })
        setTimeout(() => {
          MODE_3.setAttribute('hidden', '');
          resolve();
        }, 250)
      })

      promise.then(() => {
        MODE_2.removeAttribute('hidden');
        MODE_2.animate({
          opacity: [0, 1]
        }, {
          duration: 300,
          easing: 'ease',
          fill: 'forwards'
        })
      })
    } else if (menu_num === 3) {
      let promise = new Promise((resolve, reject) => {
        nowSlideNum = 2;
        RESULT_3.animate({
          opacity: [1, 0]
        }, {
          duration: 200,
          easing: 'ease',
          fill: 'forwards'
        })
        setTimeout(() => {
          RESULT_3.setAttribute('hidden', '');
          resolve();
        }, 250)
      })

      promise.then(() => {
        RESULT_2.removeAttribute('hidden');
        RESULT_2.animate({
          opacity: [0, 1]
        }, {
          duration: 300,
          easing: 'ease',
          fill: 'forwards'
        })
      })
    }
  } else if (nowSlideNum === 4) {
    if (menu_num === 1) {
      let promise = new Promise((resolve, reject) => {
        nowSlideNum = 3;
        INSTR_4.animate({
          opacity: [1, 0]
        }, {
          duration: 200,
          easing: 'ease',
          fill: 'forwards'
        })
        setTimeout(() => {
          INSTR_4.setAttribute('hidden', '');
          resolve();
        }, 250)
      })
    
      promise.then(() => {
        INSTR_3.removeAttribute('hidden');
        INSTR_3.animate({
          opacity: [0, 1]
        }, {
          duration: 300,
          easing: 'ease',
          fill: 'forwards'
        })
        RIGHT_ARROW.removeAttribute('hidden');
        RIGHT_ARROW.animate({
          opacity: [0, 1]
        }, {
          duration: 300,
          easing: 'ease',
          fill: 'forwards'
        })
      })
    } else if (menu_num === 2) {
      let promise = new Promise((resolve, reject) => {
        nowSlideNum = 3;
        MODE_4.animate({
          opacity: [1, 0]
        }, {
          duration: 200,
          easing: 'ease',
          fill: 'forwards'
        })
        setTimeout(() => {
          MODE_4.setAttribute('hidden', '');
          resolve();
        }, 250)
      })
    
      promise.then(() => {
        MODE_3.removeAttribute('hidden');
        MODE_3.animate({
          opacity: [0, 1]
        }, {
          duration: 300,
          easing: 'ease',
          fill: 'forwards'
        })
      })
    } else if (menu_num === 3) {
      let promise = new Promise((resolve, reject) => {
        nowSlideNum = 3;
        RESULT_4.animate({
          opacity: [1, 0]
        }, {
          duration: 200,
          easing: 'ease',
          fill: 'forwards'
        })
        setTimeout(() => {
          RESULT_4.setAttribute('hidden', '');
          resolve();
        }, 250)
      })
    
      promise.then(() => {
        RESULT_3.removeAttribute('hidden');
        RESULT_3.animate({
          opacity: [0, 1]
        }, {
          duration: 300,
          easing: 'ease',
          fill: 'forwards'
        })
      })
    }
  } else if (nowSlideNum === 5) {
    if (menu_num === 2) {
      let promise = new Promise((resolve, reject) => {
        nowSlideNum = 4;
        MODE_5.animate({
          opacity: [1, 0]
        }, {
          duration: 200,
          easing: 'ease',
          fill: 'forwards'
        })
        setTimeout(() => {
          MODE_5.setAttribute('hidden', '');
          resolve();
        }, 250)
      })
    
      promise.then(() => {
        MODE_4.removeAttribute('hidden');
        MODE_4.animate({
          opacity: [0, 1]
        }, {
          duration: 300,
          easing: 'ease',
          fill: 'forwards'
        })
      })
    } else if (menu_num === 3) {
      let promise = new Promise((resolve, reject) => {
        nowSlideNum = 4;
        RESULT_5.animate({
          opacity: [1, 0]
        }, {
          duration: 200,
          easing: 'ease',
          fill: 'forwards'
        })
        setTimeout(() => {
          RESULT_5.setAttribute('hidden', '');
          resolve();
        }, 250)
      })
    
      promise.then(() => {
        RESULT_4.removeAttribute('hidden');
        RESULT_4.animate({
          opacity: [0, 1]
        }, {
          duration: 300,
          easing: 'ease',
          fill: 'forwards'
        })
        RIGHT_ARROW.removeAttribute('hidden');
        RIGHT_ARROW.animate({
          opacity: [0, 1]
        }, {
          duration: 300,
          easing: 'ease',
          fill: 'forwards'
        })
      })
    }
  } else if (nowSlideNum === 6) {
    if (menu_num === 2) {
      let promise = new Promise((resolve, reject) => {
        nowSlideNum = 5;
        MODE_6.animate({
          opacity: [1, 0]
        }, {
          duration: 200,
          easing: 'ease',
          fill: 'forwards'
        })
        setTimeout(() => {
          MODE_6.setAttribute('hidden', '');
          resolve();
        }, 250)
      })
    
      promise.then(() => {
        MODE_5.removeAttribute('hidden');
        MODE_5.animate({
          opacity: [0, 1]
        }, {
          duration: 300,
          easing: 'ease',
          fill: 'forwards'
        })
      })
    }
  } else if (nowSlideNum === 7) {
    if (menu_num === 2) {
      let promise = new Promise((resolve, reject) => {
        nowSlideNum = 6;
        MODE_7.animate({
          opacity: [1, 0]
        }, {
          duration: 200,
          easing: 'ease',
          fill: 'forwards'
        })
        setTimeout(() => {
          MODE_7.setAttribute('hidden', '');
          resolve();
        }, 250)
      })
    
      promise.then(() => {
        MODE_6.removeAttribute('hidden');
        MODE_6.animate({
          opacity: [0, 1]
        }, {
          duration: 300,
          easing: 'ease',
          fill: 'forwards'
        })
      })
    }
  } else if (nowSlideNum === 8) {
    if (menu_num === 2) {
      let promise = new Promise((resolve, reject) => {
        nowSlideNum = 7;
        MODE_8.animate({
          opacity: [1, 0]
        }, {
          duration: 200,
          easing: 'ease',
          fill: 'forwards'
        })
        setTimeout(() => {
          MODE_8.setAttribute('hidden', '');
          resolve();
        }, 250)
      })
    
      promise.then(() => {
        MODE_7.removeAttribute('hidden');
        MODE_7.animate({
          opacity: [0, 1]
        }, {
          duration: 300,
          easing: 'ease',
          fill: 'forwards'
        })
      })
    }
  } else if (nowSlideNum === 9) {
    if (menu_num === 2) {
      let promise = new Promise((resolve, reject) => {
        nowSlideNum = 8;
        MODE_9.animate({
          opacity: [1, 0]
        }, {
          duration: 200,
          easing: 'ease',
          fill: 'forwards'
        })
        setTimeout(() => {
          MODE_9.setAttribute('hidden', '');
          resolve();
        }, 250)
      })
    
      promise.then(() => {
        MODE_8.removeAttribute('hidden');
        MODE_8.animate({
          opacity: [0, 1]
        }, {
          duration: 300,
          easing: 'ease',
          fill: 'forwards'
        })
      })
    }
  } else if (nowSlideNum === 10) {
    if (menu_num === 2) {
      let promise = new Promise((resolve, reject) => {
        nowSlideNum = 9;
        MODE_10.animate({
          opacity: [1, 0]
        }, {
          duration: 200,
          easing: 'ease',
          fill: 'forwards'
        })
        setTimeout(() => {
          MODE_10.setAttribute('hidden', '');
          resolve();
        }, 250)
      })
    
      promise.then(() => {
        MODE_9.removeAttribute('hidden');
        MODE_9.animate({
          opacity: [0, 1]
        }, {
          duration: 300,
          easing: 'ease',
          fill: 'forwards'
        })
      })
    }
  } else if (nowSlideNum === 11) {
    if (menu_num === 2) {
      let promise = new Promise((resolve, reject) => {
        nowSlideNum = 10;
        MODE_11.animate({
          opacity: [1, 0]
        }, {
          duration: 200,
          easing: 'ease',
          fill: 'forwards'
        })
        setTimeout(() => {
          MODE_11.setAttribute('hidden', '');
          resolve();
        }, 250)
      })
    
      promise.then(() => {
        MODE_10.removeAttribute('hidden');
        MODE_10.animate({
          opacity: [0, 1]
        }, {
          duration: 300,
          easing: 'ease',
          fill: 'forwards'
        })
        RIGHT_ARROW.removeAttribute('hidden');
        RIGHT_ARROW.animate({
          opacity: [0, 1]
        }, {
          duration: 300,
          easing: 'ease',
          fill: 'forwards'
        })
      })
    }
  }
}

function goToSlideRightAnimation() {
  if (nowSlideNum === 1) {
    if (menu_num === 1) {
      let promise = new Promise((resolve, reject) => {
        nowSlideNum = 2;
        INSTR_1.animate({
          opacity: [1, 0]
        }, {
          duration: 200,
          easing: 'ease',
          fill: 'forwards'
        })
        setTimeout(() => {
          INSTR_1.setAttribute('hidden', '');
          resolve();
        }, 250)
      })
    
      promise.then(() => {
        INSTR_2.removeAttribute('hidden');
        INSTR_2.animate({
          opacity: [0, 1]
        }, {
          duration: 300,
          easing: 'ease',
          fill: 'forwards'
        })
        LEFT_ARROW.removeAttribute('hidden');
        LEFT_ARROW.animate({
          opacity: [0, 1]
        }, {
          duration: 300,
          easing: 'ease',
          fill: 'forwards'
        })
      })
    } else if (menu_num === 2) {
      let promise = new Promise((resolve, reject) => {
        nowSlideNum = 2;
        MODE_1.animate({
          opacity: [1, 0]
        }, {
          duration: 200,
          easing: 'ease',
          fill: 'forwards'
        })
        setTimeout(() => {
          MODE_1.setAttribute('hidden', '');
          resolve();
        }, 250)
      })
    
      promise.then(() => {
        MODE_2.removeAttribute('hidden');
        MODE_2.animate({
          opacity: [0, 1]
        }, {
          duration: 300,
          easing: 'ease',
          fill: 'forwards'
        })
        LEFT_ARROW.removeAttribute('hidden');
        LEFT_ARROW.animate({
          opacity: [0, 1]
        }, {
          duration: 300,
          easing: 'ease',
          fill: 'forwards'
        })
      })
    } else if (menu_num === 3) {
      let promise = new Promise((resolve, reject) => {
        nowSlideNum = 2;
        RESULT_1.animate({
          opacity: [1, 0]
        }, {
          duration: 200,
          easing: 'ease',
          fill: 'forwards'
        })
        setTimeout(() => {
          RESULT_1.setAttribute('hidden', '');
          resolve();
        }, 250)
      })
    
      promise.then(() => {
        RESULT_2.removeAttribute('hidden');
        RESULT_2.animate({
          opacity: [0, 1]
        }, {
          duration: 300,
          easing: 'ease',
          fill: 'forwards'
        })
        LEFT_ARROW.removeAttribute('hidden');
        LEFT_ARROW.animate({
          opacity: [0, 1]
        }, {
          duration: 300,
          easing: 'ease',
          fill: 'forwards'
        })
      })
    }
  } else if (nowSlideNum === 2) {
    if (menu_num === 1) {
      let promise = new Promise((resolve, reject) => {
        nowSlideNum = 3;
        INSTR_2.animate({
          opacity: [1, 0]
        }, {
          duration: 200,
          easing: 'ease',
          fill: 'forwards'
        })
        setTimeout(() => {
          INSTR_2.setAttribute('hidden', '');
          resolve();
        }, 250)
      })
    
      promise.then(() => {
        INSTR_3.removeAttribute('hidden');
        INSTR_3.animate({
          opacity: [0, 1]
        }, {
          duration: 300,
          easing: 'ease',
          fill: 'forwards'
        })
      })
    } else if (menu_num === 2) {
      let promise = new Promise((resolve, reject) => {
        nowSlideNum = 3;
        MODE_2.animate({
          opacity: [1, 0]
        }, {
          duration: 200,
          easing: 'ease',
          fill: 'forwards'
        })
        setTimeout(() => {
          MODE_2.setAttribute('hidden', '');
          resolve();
        }, 250)
      })
    
      promise.then(() => {
        MODE_3.removeAttribute('hidden');
        MODE_3.animate({
          opacity: [0, 1]
        }, {
          duration: 300,
          easing: 'ease',
          fill: 'forwards'
        })
      })
    } else if (menu_num === 3) {
      let promise = new Promise((resolve, reject) => {
        nowSlideNum = 3;
        RESULT_2.animate({
          opacity: [1, 0]
        }, {
          duration: 200,
          easing: 'ease',
          fill: 'forwards'
        })
        setTimeout(() => {
          RESULT_2.setAttribute('hidden', '');
          resolve();
        }, 250)
      })
    
      promise.then(() => {
        RESULT_3.removeAttribute('hidden');
        RESULT_3.animate({
          opacity: [0, 1]
        }, {
          duration: 300,
          easing: 'ease',
          fill: 'forwards'
        })
      })
    }
  } else if (nowSlideNum === 3) {
    if (menu_num === 1) {
      let promise = new Promise((resolve, reject) => {
        nowSlideNum = 4;
        INSTR_3.animate({
          opacity: [1, 0]
        }, {
          duration: 200,
          easing: 'ease',
          fill: 'forwards'
        })
        RIGHT_ARROW.animate({
          opacity: [1, 0]
        }, {
          duration: 200,
          easing: 'ease',
          fill: 'forwards'
        })
        setTimeout(() => {
          INSTR_3.setAttribute('hidden', '');
          RIGHT_ARROW.setAttribute('hidden', '');
          resolve();
        }, 250)
      })
    
      promise.then(() => {
        INSTR_4.removeAttribute('hidden');
        INSTR_4.animate({
          opacity: [0, 1]
        }, {
          duration: 300,
          easing: 'ease',
          fill: 'forwards'
        })
      })
    } else if (menu_num === 2) {
      let promise = new Promise((resolve, reject) => {
        nowSlideNum = 4;
        MODE_3.animate({
          opacity: [1, 0]
        }, {
          duration: 200,
          easing: 'ease',
          fill: 'forwards'
        })
        setTimeout(() => {
          MODE_3.setAttribute('hidden', '');
          resolve();
        }, 250)
      })
    
      promise.then(() => {
        MODE_4.removeAttribute('hidden');
        MODE_4.animate({
          opacity: [0, 1]
        }, {
          duration: 300,
          easing: 'ease',
          fill: 'forwards'
        })
      })
    } else if (menu_num === 3) {
      let promise = new Promise((resolve, reject) => {
        nowSlideNum = 4;
        RESULT_3.animate({
          opacity: [1, 0]
        }, {
          duration: 200,
          easing: 'ease',
          fill: 'forwards'
        })
        setTimeout(() => {
          RESULT_3.setAttribute('hidden', '');
          resolve();
        }, 250)
      })
    
      promise.then(() => {
        RESULT_4.removeAttribute('hidden');
        RESULT_4.animate({
          opacity: [0, 1]
        }, {
          duration: 300,
          easing: 'ease',
          fill: 'forwards'
        })
      })
    }
  } else if (nowSlideNum === 4) {
    if (menu_num === 2) {
      let promise = new Promise((resolve, reject) => {
        nowSlideNum = 5;
        MODE_4.animate({
          opacity: [1, 0]
        }, {
          duration: 200,
          easing: 'ease',
          fill: 'forwards'
        })
        setTimeout(() => {
          MODE_4.setAttribute('hidden', '');
          resolve();
        }, 250)
      })
    
      promise.then(() => {
        MODE_5.removeAttribute('hidden');
        MODE_5.animate({
          opacity: [0, 1]
        }, {
          duration: 300,
          easing: 'ease',
          fill: 'forwards'
        })
      })
    } else if (menu_num === 3) {
      let promise = new Promise((resolve, reject) => {
        nowSlideNum = 5;
        RESULT_4.animate({
          opacity: [1, 0]
        }, {
          duration: 200,
          easing: 'ease',
          fill: 'forwards'
        })
        RIGHT_ARROW.animate({
          opacity: [1, 0]
        }, {
          duration: 200,
          easing: 'ease',
          fill: 'forwards'
        })
        setTimeout(() => {
          RESULT_4.setAttribute('hidden', '');
          RIGHT_ARROW.setAttribute('hidden', '');
          resolve();
        }, 250)
      })
    
      promise.then(() => {
        RESULT_5.removeAttribute('hidden');
        RESULT_5.animate({
          opacity: [0, 1]
        }, {
          duration: 300,
          easing: 'ease',
          fill: 'forwards'
        })
      })
    }
  } else if (nowSlideNum === 5) {
    if (menu_num === 2) {
      let promise = new Promise((resolve, reject) => {
        nowSlideNum = 6;
        MODE_5.animate({
          opacity: [1, 0]
        }, {
          duration: 200,
          easing: 'ease',
          fill: 'forwards'
        })
        setTimeout(() => {
          MODE_5.setAttribute('hidden', '');
          resolve();
        }, 250)
      })
    
      promise.then(() => {
        MODE_6.removeAttribute('hidden');
        MODE_6.animate({
          opacity: [0, 1]
        }, {
          duration: 300,
          easing: 'ease',
          fill: 'forwards'
        })
      })
    }
  } else if (nowSlideNum === 6) {
    if (menu_num === 2) {
      let promise = new Promise((resolve, reject) => {
        nowSlideNum = 7;
        MODE_6.animate({
          opacity: [1, 0]
        }, {
          duration: 200,
          easing: 'ease',
          fill: 'forwards'
        })
        setTimeout(() => {
          MODE_6.setAttribute('hidden', '');
          resolve();
        }, 250)
      })
    
      promise.then(() => {
        MODE_7.removeAttribute('hidden');
        MODE_7.animate({
          opacity: [0, 1]
        }, {
          duration: 300,
          easing: 'ease',
          fill: 'forwards'
        })
      })
    }
  } else if (nowSlideNum === 7) {
    if (menu_num === 2) {
      let promise = new Promise((resolve, reject) => {
        nowSlideNum = 8;
        MODE_7.animate({
          opacity: [1, 0]
        }, {
          duration: 200,
          easing: 'ease',
          fill: 'forwards'
        })
        setTimeout(() => {
          MODE_7.setAttribute('hidden', '');
          resolve();
        }, 250)
      })
    
      promise.then(() => {
        MODE_8.removeAttribute('hidden');
        MODE_8.animate({
          opacity: [0, 1]
        }, {
          duration: 300,
          easing: 'ease',
          fill: 'forwards'
        })
      })
    }
  } else if (nowSlideNum === 8) {
    if (menu_num === 2) {
      let promise = new Promise((resolve, reject) => {
        nowSlideNum = 9;
        MODE_8.animate({
          opacity: [1, 0]
        }, {
          duration: 200,
          easing: 'ease',
          fill: 'forwards'
        })
        setTimeout(() => {
          MODE_8.setAttribute('hidden', '');
          resolve();
        }, 250)
      })
    
      promise.then(() => {
        MODE_9.removeAttribute('hidden');
        MODE_9.animate({
          opacity: [0, 1]
        }, {
          duration: 300,
          easing: 'ease',
          fill: 'forwards'
        })
      })
    }
  } else if (nowSlideNum === 9) {
    if (menu_num === 2) {
      let promise = new Promise((resolve, reject) => {
        nowSlideNum = 10;
        MODE_9.animate({
          opacity: [1, 0]
        }, {
          duration: 200,
          easing: 'ease',
          fill: 'forwards'
        })
        setTimeout(() => {
          MODE_9.setAttribute('hidden', '');
          resolve();
        }, 250)
      })
    
      promise.then(() => {
        MODE_10.removeAttribute('hidden');
        MODE_10.animate({
          opacity: [0, 1]
        }, {
          duration: 300,
          easing: 'ease',
          fill: 'forwards'
        })
      })
    }
  } else if (nowSlideNum === 10) {
    if (menu_num === 2) {
      let promise = new Promise((resolve, reject) => {
        nowSlideNum = 11;
        MODE_10.animate({
          opacity: [1, 0]
        }, {
          duration: 200,
          easing: 'ease',
          fill: 'forwards'
        })
        RIGHT_ARROW.animate({
          opacity: [1, 0]
        }, {
          duration: 200,
          easing: 'ease',
          fill: 'forwards'
        })
        setTimeout(() => {
          MODE_10.setAttribute('hidden', '');
          RIGHT_ARROW.setAttribute('hidden', '');
          resolve();
        }, 250)
      })
    
      promise.then(() => {
        MODE_11.removeAttribute('hidden');
        MODE_11.animate({
          opacity: [0, 1]
        }, {
          duration: 300,
          easing: 'ease',
          fill: 'forwards'
        })
      })
    }
  }
}
