<?php
    $path = $_SERVER['DOCUMENT_ROOT'] . "/web_framework_php/";
    include($path."module/home/model/DAOHomeProducts.php");
    if (!isset($_GET['op'])) {
        $_GET['op'] = "list_home";
    }

   switch ($_GET['op']) {
        case 'list_home':
            // num of products at home
            if (isset($_GET['num'])) {
                switch ($_GET['num']) {
                    case '6':
                        $num = 6;
                        break;
        
                    case '8':
                        $num = 8;
                        break;
                    
                    default:
                        $num = 4;
                        break;
                }
            } else
                $num = 4;
        
            try {
                $daoprodhome = new DAOHomeProduct();
                $rt = $daoprodhome->select_home_products($num);
            }catch (Exception $e){
                
                $callback = 'index.php?page=503';
                die('<script>window.location.href="'.$callback .'";</script>');
            }
            if(!$rt){
                $callback = 'index.php?page=503';
                die('<script>window.location.href="'.$callback .'";</script>');
            }else{
                include($path."module/home/view/home.php");
            }
            break;
        default:
            echo "default";
            break;
    }
