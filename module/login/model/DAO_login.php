<?
$path = $_SERVER['DOCUMENT_ROOT'] . "/web_framework_php/";
include_once($path."model/class.php");

class loginDAO{
    function UserInfo($id){

        $sql = "SELECT * FROM users WHERE id='".$id['id']."'";

        $conexion = Conectar::con();
        $res = mysqli_query($conexion, $sql);
        Conectar::close($conexion);
        
        return $res;
    }
    // function UserId($username, $pass){

    //     $sql = "SELECT id FROM users WHERE username='".$username."' AND password='".$pass."'";

    //     $conexion = Conectar::con();
    //     $res = mysqli_query($conexion, $sql);
    //     Conectar::close($conexion);
        
    //     return $res;
    // }
    function userExists($data){
        $sql = "SELECT * FROM users WHERE username='".$data['username']."' AND email='".$data['email']."'";

        // echo $sql;
        $conexion = Conectar::con();
        $res = mysqli_query($conexion, $sql);
        Conectar::close($conexion);
        
        return $res;
    }
    function createClient($user_data){

        $sql = "INSERT INTO users".
                " (username, email, password)".
                " VALUES ('".$user_data['username']."', '".$user_data['email']."', '".$user_data['password']."')";

        $conexion = Conectar::con();
        $res = mysqli_query($conexion, $sql);
        Conectar::close($conexion);

        return $res;
    }
    function checkLogin($data){
        $sql = "SELECT * FROM users WHERE username='".$data['username']."'";

        // echo $sql;
        $conexion = Conectar::con();
        $res = mysqli_query($conexion, $sql);
        Conectar::close($conexion);
        
        return $res;
    }
}