'use strict';

let hiragana = TYPED_HIRAGANA.textContent + NOW_HIRAGANA.textContent + HIRAGANA.textContent;
let Hiragana_Next_6;
let Hiragana_Next_5;
let Hiragana_Next_4;
let Hiragana_Next_3;
let Hiragana_Next_2;
let Hiragana_Next;
let Hiragana_Now;
let Three_Letters;
let Two_Letters;
let Next_Three_Letters;
let Next_Two_Letters;
let Next_Type_Hiragana;

// あいまい入力処理の全体的な流れはここで確認
function aimai() {
  hiragana = TYPED_HIRAGANA.textContent + NOW_HIRAGANA.textContent + HIRAGANA.textContent;
  Hiragana_Next_5    = hiragana[Hiragana_Index + 5];
  Hiragana_Next_4    = hiragana[Hiragana_Index + 4];
  Hiragana_Next_3    = hiragana[Hiragana_Index + 3];
  Hiragana_Next_2    = hiragana[Hiragana_Index + 2];
  Hiragana_Next      = hiragana[Hiragana_Index + 1];
  Hiragana_Now       = hiragana[Hiragana_Index];
  Three_Letters      = Hiragana_Now + Hiragana_Next + Hiragana_Next_2;
  Two_Letters        = Hiragana_Now + Hiragana_Next;
  Next_Three_Letters = Hiragana_Next + Hiragana_Next_2 + Hiragana_Next_3;
  Next_Two_Letters   = Hiragana_Next + Hiragana_Next_2;

  if (HIRAGANA.textContent === '' && NOW_HIRAGANA.textContent === '') {
    return;
  }
  if (hiragana_NN(hiragana)) {
    return Hiragana_Now;
  }
  aimaiProcess(hiragana);
  Romaji = ROMAJI.textContent;

  // 今打つべきひらがなが打ち終わっているかを判別する処理
  if (Object.keys(ROMAJI_TABLE_4).indexOf(Three_Letters) !== -1
    && ROMAJI_TABLE_4[Three_Letters].indexOf(TypedKey) !== -1) {
    changeTypedHiraganaColor(typeHiraganaSearch(Hiragana_Next_3 + Hiragana_Next_4 + Hiragana_Next_5));
    Hiragana_Index += 3;
    TypedKey = '';
  } else if (Object.keys(ROMAJI_TABLE_3).indexOf(Two_Letters) !== -1
    && ROMAJI_TABLE_3[Two_Letters].indexOf(TypedKey) !== -1) {
    changeTypedHiraganaColor(typeHiraganaSearch(Hiragana_Next_2 + Hiragana_Next_3 + Hiragana_Next_4));
    Hiragana_Index += 2;
    TypedKey = '';
  } else if (Object.keys(ROMAJI_TABLE_2).indexOf(Two_Letters) !== -1
    && ROMAJI_TABLE_2[Two_Letters].indexOf(TypedKey) !== -1) {
    changeTypedHiraganaColor(typeHiraganaSearch(Hiragana_Next_2 + Hiragana_Next_3 + Hiragana_Next_4));
    Hiragana_Index += 2;
    TypedKey = '';
  } else if (ROMAJI_TABLE_1[Hiragana_Now].indexOf(TypedKey) !== -1) {
    changeTypedHiraganaColor(typeHiraganaSearch(Next_Three_Letters));
    Hiragana_Index++;
    TypedKey = '';
  }
  return Hiragana_Now;
}
