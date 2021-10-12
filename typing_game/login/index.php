<?php
  require('../../dbconnect.php');
  session_start();

  if (!empty($_POST)) {
    $login = $db->prepare('SELECT * FROM accounts WHERE name = ?');
    $login->execute(array($_POST['name']));
    $account = $login->fetch(PDO::FETCH_ASSOC);

    if (!preg_match('/^[0-9a-zA-Zぁ-んァ-ヴｦ-ﾟ一-龥]+$/u', $_POST['name'])) 'html改竄したりしないで、普通に使ってください';
    if (!preg_match('/^[0-9a-zA-Z!@#%&()_={}<>,.?\/\\\+\-\|\*\^\~\:\;\[\]\$]+$/u', $_POST['password'])) 'html改竄したりしないで、普通に使ってください';

    if (!empty($account)) {
      $hash = $account['password'];

      if ($account['name'] === $_POST['name'] && password_verify($_POST['password'], $hash)) {
        $_SESSION['id'] = $account['id'];
        $_SESSION['time'] = time();

        header('Location: https://backdrop-kanaami.ssl-lolipop.jp/typing_event/typing_game/');
      } else $error['login'] = 'failed';
    } else $error['login'] = 'failed';
  }
?>
<!DOCTYPE html>
<html lang="ja">
  <head>
    <meta charset="UTF-8">
    <title>ログイン - スキルアップタイピング</title>
    <link rel="stylesheet" href="css/styles.css">
  </head>
  <body>
    <header>
      <div id="Info_Left">
        <a class="homeButton" id="Home_Button" href="https://backdrop-kanaami.ssl-lolipop.jp/typing_event/typing_game/">
          <img src="../img/HOME_Button.svg" wixdth="32.35px" height="53.8px" alt="HOMEボタン">
        </a>
      </div>
    </header><hr id="header_hr">
    <main>
      <h1>ログイン</h1>
      <p id="lead">ニックネームとパスワードを入力してください</p>
      <p id="lead_create_account">まだアカウントをお持ちでない場合は<a href="https://backdrop-kanaami.ssl-lolipop.jp/typing_event/typing_game/join/">こちら</a></p>
      <form action="" method="POST">
        <dl>
          <dt>ニックネーム</dt>
          <dd><input type="text" id="input_name" name="name" pattern="^[0-9a-zA-Zぁ-んァ-ヴｦ-ﾟ一-龥]+$" size="40" maxlength="20" required></dd>
          <dt>パスワード</dt>
          <dd>
            <input type="password" autocomplete="current-password" id="input_pass" name="password" pattern="^[0-9a-zA-Z~!@#%&()_={}<>,.?\/\\\+\-\|\*\^\:\;\[\]\$]+$" size="20" minlength="6" maxlength="100" required>
            <button id="button_passview">表示</button>
          </dd>
          <?php if (!empty($error)): ?>
            <p id="error_message" class="error">ニックネームまたはパスワードが正しくありません</p>
          <?php endif; ?>
        </dl><hr id="form_hr">
        <div id="login_button"><input type="submit" value="ログインする"></div>
      </form>
    </main>
    <script src="js/main.js"></script>
  </body>
</html>
