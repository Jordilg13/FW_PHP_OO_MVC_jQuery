<?php
    $path = $_SERVER['DOCUMENT_ROOT'] . "/web_framework_php/";
    include($path."module/shop/model/DAOShopProducts.php");
    if (!isset($_GET['op'])) {
        $_GET['op'] = "list_home";
    }
    switch ($_GET['op']) {
        case 'list':
            include($path."module/shop/view/list_shop.php");
            break;
        case 'view_product':
            include($path."module/shop/view/view_single_product.php");
            break;
        case 'singlelement':
            try {
                $daoshoprod = new DAOShopProduct();
                $rt = $daoshoprod->single_element($_POST['id']);
            }catch (Exception $e){
                $callback = 'index.php?page=503';
                die('<script>window.location.href="'.$callback .'";</script>');
            }
            if(!$rt){
                $callback = 'index.php?page=503';
                die('<script>window.location.href="'.$callback .'";</script>');
            }else{
                echo json_encode($rt->fetch_all());
            }
            break;
        case 'api_product':
            echo json_encode($_SESSION['fromhome']);
            break;
        case 'redirect':
            $_SESSION['fromhome'] = $_POST;
            break;
        case 'autocomplete':
            if (isset($_SESSION['fromhome'])) {
                $_POST = $_SESSION['fromhome'];
                $_POST['toAutoComplete'] = "*";
                session_unset();
            }
            try {
                $daoshoprod = new DAOShopProduct();
                $rt = $daoshoprod->select_prod_autocomp($_POST);
            }catch (Exception $e){
                
                $callback = 'index.php?page=503';
                die('<script>window.location.href="'.$callback .'";</script>');
            }
            if(!$rt){
                $callback = 'index.php?page=503';
                die('<script>window.location.href="'.$callback .'";</script>');
            }else{
                echo json_encode($rt->fetch_all());
            }

            break;
        default:
            echo "default";
            break;
    }
