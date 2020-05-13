<?php

  if ($_GET == null) {
    echo json_encode('dont exist method');
  }
  else {
    if ($_GET['type'] == "contract") {
      //echo $_GET['type'];
      if ($_GET['mark'] != null) {
        //echo $_GET['mark'];
        $handle = opendir('./marks/'.$_GET['mark']);
          $files = array();
          while (false !== ($entry = readdir($handle))) {
            if ($entry != "." && $entry != "..")
              array_push($files, $entry);
          }
          echo json_encode($files);
          closedir($handle);
      }
    }
    if ($_GET['type'] == "liquidations") {
      //echo $_GET['type'];
      if ($_GET['mark'] != null) {
        //echo $_GET['mark'];
        $handle = opendir('./marks/'.$_GET['mark'].'/liquidations');
          $files = array();
          while (false !== ($entry = readdir($handle))) {
            if ($entry != "." && $entry != "..")
              array_push($files, $entry);
          }
          echo json_encode($files);
          closedir($handle);
      }
    }
  }

 ?>
