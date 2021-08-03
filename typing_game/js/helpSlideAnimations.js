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
    }
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
        if (menu_num === 1) {
          INSTR_1.removeAttribute('hidden');
          INSTR_1.animate({
            opacity: [0, 1]
          }, {
            duration: 300,
            easing: 'ease',
            fill: 'forwards'
          })
        }
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
        if (menu_num === 1) {
          INSTR_2.removeAttribute('hidden');
          INSTR_2.animate({
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
        }
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
        if (menu_num === 1) {
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
        }
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
        RIGHT_ARROW.animate({
          opacity: [1, 0]
        }, {
          duration: 200,
          easing: 'ease',
          fill: 'forwards'
        })
        setTimeout(() => {
          INSTR_2.setAttribute('hidden', '');
          RIGHT_ARROW.setAttribute('hidden', '');
          resolve();
        }, 250)
      })
    
      promise.then(() => {
        if (menu_num === 1) {
          INSTR_3.removeAttribute('hidden');
          INSTR_3.animate({
            opacity: [0, 1]
          }, {
            duration: 300,
            easing: 'ease',
            fill: 'forwards'
          })
        }
      })
    }
  }
}
