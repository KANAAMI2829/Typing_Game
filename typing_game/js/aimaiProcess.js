'use strict';

// "ん"以外のあいまい入力処理
function aimaiProcess(hiragana) {
  Hiragana_Next_2    = hiragana[Hiragana_Index + 2];
  Hiragana_Next      = hiragana[Hiragana_Index + 1];
  Hiragana_Now       = hiragana[Hiragana_Index];

  // 適切なあいまい入力処理を呼び出す分岐処理
  if (Object.keys(ROMAJI_TABLE_4).indexOf(Three_Letters) !== -1
  || Object.keys(ROMAJI_TABLE_3).indexOf(Two_Letters) !== -1) {
    aimaiSokuon();
  } else if (Object.keys(ROMAJI_TABLE_2).indexOf(Two_Letters) !== -1) {
    if (aimai_2() !== false) {
      return;
    } else {
      typeOneHiragana();
    }
  } else {
    aimai_1();
  }

  // 一文字ずつ打つ場合の処理 (例:"きゃ(kya)"を"きゃ(kilya)"と打つ場合など
  function typeOneHiragana() {
    if (Hiragana_Now === 'つ') {
      if (TypedKey === 'tu') ROMAJI.textContent = 'ul' + ROMAJI.textContent.slice(1);
      else if (TypedKey === 'tsu') ROMAJI.textContent = 'ul' + ROMAJI.textContent;
    }
    if (Hiragana_Now === 'て' || Hiragana_Now === 'で') {
      if (TypedKey === ROMAJI_TABLE_1[Hiragana_Now][0]) {
        if (Hiragana_Next === 'ぃ' || Hiragana_Next === 'ぇ') ROMAJI.textContent = 'el' + ROMAJI.textContent.slice(1);
        else ROMAJI.textContent = 'ely' + ROMAJI.textContent.slice(1);
      }
    }
    if (Hiragana_Now === 'と' || Hiragana_Now === 'ど') {
      if (TypedKey === ROMAJI_TABLE_1[Hiragana_Now][0]) ROMAJI.textContent = 'ol' + ROMAJI.textContent.slice(1);
    }
    if (Hiragana_Now === 'ぐ') {
      if (TypedKey === ROMAJI_TABLE_1[Hiragana_Now][0]) ROMAJI.textContent = 'ul' + ROMAJI.textContent.slice(1);
    }

    if (Hiragana_Now === 'き'
    || Hiragana_Now === 'に'
    || Hiragana_Now === 'ひ'
    || Hiragana_Now === 'み'
    || Hiragana_Now === 'り'
    || Hiragana_Now === 'ぎ'
    || Hiragana_Now === 'ぢ'
    || Hiragana_Now === 'び'
    || Hiragana_Now === 'ぴ'
    || Hiragana_Now === 'い') {
      if (TypedKey === ROMAJI_TABLE_1[Hiragana_Now][0]) {
        if (Hiragana_Next === 'ぃ' || Hiragana_Next === 'ぇ') ROMAJI.textContent = 'il' + ROMAJI.textContent.slice(1);
        else ROMAJI.textContent = 'il' + ROMAJI.textContent;
      }
    }
  }

  function aimai_1() {
    if (Hiragana_Now === 'う') {
      if (TypedKey === 'w') {
        ROMAJI.textContent = 'w' + ROMAJI.textContent;
      } else if (TypedKey === 'wh') {
        ROMAJI.textContent = 'h' + ROMAJI.textContent;
      }
    }
  
    if (Hiragana_Now === 'か' && TypedKey === 'c') {
      ROMAJI.textContent = 'c' + ROMAJI.textContent.slice(1);
    }
  
    if (Hiragana_Now === 'く' && TypedKey === 'c') {
      ROMAJI.textContent = 'c' + ROMAJI.textContent.slice(1);
    }
  
    if (Hiragana_Now === 'こ' && TypedKey === 'c') {
      ROMAJI.textContent = 'c' + ROMAJI.textContent.slice(1);
    }
  
    if (Hiragana_Now === 'し') {
      if (TypedKey === 'sh') {
        ROMAJI.textContent = 'h' + ROMAJI.textContent;
      } else if (TypedKey === 'c') {
        ROMAJI.textContent = 'c' + ROMAJI.textContent.slice(1);
      }
    }
  
    if (Hiragana_Now === 'せ' && TypedKey === 'c') {
      ROMAJI.textContent = 'c' + ROMAJI.textContent.slice(1);
    }
  
    if (Hiragana_Now === 'ち' && TypedKey === 'c') {
      ROMAJI.textContent = 'ch' + ROMAJI.textContent.slice(1);
    }
  
    if (Hiragana_Now === 'つ' && TypedKey === 'ts') {
      ROMAJI.textContent = 's' + ROMAJI.textContent;
    }
  
    if (Hiragana_Now === 'ふ' && TypedKey === 'f') {
      ROMAJI.textContent = 'f' + ROMAJI.textContent.slice(1);
    }
  
    if (Hiragana_Now === 'じ' && TypedKey === 'z') {
      ROMAJI.textContent = 'z' + ROMAJI.textContent.slice(1);
    }
  
    if (Hiragana_Now === 'っ') {
      if (TypedKey === 'lts') {
        ROMAJI.textContent = 's' + ROMAJI.textContent;
      } else if (TypedKey === 'x') {
        ROMAJI.textContent = 'x' + ROMAJI.textContent.slice(1);
      } else if (TypedKey === 'xts') {
        ROMAJI.textContent = 's' + ROMAJI.textContent;
      }
    }
  
    if (Hiragana_Now === 'ぁ' && TypedKey === 'x') {
      ROMAJI.textContent = 'x' + ROMAJI.textContent.slice(1);
    }
  
    if (Hiragana_Now === 'ぃ') {
      if (TypedKey === 'ly') {
        ROMAJI.textContent = 'y' + ROMAJI.textContent;
      } else if (TypedKey === 'x') {
        ROMAJI.textContent = 'x' + ROMAJI.textContent.slice(1);
      } else if (TypedKey === 'xy') {
        ROMAJI.textContent = 'y' + ROMAJI.textContent;
      }
    }
  
    if (Hiragana_Now === 'ぅ' && TypedKey === 'x') {
      ROMAJI.textContent = 'x' + ROMAJI.textContent.slice(1);
    }
  
    if (Hiragana_Now === 'ぇ') {
      if (TypedKey === 'ly') {
        ROMAJI.textContent = 'y' + ROMAJI.textContent;
      } else if (TypedKey === 'x') {
        ROMAJI.textContent = 'x' + ROMAJI.textContent.slice(1);
      } else if (TypedKey === 'xy') {
        ROMAJI.textContent = 'y' + ROMAJI.textContent;
      }
    }
  
    if (Hiragana_Now === 'ぉ' && TypedKey === 'x') {
      ROMAJI.textContent = 'x' + ROMAJI.textContent.slice(1);
    }
  
    if (Hiragana_Now === 'ゃ' && TypedKey === 'x') {
      ROMAJI.textContent = 'x' + ROMAJI.textContent.slice(1);
    }
  
    if (Hiragana_Now === 'ゅ' && TypedKey === 'x') {
      ROMAJI.textContent = 'x' + ROMAJI.textContent.slice(1);
    }
  
    if (Hiragana_Now === 'ょ' && TypedKey === 'x') {
      ROMAJI.textContent = 'x' + ROMAJI.textContent.slice(1);
    }
  
    if (Hiragana_Now === 'ゎ' && TypedKey === 'x') {
      ROMAJI.textContent = 'x' + ROMAJI.textContent.slice(1);
    }
  
    if (Hiragana_Now === 'ヵ' && TypedKey === 'x') {
      ROMAJI.textContent = 'x' + ROMAJI.textContent.slice(1);
    }
  
    if (Hiragana_Now === 'ヶ' && TypedKey === 'x') {
      ROMAJI.textContent = 'x' + ROMAJI.textContent.slice(1);
    }
  }


  function aimai_2() {
    if (Two_Letters === 'しゃ') {
      if (TypedKey === 'shi') {
        ROMAJI.textContent = 'i' + ROMAJI_TABLE_1[Hiragana_Next][0] + ROMAJI.textContent.slice(1);
      } else if (TypedKey === 'si') {
        ROMAJI.textContent = 'i' + ROMAJI_TABLE_1[Hiragana_Next][0] + ROMAJI.textContent.slice(2);
      } else if (TypedKey === 'c') {
        ROMAJI.textContent = 'ci' + ROMAJI_TABLE_1[Hiragana_Next][0] + ROMAJI.textContent.slice(3);
      } else if (TypedKey === 'sh') {
        ROMAJI.textContent = 'h' + ROMAJI.textContent.slice(1);
      }
    }

    if (Two_Letters === 'しぃ') {
      if (TypedKey === 'sh') {
        ROMAJI.textContent = 'hi' + ROMAJI_TABLE_1[Hiragana_Next][0] + ROMAJI.textContent.slice(2);
      } else if (TypedKey === 'si') {
        ROMAJI.textContent = 'i' + ROMAJI_TABLE_1[Hiragana_Next][0] + ROMAJI.textContent.slice(2);
      } else if (TypedKey === 'c') {
        ROMAJI.textContent = 'ci' + ROMAJI_TABLE_1[Hiragana_Next][0] + ROMAJI.textContent.slice(3);
      }
    }

    if (Two_Letters === 'しゅ') {
      if (TypedKey === 'shi') {
        ROMAJI.textContent = 'i' + ROMAJI_TABLE_1[Hiragana_Next][0] + ROMAJI.textContent.slice(1);
      } else if (TypedKey === 'si') {
        ROMAJI.textContent = 'i' + ROMAJI_TABLE_1[Hiragana_Next][0] + ROMAJI.textContent.slice(2);
      } else if (TypedKey === 'c') {
        ROMAJI.textContent = 'ci' + ROMAJI_TABLE_1[Hiragana_Next][0] + ROMAJI.textContent.slice(3);
      } else if (TypedKey === 'sh') {
        ROMAJI.textContent = 'h' + ROMAJI.textContent.slice(1);
      }
    }

    if (Two_Letters === 'しぇ') {
      if (TypedKey === 'shi') {
        ROMAJI.textContent = 'i' + ROMAJI_TABLE_1[Hiragana_Next][0] + ROMAJI.textContent.slice(1);
      } else if (TypedKey === 'si') {
        ROMAJI.textContent = 'i' + ROMAJI_TABLE_1[Hiragana_Next][0] + ROMAJI.textContent.slice(2);
      } else if (TypedKey === 'c') {
        ROMAJI.textContent = 'ci' + ROMAJI_TABLE_1[Hiragana_Next][0] + ROMAJI.textContent.slice(3);
      } else if (TypedKey === 'sh') {
        ROMAJI.textContent = 'h' + ROMAJI.textContent.slice(1);
      }
    }

    if (Two_Letters === 'しょ') {
      if (TypedKey === 'shi') {
        ROMAJI.textContent = 'i' + ROMAJI_TABLE_1[Hiragana_Next][0] + ROMAJI.textContent.slice(1);
      } else if (TypedKey === 'si') {
        ROMAJI.textContent = 'i' + ROMAJI_TABLE_1[Hiragana_Next][0] + ROMAJI.textContent.slice(2);
      } else if (TypedKey === 'c') {
        ROMAJI.textContent = 'ci' + ROMAJI_TABLE_1[Hiragana_Next][0] + ROMAJI.textContent.slice(3);
      } else if (TypedKey === 'sh') {
        ROMAJI.textContent = 'h' + ROMAJI.textContent.slice(1);
      }
    }

    if (Two_Letters === 'ちゃ') {
      if (TypedKey === 'ti') {
        ROMAJI.textContent = 'i' + ROMAJI_TABLE_1[Hiragana_Next][0] + ROMAJI.textContent.slice(2);
      } else if (TypedKey === 'chi') {
        ROMAJI.textContent = 'i' + ROMAJI_TABLE_1[Hiragana_Next][0] + ROMAJI.textContent.slice(1);
      } else if (TypedKey === 'c') {
        ROMAJI.textContent = 'ch' + ROMAJI.textContent.slice(2);
      } else if (TypedKey === 'cy') {
        ROMAJI.textContent = 'y' + ROMAJI.textContent.slice(1);
      }
    }

    if (Two_Letters === 'ちぃ') {
      if (TypedKey === 'ti') {
        ROMAJI.textContent = 'i' + ROMAJI_TABLE_1[Hiragana_Next][0] + ROMAJI.textContent.slice(2);
      } else if (TypedKey === 'ch') {
        ROMAJI.textContent = 'hi' + ROMAJI_TABLE_1[Hiragana_Next][0] + ROMAJI.textContent.slice(2);
      } else if (TypedKey === 'c') {
        ROMAJI.textContent = 'c' + ROMAJI.textContent.slice(1);
      }
    }

    if (Two_Letters === 'ちゅ') {
      if (TypedKey === 'ti') {
        ROMAJI.textContent = 'i' + ROMAJI_TABLE_1[Hiragana_Next][0] + ROMAJI.textContent.slice(2);
      } else if (TypedKey === 'chi') {
        ROMAJI.textContent = 'i' + ROMAJI_TABLE_1[Hiragana_Next][0] + ROMAJI.textContent.slice(1);
      } else if (TypedKey === 'c') {
        ROMAJI.textContent = 'ch' + ROMAJI.textContent.slice(2);
      } else if (TypedKey === 'cy') {
        ROMAJI.textContent = 'y' + ROMAJI.textContent.slice(1);
      }
    }

    if (Two_Letters === 'ちぇ') {
      if (TypedKey === 'ti') {
        ROMAJI.textContent = 'i' + ROMAJI_TABLE_1[Hiragana_Next][0] + ROMAJI.textContent.slice(2);
      } else if (TypedKey === 'chi') {
        ROMAJI.textContent = 'i' + ROMAJI_TABLE_1[Hiragana_Next][0] + ROMAJI.textContent.slice(1);
      } else if (TypedKey === 'c') {
        ROMAJI.textContent = 'ch' + ROMAJI.textContent.slice(2);
      } else if (TypedKey === 'cy') {
        ROMAJI.textContent = 'y' + ROMAJI.textContent.slice(1);
      }
    }

    if (Two_Letters === 'ちょ') {
      if (TypedKey === 'ti') {
        ROMAJI.textContent = 'i' + ROMAJI_TABLE_1[Hiragana_Next][0] + ROMAJI.textContent.slice(2);
      } else if (TypedKey === 'chi') {
        ROMAJI.textContent = 'i' + ROMAJI_TABLE_1[Hiragana_Next][0] + ROMAJI.textContent.slice(1);
      } else if (TypedKey === 'c') {
        ROMAJI.textContent = 'ch' + ROMAJI.textContent.slice(2);
      } else if (TypedKey === 'cy') {
        ROMAJI.textContent = 'y' + ROMAJI.textContent.slice(1);
      }
    }

    if (Two_Letters === 'じゃ') {
      if (TypedKey === 'ji') {
        ROMAJI.textContent = 'i' + ROMAJI_TABLE_1[Hiragana_Next][0] + ROMAJI.textContent.slice(1);
      } else if (TypedKey === 'zi') {
        ROMAJI.textContent = 'i' + ROMAJI_TABLE_1[Hiragana_Next][0] + ROMAJI.textContent.slice(2);
      } else if (TypedKey === 'jy') {
        ROMAJI.textContent = 'y' + ROMAJI.textContent;
      } else if (TypedKey === 'z') {
        ROMAJI.textContent = 'zy' + ROMAJI.textContent.slice(1);
      }
    }

    if (Two_Letters === 'じぃ') {
      if (TypedKey === 'ji') {
        ROMAJI.textContent = 'i' + ROMAJI_TABLE_1[Hiragana_Next][0] + ROMAJI.textContent.slice(2);
      } else if (TypedKey === 'zi') {
        ROMAJI.textContent = 'i' + ROMAJI_TABLE_1[Hiragana_Next][0] + ROMAJI.textContent.slice(2);
      } else if (TypedKey === 'j') {
        ROMAJI.textContent = 'j' + ROMAJI.textContent.slice(1);
      }
    }

    if (Two_Letters === 'じゅ') {
      if (TypedKey === 'ji') {
        ROMAJI.textContent = 'i' + ROMAJI_TABLE_1[Hiragana_Next][0] + ROMAJI.textContent.slice(1);
      } else if (TypedKey === 'zi') {
        ROMAJI.textContent = 'i' + ROMAJI_TABLE_1[Hiragana_Next][0] + ROMAJI.textContent.slice(2);
      } else if (TypedKey === 'jy') {
        ROMAJI.textContent = 'y' + ROMAJI.textContent;
      } else if (TypedKey === 'z') {
        ROMAJI.textContent = 'zy' + ROMAJI.textContent.slice(1);
      }
    }

    if (Two_Letters === 'じぇ') {
      if (TypedKey === 'ji') {
        ROMAJI.textContent = 'i' + ROMAJI_TABLE_1[Hiragana_Next][0] + ROMAJI.textContent.slice(1);
      } else if (TypedKey === 'zi') {
        ROMAJI.textContent = 'i' + ROMAJI_TABLE_1[Hiragana_Next][0] + ROMAJI.textContent.slice(2);
      } else if (TypedKey === 'jy') {
        ROMAJI.textContent = 'y' + ROMAJI.textContent;
      } else if (TypedKey === 'z') {
        ROMAJI.textContent = 'zy' + ROMAJI.textContent.slice(1);
      }
    }

    if (Two_Letters === 'じょ') {
      if (TypedKey === 'ji') {
        ROMAJI.textContent = 'i' + ROMAJI_TABLE_1[Hiragana_Next][0] + ROMAJI.textContent.slice(1);
      } else if (TypedKey === 'zi') {
        ROMAJI.textContent = 'i' + ROMAJI_TABLE_1[Hiragana_Next][0] + ROMAJI.textContent.slice(2);
      } else if (TypedKey === 'jy') {
        ROMAJI.textContent = 'y' + ROMAJI.textContent;
      } else if (TypedKey === 'z') {
        ROMAJI.textContent = 'zy' + ROMAJI.textContent.slice(1);
      }
    }

    if (Two_Letters === 'うぁ') {
      if (TypedKey === 'u') {
        ROMAJI.textContent = 'ul' + ROMAJI.textContent.slice(2);
      } else if (TypedKey === 'wu') {
        ROMAJI.textContent = 'ul' + ROMAJI.textContent.slice(1);
      } else if (TypedKey === 'whu') {
        ROMAJI.textContent = 'ul' + ROMAJI.textContent;
      }
    }

    if (Two_Letters === 'うぃ') {
      if (TypedKey === 'u') {
        ROMAJI.textContent = 'u' + ROMAJI_TABLE_1[Hiragana_Next][0] + ROMAJI.textContent.slice(2);
      } else if (TypedKey === 'wu') {
        ROMAJI.textContent = 'u' + ROMAJI_TABLE_1[Hiragana_Next][0] + ROMAJI.textContent.slice(1);
      } else if (TypedKey === 'whu') {
        ROMAJI.textContent = 'u' + ROMAJI_TABLE_1[Hiragana_Next][0] + ROMAJI.textContent.slice(1);
      } else if (TypedKey === 'wh') {
        ROMAJI.textContent = 'h' + ROMAJI.textContent;
      }
    }

    if (Two_Letters === 'うぇ') {
      if (TypedKey === 'u') {
        ROMAJI.textContent = 'u' + ROMAJI_TABLE_1[Hiragana_Next][0] + ROMAJI.textContent.slice(2);
      } else if (TypedKey === 'wu') {
        ROMAJI.textContent = 'u' + ROMAJI_TABLE_1[Hiragana_Next][0] + ROMAJI.textContent.slice(1);
      } else if (TypedKey === 'whu') {
        ROMAJI.textContent = 'u' + ROMAJI_TABLE_1[Hiragana_Next][0] + ROMAJI.textContent.slice(1);
      } else if (TypedKey === 'wh') {
        ROMAJI.textContent = 'h' + ROMAJI.textContent;
      }
    }

    if (Two_Letters === 'うぉ') {
      if (TypedKey === 'u') {
        ROMAJI.textContent = 'ul' + ROMAJI.textContent.slice(2);
      } else if (TypedKey === 'wu') {
        ROMAJI.textContent = 'ul' + ROMAJI.textContent.slice(1);
      } else if (TypedKey === 'whu') {
        ROMAJI.textContent = 'ul' + ROMAJI.textContent;
      }
    }

    if (Two_Letters === 'くぁ') {
      if (TypedKey === 'ku') {
        ROMAJI.textContent = 'u' + ROMAJI_TABLE_1[Hiragana_Next][0] + ROMAJI.textContent.slice(2);
      } else if (TypedKey === 'c') {
        ROMAJI.textContent = 'cu' + ROMAJI_TABLE_1[Hiragana_Next][0] + ROMAJI.textContent.slice(2);
      } else if (TypedKey === 'k') {
        ROMAJI.textContent = 'kw' + ROMAJI.textContent.slice(1);
      }
    }

    if (Two_Letters === 'くぃ') {
      if (TypedKey === 'ku') {
        ROMAJI.textContent = 'u' + ROMAJI_TABLE_1[Hiragana_Next][0] + ROMAJI.textContent.slice(2);
      } else if (TypedKey === 'c') {
        ROMAJI.textContent = 'cu' + ROMAJI_TABLE_1[Hiragana_Next][0] + ROMAJI.textContent.slice(2);
      } else if (TypedKey === 'k') {
        ROMAJI.textContent = 'kw' + ROMAJI.textContent.slice(1);
      }
    }

    if (Two_Letters === 'くぅ') {
      if (TypedKey === 'k') {
        ROMAJI.textContent = 'kul' + ROMAJI.textContent.slice(1);
      } else if (TypedKey === 'c') {
        ROMAJI.textContent = 'cul' + ROMAJI.textContent.slice(1);
      }
    }

    if (Two_Letters === 'くぇ') {
      if (TypedKey === 'ku') {
        ROMAJI.textContent = 'u' + ROMAJI_TABLE_1[Hiragana_Next][0] + ROMAJI.textContent.slice(2);
      } else if (TypedKey === 'c') {
        ROMAJI.textContent = 'cu' + ROMAJI_TABLE_1[Hiragana_Next][0] + ROMAJI.textContent.slice(2);
      } else if (TypedKey === 'k') {
        ROMAJI.textContent = 'kw' + ROMAJI.textContent.slice(1);
      }
    }

    if (Two_Letters === 'くぉ') {
      if (TypedKey === 'ku') {
        ROMAJI.textContent = 'u' + ROMAJI_TABLE_1[Hiragana_Next][0] + ROMAJI.textContent.slice(2);
      } else if (TypedKey === 'c') {
        ROMAJI.textContent = 'cu' + ROMAJI_TABLE_1[Hiragana_Next][0] + ROMAJI.textContent.slice(2);
      } else if (TypedKey === 'k') {
        ROMAJI.textContent = 'kw' + ROMAJI.textContent.slice(1);
      }
    }

    if (Two_Letters === 'ふぁ') {
      if (TypedKey === 'fu') {
        ROMAJI.textContent = 'ul' + ROMAJI.textContent;
      } else if (TypedKey === 'h') {
        ROMAJI.textContent = 'hul' + ROMAJI.textContent.slice(1);
      }
    }

    if (Two_Letters === 'ふゃ') {
      if (TypedKey === 'fu') {
        ROMAJI.textContent = 'ul' + ROMAJI.textContent;
      } else if (TypedKey === 'h') {
        ROMAJI.textContent = 'hul' + ROMAJI.textContent.slice(1);
      }
    }

    if (Two_Letters === 'ふぃ') {
      if (TypedKey === 'fy') {
        ROMAJI.textContent = 'y' + ROMAJI.textContent;
      } else if (TypedKey === 'fu') {
        ROMAJI.textContent = 'ul' + ROMAJI.textContent;
      } else if (TypedKey === 'h') {
        ROMAJI.textContent = 'hul' + ROMAJI.textContent.slice(1);
      }
    }

    if (Two_Letters === 'ふゅ') {
      if (TypedKey === 'fu') {
        ROMAJI.textContent = 'ul' + ROMAJI.textContent;
      } else if (TypedKey === 'h') {
        ROMAJI.textContent = 'hul' + ROMAJI.textContent.slice(1);
      }
    }

    if (Two_Letters === 'ふぇ') {
      if (TypedKey === 'fy') {
        ROMAJI.textContent = 'y' + ROMAJI.textContent;
      } else if (TypedKey === 'fu') {
        ROMAJI.textContent = 'ul' + ROMAJI.textContent;
      } else if (TypedKey === 'h') {
        ROMAJI.textContent = 'hul' + ROMAJI.textContent.slice(1);
      }
    }

    if (Two_Letters === 'ふぉ') {
      if (TypedKey === 'fu') {
        ROMAJI.textContent = 'ul' + ROMAJI.textContent;
      } else if (TypedKey === 'h') {
        ROMAJI.textContent = 'hul' + ROMAJI.textContent.slice(1);
      }
    }

    if (Two_Letters === 'ふょ') {
      if (TypedKey === 'fu') {
        ROMAJI.textContent = 'ul' + ROMAJI.textContent;
      } else if (TypedKey === 'h') {
        ROMAJI.textContent = 'hul' + ROMAJI.textContent.slice(1);
      }
    }

    if (Two_Letters === 'ゔぁ') {
      if (TypedKey === 'vu') {
        ROMAJI.textContent = 'ul' + ROMAJI.textContent;
      }
    }

    if (Two_Letters === 'ゔゃ') {
      if (TypedKey === 'vu') {
        ROMAJI.textContent = 'ul' + ROMAJI.textContent;
      }
    }

    if (Two_Letters === 'ゔぃ') {
      if (TypedKey === 'vu') {
        ROMAJI.textContent = 'u' + ROMAJI_TABLE_1[Hiragana_Next][0] + ROMAJI.textContent.slice(1);
      } else if (TypedKey === 'vy') {
        ROMAJI.textContent = 'y' + ROMAJI.textContent;
      }
    }

    if (Two_Letters === 'ゔゅ') {
      if (TypedKey === 'vu') {
        ROMAJI.textContent = 'ul' + ROMAJI.textContent;
      }
    }

    if (Two_Letters === 'ゔぇ') {
      if (TypedKey === 'vu') {
        ROMAJI.textContent = 'u' + ROMAJI_TABLE_1[Hiragana_Next][0] + ROMAJI.textContent.slice(1);
      } else if (TypedKey === 'vy') {
        ROMAJI.textContent = 'y' + ROMAJI.textContent;
      }
    }

    if (Two_Letters === 'ゔぉ') {
      if (TypedKey === 'vu') {
        ROMAJI.textContent = 'ul' + ROMAJI.textContent;
      }
    }

    if (Two_Letters === 'ゔょ') {
      if (TypedKey === 'vu') {
        ROMAJI.textContent = 'ul' + ROMAJI.textContent;
      }
    }
    return false;
  }

  function aimaiSokuon() { // 促音はアルゴリズム化
    let Three_Letters = Hiragana_Now + Hiragana_Next + Hiragana_Next_2;
    let Two_Letters = Hiragana_Now + Hiragana_Next;
    let Now_Hiragana_Romaji_4 = ROMAJI_TABLE_4[Three_Letters];
    let Now_Hiragana_Romaji_3 = ROMAJI_TABLE_3[Two_Letters];
    let Match_Number = 0;
    let Found = false;
    let Completed = false;

    if (TypedKey === 'l') {
      ROMAJI.textContent = 'ltu' + ROMAJI.textContent.slice(1);
      HIRAGANA.textContent = NOW_HIRAGANA.textContent.slice(1) + HIRAGANA.textContent;
      NOW_HIRAGANA.textContent = NOW_HIRAGANA.textContent[0];
      return;
    } else if (TypedKey === 'x') {
      ROMAJI.textContent = 'xtu' + ROMAJI.textContent.slice(1);
      HIRAGANA.textContent = NOW_HIRAGANA.textContent.slice(1) + HIRAGANA.textContent;
      NOW_HIRAGANA.textContent = NOW_HIRAGANA.textContent[0];
      return;
    } else if (TypedKey === 'lts' || TypedKey === 'xts') {
      ROMAJI.textContent = 's' + ROMAJI.textContent;
      return;
    } else if (Now_Hiragana_Romaji_4 === undefined || Now_Hiragana_Romaji_3 === undefined) {
      return;
    }

    while (Completed !== true) {
      if (Now_Hiragana_Romaji_4[Match_Number] !== undefined) {
        if (Now_Hiragana_Romaji_4[Match_Number].indexOf(TypedKey) !== -1) {
          ROMAJI.textContent = ROMAJI.textContent.replace(`${Now_Hiragana_Romaji_4[0]}`,`${Now_Hiragana_Romaji_4[Match_Number]}`);
          Found = true;
        } else {
          Match_Number++;
        }
      } else if (Now_Hiragana_Romaji_3[Match_Number] !== undefined) {
        if (Now_Hiragana_Romaji_3[Match_Number].indexOf(TypedKey) !== -1) {
          ROMAJI.textContent = ROMAJI.textContent.replace(`${Now_Hiragana_Romaji_3[0]}`,`${Now_Hiragana_Romaji_3[Match_Number]}`);
          Found = true;
        } else {
          Match_Number++;
        }
      } else if (Match_Number >= 3) break;

      if (Found) {
        Hiragana_Index++;
        Hiragana_Next_3 = hiragana[3];
        Hiragana_Next_2 = hiragana[2];
        Hiragana_Next   = hiragana[1];
        Hiragana_Now    = hiragana[0];
        TypedKey = TypedKey.slice(1);
        Completed = true;
      }
    }
  }
}

