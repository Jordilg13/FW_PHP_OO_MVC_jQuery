<?php
include_once dirname(__FILE__).'/../../../paths.php';
include_once _PROJECT_PATH_.'/module/likes/model/Likes.class.php';

$method = $_SERVER['REQUEST_METHOD'];
$object = new Likes();
include_once _PROJECT_PATH_.'/model/ApiController.php';
echo json_encode($results);