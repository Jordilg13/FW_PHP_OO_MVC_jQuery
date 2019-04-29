<?
$path = $_SERVER['DOCUMENT_ROOT'] . "/web_framework_php/";
include($path . "module/login/model/DAO_login.php");

// autologin
// if ($_SERVER['HTTP_HOST']=='localhost' || $_SERVER['HTTP_HOST']=='127.0.0.1'){
//     $_SESSION['logged_user'] = 12;
// }
    

switch ($_GET['op']) {
    case 'user_info':
        try{
            $reg_dao = new loginDAO();
            $rlt = $reg_dao->UserInfo($_POST);
        } catch(Exception $e){
            echo json_encode("error");
        }
        echo json_encode($rlt->fetch_assoc());
        break;
    case 'logout':
        unset($_SESSION['logged_user']);
        unset($_SESSION['time']);
        // session_destroy();
        echo json_encode("done");
        break;
    case 'logged_user':
        // print_r($_SESSION);
        // $_SESSION[$_POST['s1']][$_POST['data']];
        if (isset($_SESSION['logged_user'])) {
            echo $_SESSION['logged_user'];
        } else {
            echo "no logged";
        }
        
        break;
    case 'login':
        try{
            $reg_dao = new loginDAO();
            $rlt = $reg_dao->checkLogin($_POST);
        } catch(Exception $e){
            echo json_encode("error");
        }

        
        if($rlt->num_rows > 0){
            $rlt = $rlt->fetch_row();
            if (password_verify($_POST['password'],$rlt[4])) {
                // print_r($rlt[0]);
                $_SESSION['logged_user'] = $rlt[0];
            } else {
                echo json_encode("invalid password");
            }
        } else {
            echo json_encode("user doesn't exists");
        }

        break;
    case 'register':
        $_POST['password'] = password_hash($_POST['password'],PASSWORD_BCRYPT);
        try{
            $reg_dao = new loginDAO();
            // check if user already exists
            $rlt = $reg_dao->userExists($_POST);
        } catch(Exception $e){
            echo json_encode("error");
        }

        // if is true, the user already exists
        if($rlt->num_rows > 0){
            echo json_encode("user already exists");
        } 
        else {
            try{
                // create new user(client)
                $rlt = $reg_dao->createClient($_POST);
            } catch(Exception $e){
                echo json_encode("error");
            }
            echo json_encode("created");
        }
        break;
    case 'regenerate_id':
        session_regenerate_id();
        echo json_encode("id regenerated");
        break;
    case 'reset_activity_time':
        $_SESSION['time'] = 0;
        echo json_encode("time reseted");
        break;
    case 'set_time_activity':
        if (isset($_SESSION['time'])) {
            $_SESSION['time'] += 10;
            echo json_encode("incremented, actualtime: ".$_SESSION['time']);
        } else {
            $_SESSION['time'] = 0;
            echo json_encode("time started");
        }
        break;
    case 'activity':
        if (!isset($_SESSION["time"])) {  
            echo "activo";
        } else { 
            if(($_SESSION["time"]) >= 900) {  
                    echo "inactivo"; 
                    exit();
            }else{
                echo "activo";
                exit();
            }
        }
        break;
    default:
        include("view/inc/error404.php");
        break;
	}