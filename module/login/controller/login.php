<?
include_once dirname(__FILE__).'/../../../paths.php';
include_once _PROJECT_PATH_.'/model/autoload.php';

$method = $_SERVER['REQUEST_METHOD'];


session_start();
// POST = register/login
// PUT = update user
// DELETE = logout
debug($_POST);
if ($method == "POST") { // login or register
    switch ($_POST['login']['op']) {


        case 'login':
            $method="GET"; //changed to get because i want to do a select, not an input
            $object = new Login();
            include_once _PROJECT_PATH_.'/model/ApiController.php';
            if (password_verify($_POST['login']['data'],$results[0]->password)) {
                $_SESSION['logged_user']=$results[0]->ID;
                echo json_encode("logged");
            } else {
                echo json_encode("failed");
            }            
            break;


        case 'register':
            unset($_POST['login']['data']['confirm-password']);
            $_POST['login']['data']['password']=password_hash($_POST['login']['data']['password'],PASSWORD_BCRYPT);
            $_POST['data']=$_POST['login']['data'];
            $_POST['data']=json_encode($_POST['data']);

            $object = new Login();
            include_once _PROJECT_PATH_.'/model/ApiController.php';
            echo json_encode($results);
            

            break;
        default:
            # code...
            break;
    }
} elseif ($method == "GET") {
    $object = new Login();
    include_once _PROJECT_PATH_.'/model/ApiController.php';

    echo json_encode($results);
} elseif ($method == "DELETE") {
    unset($_SESSION['logged_user']);
    if (isset($_SESSION['logged_user'])) {
        echo json_encode(false);
    } else {
        echo json_encode(true);
    }

} 
// elseif ($method == "PUT") {
//     # code...
// }