function hiragana_NN(hiragana) { // "ん"のあいまい入力処理はちょっと異質なので分けた
  Hiragana_Next_3 = hiragana[Hiragana_Index + 3];
  Hiragana_Next_2 = hiragana[Hiragana_Index + 2];
  Hiragana_Next   = hiragana[Hiragana_Index + 1];
  Hiragana_Now    = hiragana[Hiragana_Index];

  if (Hiragana_Now !== 'ん') {
    return false;
  }
  if (TypedKey === 'n') {
    return true;
  }
  if (TypedKey === 'nn') {
    Hiragana_Index++;
    TypedKey = '';
    changeTypedHiraganaColor(typeHiraganaSearch(Next_Three_Letters));
    return true;
  }
  if (TypedKey.match(/n[^aiueoyn]/g) === null) {
    return true;
  }

  const THREE_LETTER_EXCLUDE_NN = Hiragana_Next + Hiragana_Next_2 + Hiragana_Next_3;
  const TWO_LETTER_EXCLUDE_NN   = Hiragana_Next + Hiragana_Next_2;

  let Removed_N_from_TypedKey = TypedKey.slice(1);
  let Romaji_Match_Number = 0; // 部分一致するRomajiの打ち方を探すための数値(いい名前が思い浮かばなかった)
  let Found = false;
  let Completed = false;

  while (Completed !== true) { // "ん"の次のひらがなに合致するものを探す
    if (!Found) {
      if (ROMAJI_TABLE_4[THREE_LETTER_EXCLUDE_NN] !== undefined) {
        if (!ROMAJI_TABLE_4[THREE_LETTER_EXCLUDE_NN][Romaji_Match_Number].indexOf(Removed_N_from_TypedKey)) {
          Found = true;
        } else if (!ROMAJI_TABLE_3[TWO_LETTER_EXCLUDE_NN][Romaji_Match_Number].indexOf(Removed_N_from_TypedKey)) {
          Found = true;
        } else if (!ROMAJI_TABLE_1[Hiragana_Next][Romaji_Match_Number].indexOf(Removed_N_from_TypedKey)) {
          Found = true;
        } else {
          Romaji_Match_Number++;
        }
      } else if (ROMAJI_TABLE_3[TWO_LETTER_EXCLUDE_NN] !== undefined) {
        if (!ROMAJI_TABLE_3[TWO_LETTER_EXCLUDE_NN][Romaji_Match_Number].indexOf(Removed_N_from_TypedKey)) {
          Found = true;
        } else if (!ROMAJI_TABLE_1[Hiragana_Next][Romaji_Match_Number].indexOf(Removed_N_from_TypedKey)) {
          Found = true;
        } else {
          Romaji_Match_Number++;
        }
      } else if (ROMAJI_TABLE_2[TWO_LETTER_EXCLUDE_NN] !== undefined) {
        if (!ROMAJI_TABLE_2[TWO_LETTER_EXCLUDE_NN][Romaji_Match_Number].indexOf(Removed_N_from_TypedKey)) {
          Found = true;
        } else if (!ROMAJI_TABLE_1[Hiragana_Next][Romaji_Match_Number].indexOf(Removed_N_from_TypedKey)) {
          Found = true;
        } else {
          Romaji_Match_Number++;
        }
      } else if (ROMAJI_TABLE_1[Hiragana_Next] !== undefined) {
        if (!ROMAJI_TABLE_1[Hiragana_Next][Romaji_Match_Number].indexOf(Removed_N_from_TypedKey)) {
          Found = true;
        } else {
          Romaji_Match_Number++;
        }
      } else {
        return;
      }
    } else {
      changeTypedHiraganaColor(typeHiraganaSearch(Next_Three_Letters));
      Hiragana_Index++;
      Hiragana_Next_3    = hiragana[Hiragana_Index + 3];
      Hiragana_Next_2    = hiragana[Hiragana_Index + 2];
      Hiragana_Next      = hiragana[Hiragana_Index + 1];
      Hiragana_Now       = hiragana[Hiragana_Index];
      ROMAJI.textContent = Romaji.slice(1);
      TypedKey           = Removed_N_from_TypedKey;
      Completed          = true;
    }
  }
}
