<?php
  require('../dbconnect.php');
  session_start();

  if (empty($_SESSION) || $_SESSION['time'] + 3600 < time()) exit();
  if (empty($_POST)) exit();

  $accounts = $db->prepare('SELECT * FROM accounts WHERE id = ?');
  $accounts->execute(array($_SESSION['id']));
  $account = $accounts->fetch(PDO::FETCH_ASSOC);

  $high_score = (int)$account['score'];
  $new_score = (int)$_POST['score'];
  $new_rank = $_POST['rank'];

  if ($high_score < $new_score) {
    $sql = 'UPDATE accounts SET score = ?, rank = ? WHERE id = ?';
    $stmt = $db->prepare($sql);
    $params = array($new_score, $new_rank, $_SESSION['id']);
    $stmt->execute($params);
  }
  exit();
?>
