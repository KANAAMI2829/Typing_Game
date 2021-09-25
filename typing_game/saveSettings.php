<?php
  require('../config/dbconnect.php');
  session_start();

  if (empty($_SESSION) || $_SESSION['time'] + 3600 < time()) {
    echo json_encode('invalid_login');
    exit();
  }

  if (empty($_POST)) {
    echo json_encode('post_empty');
    exit();
  }

  $sql = 'UPDATE accounts SET mode = ?, detail = ?, time_limit = ?, ranking = ? WHERE id = ?';
  $stmt = $db->prepare($sql);
  $params = array($_POST['mode'], $_POST['detail'], $_POST['time_limit'], $_POST['ranking'], $_SESSION['id']);
  $stmt->execute($params);
  exit();
?>
