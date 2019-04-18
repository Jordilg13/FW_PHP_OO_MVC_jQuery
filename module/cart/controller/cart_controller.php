<?
    $path = $_SERVER['DOCUMENT_ROOT'] . "/web_framework_php/";
    include($path . "module/cart/model/DAO_cart.php");


    switch ($_GET['op']) {
        case 'view':
            include("module/cart/view/cart_view.php");
            break;
        case 'get_cart_products':
            try {
                $cart_DAO = new loginDAO();
                // print_r($_POST);
                $rlt = $cart_DAO->getUserProducts($_POST);
            } catch (Exception $e) {
                echo json_encode("error");
            }
            echo json_encode($rlt->fetch_all());
            break;
        case 'add_to_cart':
            try {
                $cart_DAO = new loginDAO();
                // print_r($_POST);
                $rlt = $cart_DAO->checkIfIsInCart($_POST);
            } catch (Exception $e) {
                echo json_encode("error");
            }

            if ($rlt->num_rows > 0) {
                error_log("already in cart");
            } else if($rlt->num_rows == 0) {
                try {
                    $cart_DAO = new loginDAO();
                    error_log("adding");
                    $rlt2 = $cart_DAO->addToCart($_POST);
                } catch (Exception $e) {
                    echo json_encode("error");
                }
                echo json_encode($rlt2);
            }
            
            // echo json_encode($rlt->fetch_all());
            break;
        case 'delete_from_cart':
            try {
                $cart_DAO = new loginDAO();
                // print_r($_POST);
                $rlt = $cart_DAO->deleteProduct($_POST);
            } catch (Exception $e) {
                echo json_encode("error");
            }
            echo json_encode("deleted");
            break;
        case 'increase_decrease':
            try {
                $cart_DAO = new loginDAO();
                // print_r($_POST);
                $rlt = $cart_DAO->increaseDecrease($_POST);
            } catch (Exception $e) {
                echo json_encode("error");
            }
            echo json_encode($rlt);
            break;
        case 'check_if_is_in_cart':
            try {
                $cart_DAO = new loginDAO();
                // print_r($_POST);
                $rlt = $cart_DAO->checkIfIsInCart($_POST);
            } catch (Exception $e) {
                echo json_encode("error");
            }
            if ($rlt->num_rows > 0) {
                echo json_encode(true);
            } else {
                echo json_encode(false);
            }
            break;
        case 'checkout':
            try {
                $cart_DAO = new loginDAO();
                $rlt = $cart_DAO->checkout($_POST);
            } catch (Exception $e) {
                echo json_encode("error");
            }
            echo json_encode($rlt);
            break;
        case 'lastPurchase':
            try {
                $cart_DAO = new loginDAO();
                $rlt = $cart_DAO->lastPurchaseId();
            } catch (Exception $e) {
                echo json_encode("error");
            }
            echo json_encode($rlt->fetch_all());
            break;
        case 'purchaseProducts':
            try {
                $cart_DAO = new loginDAO();
                $rlt = $cart_DAO->purchaseProducts($_POST);
            } catch (Exception $e) {
                echo json_encode("error");
            }
            echo json_encode($rlt->fetch_all());
            break;
        default:
            include("view/inc/error404.php");
            break;
    }

