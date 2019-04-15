<?php
	class Conectar{
		public static function con(){
			$host = getenv('localhost');  
    		$user = "root";                     //Your Cloud 9 username
    		//$user = getenv('C9_USER');
    		$pass = "";                             //Remember, there is NO password!
    		$db = "comentarios";                      //Your database name you want to connect to
    		$port = 3306;                           //The port #. It is always 3306
    		$tabla="products";
    		
    		$conexion = mysqli_connect($host, $user, $pass, $db, $port)or die(mysql_error());
			return $conexion;
		}
		public static function close($conexion){
			mysqli_close($conexion);
		}
	}

