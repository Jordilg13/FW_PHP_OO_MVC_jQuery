<?
include($_SERVER['DOCUMENT_ROOT'] . "/web_framework_php/utils/utils.inc.php");
include($_SERVER['DOCUMENT_ROOT'] . "/web_framework_php/utils/upload.php");

if ((isset($_GET["upload"])) && ($_GET["upload"] == true)){
    $result_prodpic = upload_files();
    $_SESSION['result_prodpic'] = $result_prodpic;
      echo json_encode($result_prodpic);
}

if ((isset($_GET["delete"])) && ($_GET["delete"] == true)){
  //echo json_encode("Hello world from delete in products_crud.class.php");
  $_SESSION['result_prodpic'] = array();
  $result = remove_files();
  if($result === true){
    echo json_encode(array("res" => true));
  }else{
    echo json_encode(array("res" => false));
  }
  //echo json_decode($result);
}