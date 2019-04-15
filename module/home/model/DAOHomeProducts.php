<?php
$path = $_SERVER['DOCUMENT_ROOT'] . "/web_framework_php/";
include($path."model/class.php");

class DAOHomeProduct{
    function select_home_products($num){
        $sql = "SELECT * FROM products LIMIT ".$num;

        $conexion = Conectar::con();
        $res = mysqli_query($conexion, $sql);
        Conectar::close($conexion);
        return $res;
            
    }
}