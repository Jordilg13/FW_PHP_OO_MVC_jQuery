<?php
session_start();
include_once dirname(__FILE__).'/SessionHandlerr.class.php';
try {
    SessionHandlerr::clear($_POST['sessionvar']);
} catch (Exception $e){
    http_response_code(400);
}
