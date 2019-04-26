<?php
session_start();
include_once dirname(__FILE__).'/SessionHandlerr.class.php';
try {
    echo json_encode(SessionHandlerr::getSession($_POST['sessionvar']));
} catch (Exception $e){
    http_response_code(400);
}
