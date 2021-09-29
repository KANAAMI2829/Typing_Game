<?php
  require('../dbconnect.php');
  session_start();

  $accounts = $db->prepare('SELECT * FROM accounts WHERE id = ?');
  $accounts->execute(array($_SESSION['id']));
  $account = $accounts->fetch(PDO::FETCH_ASSOC);

  $account_array = [];

  $account_array[] = $account['score'];
  $account_array[] = $account['rank'];
  $account_array[] = $account['ranking'];

  echo json_encode($account_array);
?>