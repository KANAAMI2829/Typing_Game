<?php
  require('../../config/dbconnect.php');

  if (!empty($_POST)) {
    $account = $db->prepare('SELECT COUNT(*) AS cnt FROM accounts WHERE name=?');
    $account->execute(array($_POST['name']));
    $record = $account->fetch();

    if ($record['cnt'] > 0) {
      $error['name'] = 'duplicate';
    }

    if (empty($error['name'])) {
      $statement = $db->prepare('INSERT INTO accounts SET name=?, password=?, created=NOW()');
      echo $ret = $statement->execute(array(
        $_POST['name'], 
        password_hash($_POST['password'], PASSWORD_DEFAULT)
      ));
      unset($_POST);

      header('Location: thanks.php');
      exit();
    }
  }
?>
<!DOCTYPE html>
<html lang="ja">
  <head>
    <meta charset="UTF-8">
    <title>アカウント作成 - スキルアップタイピング</title>
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
      <h1>アカウント作成</h1>
      <p id="lead">次のフォームに必要事項をご記入ください</p>
      <p id="lead_login">既にアカウントをお持ちの場合は<a href="http://localhost:8888/typing_game/login/">こちら</a></p>
      <form action="" method="POST">
        <dl>
          <dt>ニックネーム<span class="notes">(20文字以下)</span><span class="required">*</span></dt>
          <dd><input type="text" id="input_name" name="name" size="40" maxlength="20" required>
            <?php if (!empty($error['name'])): ?>
              <p id="error_message" class="error">※この名前は既に使用されています。別の名前を入力してください。</p>
            <?php unset($_POST); endif; ?>
          </dd>
          <dt>パスワード<span class="notes">(6文字以上・半角英数字のみ)</span><span class="required">*</span></dt>
          <dd>
            <input type="password" id="input_pass" name="password" pattern="^[0-9a-zA-Z]+$" size="20" minlength="6" maxlength="20" required>
            <button id="button_passview">表示</button>
          </dd>
        </dl><hr id="form_hr">
        <div id="create_account_button"><input type="submit" value="アカウントを作成する"></div>
      </form>
    </main>
    <script src="js/main.js"></script>
  </body>
</html>
