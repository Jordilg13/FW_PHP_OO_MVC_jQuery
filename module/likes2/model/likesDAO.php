<?php
$path = $_SERVER['DOCUMENT_ROOT'] . "/web_framework_php/";
include_once($path."model/class.php");

class likesDAO{
        function select_all_likes($user){
                $sql = "SELECT * FROM likes WHERE user_l='". $user['u_id'] ."' ORDER BY 1,2 ASC";
                
                $conexion = Conectar::con();
                $res = mysqli_query($conexion, $sql);
                Conectar::close($conexion);
                return $res;
        }

        static function check_like($info) {
                // print_r($info);
                $sql = "select * from likes where user_l='".$info['user']."' and product_code = '".$info['id']."'";
                // echo $sql;
                $conexion = Conectar::con();
                $res = mysqli_query($conexion, $sql);
                $res = $res->fetch_all();
                if (count($res) > 0) {
                        $like_exists = "true";
                } else {
                        $like_exists = "false";
                }
                Conectar::close($conexion);

                return $like_exists;
        }

        function toggle_like($info){
                // print_r($info);
                $like_exists = $this->check_like($info);
                // print_r($like_exists);         
                if ($like_exists == "true") {
                        $sql = "delete from likes where product_code = '".$info['id']."' and user_l = '".$info['user']."'";
                } else {
                        $sql = "INSERT INTO likes(user_l, product_code)".
                        "values(\"".$info['user']."\", \"".$info['id']."\")";
                }
                // echo $sql;
                $conexion = Conectar::con();
                $res = mysqli_query($conexion, $sql);
                Conectar::close($conexion);
                // var $res = {"res"=> $res};
                return array(
                        "rlt" => $res,
                        "op" => $like_exists
                );
        }
}