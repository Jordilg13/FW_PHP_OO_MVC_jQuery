<?
include_once dirname(__FILE__).'/../../../paths.php';
include_once _PROJECT_PATH_.'/module/profile/model/Profile.class.php';
include_once _PROJECT_PATH_."/utils/upload.php";

if ((isset($_GET["upload"])) && ($_GET["upload"] == true)){
  $result_prodpic = upload_files();

  $_SESSION['result_prodpic'] = $result_prodpic;
    echo json_encode($result_prodpic);
} elseif ((isset($_GET["delete"])) && ($_GET["delete"] == true)){

  $_SESSION['result_prodpic'] = array();
  $result = remove_files();
  if($result === true){
    echo json_encode(array("res" => true));
  }else{
    echo json_encode(array("res" => false));
  }
  //echo json_decode($result);
} else {
  $method = $_SERVER['REQUEST_METHOD'];
  $object = new Profile();
  include_once _PROJECT_PATH_.'/model/ApiController.php';
  echo json_encode($results);
}



