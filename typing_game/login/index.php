<?php
  require('../../config/dbconnect.php');
  session_start();

  if (isset($_COOKIE['name'])) {
    if ($_COOKIE['name'] !== '') {
      $_POST['name'] = $_COOKIE['name'];
      $_POST['password'] = $_COOKIE['password'];
      $_POST['save'] = 'on';
    }
  }

  if (!empty($_POST)) {
    $login = $db->prepare('SELECT * FROM accounts WHERE name = ?');
    $login->execute(array($_POST['name']));
    $account = $login->fetch(PDO::FETCH_ASSOC);

    if (!empty($account)) {
      $hash = $account['password'];

      if ($account['name'] === $_POST['name'] && password_verify($_POST['password'], $hash)) {
        $_SESSION['id'] = $account['id'];
        $_SESSION['time'] = time();

        if ($_POST['save'] === 'on') {
          setcookie('name', $_POST['name'], time() + 60 * 60 * 24 * 14);
          setcookie('password', $_POST['password'], time() + 60 * 60 * 24 * 14);
        }

        header('Location: http://localhost:8888/typing_game/');
      }
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
        <a class="homeButton" id="Home_Button" href="https://backdrop-kanaami.ssl-lolipop.jp/programming_class/typing_game/">
          <img src="../img/HOME_Button.svg" wixdth="32.35px" height="53.8px" alt="HOMEボタン">
        </a>
      </div>
    </header><hr id="header_hr">
    <main>
      <h1>ログイン</h1>
      <p id="lead">ニックネームとパスワードを入力してください</p>
      <p id="lead_create_account">まだアカウントをお持ちでない場合は<a href="http://localhost:8888/typing_game/join/">こちら</a></p>
      <form action="" method="POST">
        <dl>
          <dt>ニックネーム</dt>
          <dd><input type="text" id="input_name" name="name" size="40" maxlength="20" required></dd>
          <dt>パスワード</dt>
          <dd>
            <input type="password" id="input_pass" name="password" pattern="^[0-9a-zA-Z]+$" size="20" minlength="6" maxlength="20" required>
            <button id="button_passview">表示</button>
          </dd>
          <?php if (!empty($error)): ?>
            <p id="error_message" class="error">ニックネームまたはパスワードが正しくありません</p>
          <?php endif; ?>
          <dt></dt>
					<dd>
						<input id="save" type="checkbox" name="save" value="on"><label
						for="save">次回からは自動的にログインする</label>
					</dd>
        </dl><hr id="form_hr">
        <div id="login_button"><input type="submit" value="ログインする"></div>
      </form>
    </main>
    <script src="js/main.js"></script>
  </body>
</html>