<?php
  require('../dbconnect.php');

  $sth = $db->prepare('SELECT name, score, rank FROM accounts WHERE ranking = "on" AND score != 0');
  $sth->execute();
  $all_result = $sth->fetchAll(PDO::FETCH_ASSOC);
  $ranking_data = array(
    "0" => 0, "1" => 0, "2" => 0, "3" => 0, "4" => 0, 
    "5" => 0, "6" => 0, "7" => 0, "8" => 0, "9" => 0
  );
  $ranking_array = array_fill(0, 10, '');
  if (count($all_result) > 9) {
    for ($i = 0; $i < 10; $i++) {
        $ranking_data["$i"] = (int)$all_result["$i"]['score'];
    }
  } else {
    for ($i = 0; $i < count($all_result); $i++) {
        $ranking_data["$i"] = (int)$all_result["$i"]['score'];
    }
  }

  arsort($ranking_data);
  $keys = array_keys($ranking_data);
  if (count($all_result) > 0) $ranking_array[0] = $all_result[(int)$keys[0]];
  if (count($all_result) > 1) $ranking_array[1] = $all_result[(int)$keys[1]];
  if (count($all_result) > 2) $ranking_array[2] = $all_result[(int)$keys[2]];
  if (count($all_result) > 3) $ranking_array[3] = $all_result[(int)$keys[3]];
  if (count($all_result) > 4) $ranking_array[4] = $all_result[(int)$keys[4]];
  if (count($all_result) > 5) $ranking_array[5] = $all_result[(int)$keys[5]];
  if (count($all_result) > 6) $ranking_array[6] = $all_result[(int)$keys[6]];
  if (count($all_result) > 7) $ranking_array[7] = $all_result[(int)$keys[7]];
  if (count($all_result) > 8) $ranking_array[8] = $all_result[(int)$keys[8]];
  if (count($all_result) > 9) $ranking_array[9] = $all_result[(int)$keys[9]];

  echo json_encode($ranking_array);
?>