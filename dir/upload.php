<?php
if ($_POST['type'] == null) {
    echo "error";
    return null;
}
if ($_POST['type'] == "upload") {
  //$nombre = $_FILES['archivo']['name'];
  $tipo = $_FILES['attachment_file']['type'];

  //echo json_encode($tipo);
  $dir_subida = realpath('./');
  $fichero_subido = $dir_subida . "/marks/".$_POST['referer']."/" . basename($_FILES['attachment_file']['name']);

  if (move_uploaded_file($_FILES['attachment_file']['tmp_name'], $fichero_subido)) {
    echo "ok";
  } else {
      echo "error";
  }
}
if ($_POST['type'] == "upload_img_profile") {
  //$nombre = $_FILES['archivo']['name'];
  $tipo = $_FILES['attachment_file']['type'];

  //echo json_encode($tipo);
  $dir_subida = realpath('./');
  $dir_exist = false;
  if (!file_exists($dir_subida."/users/".$_POST['user'])) {
    if(!mkdir($dir_subida."/users/".$_POST['user']."/", 0777, true)) {
      echo "error";
    }
  }
  //$fichero_subido = $dir_subida . "/users/".$_POST['user']."/" . basename($_FILES['attachment_file']['name']);
  $fichero_subido = $dir_subida . "/users/".$_POST['user']."/".$_POST['user'].".png";

  if (move_uploaded_file($_FILES['attachment_file']['tmp_name'], $fichero_subido)) {
      echo "ok";
  } else {
      echo "error";
  }
}
if ($_POST['type'] == "upload_img_agency") {
  //$nombre = $_FILES['archivo']['name'];
  $tipo = $_FILES['attachment_file']['type'];

  //echo json_encode($tipo);
  $dir_subida = realpath('./');
  $dir_exist = false;
  if (!file_exists($dir_subida."/marks/".$_POST['referer'])) {
    if(!mkdir($dir_subida."/marks/".$_POST['referer']."/", 0777, true)) {
      echo "error";
    }
  }
  $fichero_subido = $dir_subida . "/marks/".$_POST['referer']."/".$_POST['referer'].".png";

  if (move_uploaded_file($_FILES['attachment_file']['tmp_name'], $fichero_subido)) {
      echo "ok";
  } else {
      echo "error";
  }
}
if ($_POST['type'] == "upload_favicon_agency") {
  //$nombre = $_FILES['archivo']['name'];
  $tipo = $_FILES['attachment_file']['type'];

  //echo json_encode($tipo);
  $dir_subida = realpath('./');
  $dir_exist = false;
  if (!file_exists($dir_subida."/marks/".$_POST['referer'])) {
    if(!mkdir($dir_subida."/marks/".$_POST['referer']."/", 0777, true)) {
      echo "error";
    }
  }
  $fichero_subido = $dir_subida . "/marks/".$_POST['referer']."/".$_POST['referer']."-favicon.fav";

  if (move_uploaded_file($_FILES['attachment_file']['tmp_name'], $fichero_subido)) {
      echo "ok";
  } else {
      echo "error";
  }
}
if ($_POST['type'] == "upload_liquidation") {
  //$nombre = $_FILES['archivo']['name'];
  $tipo = $_FILES['attachment_file']['type'];

  //echo json_encode($tipo);
  $dir_subida = realpath('./');
  $dir_exist = false;
  if (!file_exists($dir_subida."/marks/".$_POST['referer'].'/liquidations')) {
    if(!mkdir($dir_subida."/marks/".$_POST['referer']."/liquidations", 0777, true)) {
      echo "error";
    }
  }
  $fichero_subido = $dir_subida . "/marks/".$_POST['referer']."/liquidations/".basename($_FILES['attachment_file']['name']);

  if (move_uploaded_file($_FILES['attachment_file']['tmp_name'], $fichero_subido)) {
      echo "ok";
  } else {
      echo "error";
  }
}

if ($_POST['type'] == "delete_liquidation") {

  //echo json_encode($tipo);
  $dir_subida = realpath('./');
  $dir_exist = false;
  if (!file_exists($dir_subida."/marks/".$_POST['referer'].'/liquidations')) {
    if(!mkdir($dir_subida."/marks/".$_POST['referer']."/liquidations", 0777, true)) {
      echo "error";
    }
  }
  $fichero_subido = $dir_subida . "/marks/".$_POST['referer']."/liquidations/".basename($_POST['file']);

  if (unlink($fichero_subido)) {
      echo "ok";
  } else {
      echo "error";
  }
}

?>
