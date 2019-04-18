<?
include_once dirname(__FILE__).'/../../../paths.php';
include_once _PROJECT_PATH_.'/module/profile/model/Profile.class.php';

$method = $_SERVER['REQUEST_METHOD'];
$object = new Profile();
include_once _PROJECT_PATH_.'/model/ApiController.php';
echo json_encode($results);