<?php
session_start();
include_once dirname(__FILE__).'/SessionHandlerr.class.php';
try {
    SessionHandlerr::setSession($_POST['sessionvar'],$_POST[$_POST['sessionvar']]);
    echo json_encode("setted");
} catch (Exception $e){
    http_response_code(400);
}