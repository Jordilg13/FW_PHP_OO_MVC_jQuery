<?
$path = $_SERVER['DOCUMENT_ROOT'] . "/web_framework_php/";
include_once($path."model/class.php");

class loginDAO {
    function getUserProducts($id){
        $sql = "SELECT id_prod,cant,img,price ".
                "FROM cart ". 
                "WHERE user='".$id['id']."'";
        // echo $sql;
        $conexion = Conectar::con();
        $res = mysqli_query($conexion, $sql);
        Conectar::close($conexion);
        
        return $res;
    }
    function deleteProduct($info){
        
        $sql = "DELETE FROM cart WHERE user='".$info['user']."' and id_prod='".$info['id_prod']."'";

        $conexion = Conectar::con();
        $res = mysqli_query($conexion, $sql);
        Conectar::close($conexion);
        
        return $res;
    }
    function addToCart($info){
        if ($info['api'] == "true") {
            $sql = "insert into cart (user,id_prod,cant,img,price) values('".$info['user']."','".$info['id_prod']."',1,'".$info['img']."','".$info['price']."')";
        } else if ($info['api'] == "false") {
            $sql = "insert into cart (user,id_prod,cant) values('".$info['user']."','".$info['id_prod']."',1)";
        }
        

        $conexion = Conectar::con();
        $res = mysqli_query($conexion, $sql);
        Conectar::close($conexion);
        
        return $res;
    }
    function checkIfIsInCart($info){
        $sql = "select * from cart where user='".$info['user']."' and id_prod='".$info['id_prod']."'";

        $conexion = Conectar::con();
        $res = mysqli_query($conexion, $sql);
        Conectar::close($conexion);
        
        return $res;
    }
    function increaseDecrease($info){
        $sql = "UPDATE cart SET cant = cant ".$info['operator']." 1 WHERE user='".$info['user']."' AND id_prod='".$info['id_prod']."'";

        $conexion = Conectar::con();
        $res = mysqli_query($conexion, $sql);
        Conectar::close($conexion);
        
        return $res;
    }
    function checkout($info){
        $sql = "INSERT INTO purchases (id_purchase,user,product,cant,date) values('".$info['purchase_id']."','".$info['user']."','".$info['prod'][0]."','".$info['prod'][1]."','".$info['curr_time']."')";
        
        $conexion = Conectar::con();
        $res = mysqli_query($conexion, $sql);
        Conectar::close($conexion);
        
        return $res;
    }
    function lastPurchaseId(){
        $sql = "select max(distinct id_purchase) from purchases";
        $conexion = Conectar::con();
        $res = mysqli_query($conexion, $sql);
        Conectar::close($conexion);
        
        return $res;
    }
    function purchaseProducts($info){
        $sql = "select * from purchases where id_purchase='".$info['id']."'";
        $conexion = Conectar::con();
        $res = mysqli_query($conexion, $sql);
        Conectar::close($conexion);
        
        return $res;
    }
}