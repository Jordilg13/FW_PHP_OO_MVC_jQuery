<?php
    function debugPHP($array){
        echo "<pre>";
        print_r($array);
        echo "</pre><br>";
    }
    function debug($data){
        error_log(print_r($data,1));
    }
    
    function redirect($url){
        die('<script>top.location.href="'.$url.'";</script>');
    }