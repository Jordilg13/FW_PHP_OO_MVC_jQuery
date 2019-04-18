<?
$path = $_SERVER['DOCUMENT_ROOT'] . "/web_framework_php/";
include($path . "module/likes/model/likesDAO.php");
include_once($path . "view\php_functions\user_validation.php");
    
switch ($_GET['op']) {
    case 'list':
        $uhas = Functions::loggedUserHasPermissions();
        if ($uhas) 
            include("module/likes/view/list_likes.php");
         else 
            echo("<script>window.location.href = 'index.php'</script>");        
        break;
    case 'toggle_like':
        try{
            $daolike = new likesDAO();
            $rlt = $daolike->toggle_like($_POST);
        } catch(Exception $e){
            echo json_encode("error");
        }
        // print_r($rlt);

        if(!$rlt['rlt']){
            echo json_encode("error2");
        } 
        else {
          echo json_encode($rlt['op']);
        }
        break;
    case 'check_like':
        
        try{
            $daolike = new likesDAO();
            $rlt = $daolike->check_like($_POST);
        } catch(Exception $e){
            echo json_encode("error");
        }

        if(!$rlt){
            echo json_encode("error2");
        } 
        else {
          echo json_encode($rlt);
        }
        break;
    case 'datatable':    
        try{
            $daolike = new likesDAO();
            $rlt = $daolike->select_all_likes($_GET);
        } catch(Exception $e){
            echo json_encode("error");
        }

        if(!$rlt){
            echo json_encode("error");
        }
        else{
            $dinfo = array();

            foreach ($rlt as $row) {
                array_push($dinfo, $row);
            }
            echo json_encode($dinfo);
        }
        break;
    default:
        include("view/inc/error404.php");
        break;
	}