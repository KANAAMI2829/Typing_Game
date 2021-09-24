<?php
  require('../config/dbconnect.php');
  session_start();

  $isLogin = false;

  if (isset($_SESSION['id']) && $_SESSION['time'] + 3600 > time()) {
    $_SESSION['time'] = time();
    $isLogin = true;

    $accounts = $db->prepare('SELECT * FROM accounts WHERE id = ?');
    $accounts->execute(array($_SESSION['id']));
    $account = $accounts->fetch(PDO::FETCH_ASSOC);
  }
?>
<!DOCTYPE html>
<html lang="ja">
  <head>
    <meta charset="UTF-8">
    <title>スキルアップタイピング</title>
    <meta name="description" content="あなたのタイピング力をランク別にチェックできます！">
    <meta name="keywords" content="タイピング,タイピングゲーム,タイピング練習">
    <link rel="stylesheet" href="css/styles.css">
  </head>
  <body>
    <header>
      <div id="Info_Left">
        <a class="homeButton" id="Home_Button">
          <img src="img/HOME_Button.svg" width="32.35px" height="53.8px" alt="HOMEボタン">
        </a>
        <a class="settings" id="Settings_Button">
          <img src="img/Settings.svg" width="60px" height="53.8px" alt="設定ボタン">
        </a>
      </div>
      <div id="Info_Right">
        <?php if ($isLogin): ?>
        <a class="logoutButton" id="logout_Button">
          <img src="img/logout.svg" height="61.5px" alt="ログアウトボタン">
        </a>
        <a class="accountButton" id="Account_Button">
          <img src="img/Account.svg" height="62px" alt="アカウントボタン">
        </a>
        <?php else: ?>
        <a class="loginButton" id="Login_Button" href="http://localhost:8888/typing_game/login/">
          <img src="img/login.svg" height="62px" alt="ログインボタン">
        </a>
        <a class="signUpButton" id="SignUp_Button" href="http://localhost:8888/typing_game/join/">
          <img src="img/Sign_Up_Button.svg" width="63px" alt="サインアップボタン">
        </a>
        <?php endif; ?>
        <a class="helpButton" id="Help_Button">
          <img src="img/Help_Button.svg" width="46px" alt="HELPボタン">
        </a>
      </div>
    </header><hr id="Header_hr">
    <section id="Settings_Screen" hidden>
      <div id="Setting_Contents">
        <h1>ゲーム設定</h1>
        <div class="settingElements">
          <div class="select">
            <h2>ゲームモード</h2>
            <select name="GameMode" id="Game_Mode">
              <option value="ja">日本語</option>
              <option value="en">英単語学習</option>
              <option value="pg">プログラミング</option>
            </select>
          </div>
          <div id="en_dtl" hidden>
            <div class="detailsSetting">
              <h2>学習範囲</h2>
              <select name="Grade" id="Grade">
                <option value="jhs1">中一</option>
                <option value="jhs2">中二</option>
                <option value="jhs3">中三</option>
                <option value="hs1">高一</option>
                <option value="hs2">高二</option>
                <option value="hs3">高三</option>
              </select>
            </div>
          </div>
          <div id="pg_dtl" hidden>
            <div class="detailsSetting">
              <h2>分野・言語</h2>
              <select name="Lang" id="Lang">
                <option value="js">JavaScript</option>
                <option value="c">C</option>
              </select>
            </div>
          </div><hr id="Settings_hr">
          <div class="select">
            <h2>制限時間</h2>
            <select name="TimeLimit" id="Time_Limit_Value">
              <option value="20">20秒</option>
              <option value="30">30秒</option>
              <option value="60" selected>60秒</option>
              <option value="90">90秒</option>
              <option value="120">120秒</option>
              <option value="240">240秒</option>
              <option value="600">600秒</option>
            </select>
          </div>
        </div>
        <a class="checkMarkButton" id="CheckMark_Button">
          <img src="img/CheckMark.svg" width="120px" alt="戻るボタン">
        </a>
      </div>
    </section>
    <section id="Help_Popup" hidden>
      <div class="popupInner">
        <div class="closeButton" id="Close_Button">
          <img src="img/Cross.svg" alt="閉じるボタン">
        </div>
        <div id="Help_Contents">
          <a id="Menu">
            <div id="Help_Title">ヘルプメニュー</div>
            <div class="menuContents" id="Menu1">
              <p><div class="triangle"></div> 基本的な操作方法について</p>
            </div>
            <div class="menuContents" id="Menu2">
              <p><div class="triangle"></div> モードについて</p>
            </div>
            <div class="menuContents" id="Menu3">
              <p><div class="triangle"></div> 結果画面について</p>
            </div>
          </a>
          <div id="Slides" hidden>
            <div class="return_Arrow" id="Return_Arrow" hidden>
              <img src="img/Return_Arrow.svg" alt="ヘルプメニューに戻るボタン">
            </div>
            <div class="left_Arrow" id="Left_Arrow" hidden>
              <img src="img/Arrow.svg" alt="前に戻るボタン">
            </div>
            <div class="right_Arrow" id="Right_Arrow">
              <img src="img/Arrow.svg" alt="次に進むボタン">
            </div>
            <div id="Instructions">
              <a class="slide" id="Instr_1" hidden>
                <img src="img/Help_Instr1.png" alt="ホームボタンの画像">
                <div>
                  Homeボタンを押すことで、どんな状況からでも<br>最初の画面に戻ることができます。
                </div>
              </a>
              <a class="slide" id="Instr_2" hidden>
                <img src="img/Help_Instr2.png" alt="設定ボタンの画像">
                <div>
                  Settingsボタンを押すことで、ゲーム途中でなければ<br>設定画面に行くことができます。
                </div>
              </a>
              <a class="slide" id="Instr_3" hidden>
                <img src="img/Help_Instr3.png" alt="完了ボタンの画像">
                <div>
                  設定が終わった後、完了ボタンを押すことで<br>変更が適用されます。
                </div>
              </a>
              <a class="slide" id="Instr_4" hidden>
                <div>
                  <h1>ショートカットキー</h1>
                  <ul>
                    <li id="Shortcut1">ゲーム途中でやり直す
                      <span id="ellipses1">…</span>
                      <span class="key">ESCキー</span>
                    </li>
                    <li id="Shortcut2">結果画面からやり直す
                      <span id="ellipses2">…</span>
                      <span class="key">ESCキー、SPACEキー</span>
                    </li>
                    <li id="Shortcut3">設定画面に行く
                      <span id="ellipses3">…</span>
                      <span class="key">Sキー</span>
                    </li>
                    <li id="Shortcut4">設定を適用してHOMEに戻る
                      <span id="ellipses4">…</span>
                      <span class="key">Hキー</span>
                    </li>
                  </ul>
                </div>
              </a>
            </div>
            <div id="Mode">
              <a class="slide" id="Mode_1" hidden>
                <img src="img/Help_Mode1.png" alt="モード選択の画像">
                <div>
                  モードは日本語・英単語学習・プログラミング<br>の三つがあります。
                </div>
              </a>
              <a class="slide" id="Mode_2" hidden>
                <img src="img/Help_Mode2.png" alt="日本語モードのゲーム画面の画像">
                <div>
                  日本語モードは、出てきたお題をローマ字入力で<br>タイプするモードです。
                </div>
              </a>
              <a class="slide" id="Mode_3" hidden>
                <img src="img/Help_Mode3.png" alt="日本語モードのタイプスペースの画像">
                <div>
                  緑色の文字はすでに打ち終わった文字で<br>青色の文字は現在打っている文字です。
                </div>
              </a>
              <a class="slide" id="Mode_4" hidden>
                <img src="img/Help_Mode4.png" alt="英単語学習モードのゲーム画面の画像">
                <div>
                  英単語学習モードは、出てきた日本語を英訳して<br>そのスペルをタイプするモードです。
                </div>
              </a>
              <a class="slide" id="Mode_5" hidden>
                <img src="img/Help_Mode5.png" alt="英単語学習モードでミスしている画像">
                <div>
                  一度ミスをしたら打てていないスペルが<br>見えるようになります。
                </div>
              </a>
              <a class="slide" id="Mode_6" hidden>
                <img src="img/Help_Mode6.png" alt="英単語学習モードの正答数の画像">
                <div>
                  正答数は、正しくタイプした時ではなく<br>お題をミスせずに打ち終えた時に加算されます。
                </div>
              </a>
              <a class="slide" id="Mode_7" hidden>
                <img src="img/Help_Mode7.png" alt="英単語学習モードのミス数の画像">
                <div>
                  そのため、ミス数も一度ミスした後は<br>いくらミスしても加算されません。
                </div>
              </a>
              <a class="slide" id="Mode_8" hidden>
                <img src="img/Help_Mode8.png" alt="プログラミングモードのゲーム画面の画像">
                <div>
                  プログラミングモードは、各分野の頻出用語が<br>お題として出されるモードです。
                </div>
              </a>
              <a class="slide" id="Mode_9" hidden>
                <img src="img/Help_Mode9.png" alt="JavaScriptを選択した時のお題の画像">
                <div>
                  分野・言語でJavaScriptを選択すると<br>JavaScriptの頻出用語が
                </div>
              </a>
              <a class="slide" id="Mode_10" hidden>
                <img src="img/Help_Mode10.png" alt="C言語を選択した時のお題の画像">
                <div>
                  Cを選択するとC言語の頻出用語が<br>出題されます。
                </div>
              </a>
              <a class="slide" id="Mode_11" hidden>
                <img src="img/Help_Instr2.png" alt="設定ボタンの画像">
                <div>
                  ゲームのモード設定はSettingsボタンから<br>確認・変更することができます。
                </div>
              </a>
            </div>
            <div id="Result">
              <a class="slide" id="Result_1" hidden>
                <img src="img/Help_Result1.png" alt="日本語モードの結果画面の画像">
                <div>
                  日本語・プログラミングモードの<br>結果画面は共通です。
                </div>
              </a>
              <a class="slide" id="Result_2" hidden>
                <img src="img/Help_Result2.png" alt="結果画面の中のWPMの画像">
                <div>
                  WPMとは、一分間に何文字打てたかという数値で<br>タイピングの速さの指標になります。
                </div>
              </a>
              <a class="slide" id="Result_3" hidden>
                <img src="img/Help_Result3.png" alt="結果画面の中のスコアの画像">
                <div>
                  スコアは、WPMに正確率を考慮したものです。<br>正確率がかなり影響するので<br>なるべくミスをしないように打ちましょう。
                </div>
              </a>
              <a class="slide" id="Result_4" hidden>
                <img src="img/Help_Result4.png" alt="結果画面の中のスコアの画像">
                <div>
                  ランクはそのモードでの腕前を表しています。<br>まずはAランク以上を目指してみましょう。
                </div>
              </a>
              <a class="slide" id="Result_5" hidden>
                <div>
                  <img src="img/RankList.png" alt="ランク一覧の画像">
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div class="background" id="Background"></div>
    </section>
    <main id="Typing_Game">
      <div id="Timer_Space">
        残り時間: <span id="Timer">0.00</span>
      </div>
      <div id="Count_Down">
        <span id="Count_Down_Number"></span>
      </div>
      <div id="Typing_Space">
        <div id="Japanese_Space">
          <span id="Japanese">スペースキーを押してスタート</span>
        </div>
        <div id="Setting_State">
          <div class="settingStateTimeLimit">制限時間: <span id="State_TimeLimit">60</span>秒</div>
          <div class="settingStateMode">
            モード: <span id="State_Mode">日本語</span><span id="State_Detail"></span>
          </div>
        </div>
        <div id="Hiragana_Space">
          <span id="Typed_Hiragana" style="color: #479400;">
          </span><span id="Now_Hiragana" style="color: #0f4f94;">
          </span><span id="Hiragana" style="color: #878f99;"></span>
        </div>
        <div id="Romaji_Space">
          <span id="Hint_Romaji" style="color: #a7b1be;">
          </span><span id="Typed_Romaji" style="color: #479400;">
          </span><span id="Romaji" style="color: #a7b1be;"></span>
        </div>
      </div>
      <div id="Miss_Alert">
        <span>Miss</span>
      </div>
      <ul id="Count_Space">
        <li class="counters" id="Good_Counter">打鍵数: <span id="Good">0</span></li>
        <li class="counters" id="Miss_Counter">ミス数: <span id="Miss">0</span></li>
        <li class="scores" id="WPM_Result">WPM: <span id="WPM">0</span></li>
        <li class="scores" id="Accuracy_Result">正確率: <span id="Accuracy">0</span>%</li>
        <li class="scores" id="Score_Result">スコア: <span id="Score">0</span></li>
      </ul>
      <div id="Rank_Space">
        <span id="Rank_Result">ランク</span>
        <span id="Rank"></span>
      </div>
      <div id="Restart">ESCキーまたはスペースキーでリスタート</div>
    </main>
    <script src="js/reibunTableJP.js"></script>
    <script src="js/reibunTableEN.js"></script>
    <script src="js/reibunTablePG.js"></script>
    <script src="js/romajiTable.js"></script>
    <script src="js/main.js"></script>
    <script src="js/settingFunctions.js"></script>
    <script src="js/helpPopupFunctions.js"></script>
    <script src="js/gameFunctions.js"></script>
    <script src="js/ENmodeFunctions.js"></script>
    <script src="js/PGmodeFunctions.js"></script>
    <script src="js/aimai.js"></script>
    <script src="js/aimaiProcess.js"></script>
    <script src="js/animations.js"></script>
    <script src="js/helpSlideAnimations.js"></script>
  </body>
</html>
