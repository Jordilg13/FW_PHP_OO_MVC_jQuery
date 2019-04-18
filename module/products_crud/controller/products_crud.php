<?php
$path = $_SERVER['DOCUMENT_ROOT'] . "/web_framework_php/";
include($path . "module/products_crud/model/DAOProd.php");

switch ($_GET['op']) {
    case 'list':
        try {
            $daoprod = new DAOProd();
            $rdo = $daoprod->select_all_products();
        }catch (Exception $e){
            $callback = 'index.php?page=503';
            die('<script>window.location.href="'.$callback .'";</script>');
        }

        if(!$rdo){
            $callback = 'index.php?page=503';
            die('<script>window.location.href="'.$callback .'";</script>');
        }else{
            include("module/products_crud/view/list_prod.php");
        }
        break;

    case 'create':
        include("module/products_crud/model/validate.php");
                
        $check = true;
        if (isset($_POST['product_code'])){
            $check=validate($_POST['product_code']);

            if ($check){
                // $_SESSION['prod']=$_POST;
                try{
                    $daoprod = new DAOProd();
                    $rdo = $daoprod->create_prod($_POST);
                }catch (Exception $e){
                    $callback = 'index.php?page=503';
                    die('<script>window.location.href="'.$callback .'";</script>');
                }
                
                if($rdo){
                    echo '<script language="javascript">alert("Product created succesfully")</script>';
                    $callback = 'index.php?page=products_crud&op=list';
                    die('<script>window.location.href="'.$callback .'";</script>');
                }else{
                    $callback = 'index.php?page=503';
                    die('<script>window.location.href="'.$callback .'";</script>');
                }
            } else
                echo('<script language="javascript">alert("Product already exists.")</script>');
                $callback = 'index.php?page=products_crud&op=list';
                die('<script>window.location.href="'.$callback .'";</script>');
        }
        include("module/products_crud/view/create_prod.php");
        break;

    case 'read':
        try{
            $daoprod = new DAOProd();
            $rdo = $daoprod->select_prod($_GET['id']);
            $prod=get_object_vars($rdo);

        }catch (Exception $e){
            $callback = 'index.php?page=503';
            die('<script>window.location.href="'.$callback .'";</script>');
        }
        if(!$rdo){
            $callback = 'index.php?page=503';
            die('<script>window.location.href="'.$callback .'";</script>');
        }else{
            include("module/products_crud/view/read_prod.php");
        }
        break;

        case 'update';
            include("module/products_crud/model/validate.php");
            
            $check = true;
            if (isset($_POST['product_code'])){
                // $check=validate();

                if ($check){
                    // $_SESSION['prod']=$_POST;
                    try{
                        $daoprod = new DAOProd();
                        $rdo = $daoprod->update_prod($_POST);
                    }catch (Exception $e){
                        die('<script>console.log('.$e.');</script>');
                        $callback = 'index.php?page=503';
        			    die('<script>window.location.href="'.$callback .'";</script>');
                    }
                    
		            if($rdo){
            			echo '<script language="javascript">alert("Product updated sucessfully.")</script>';
            			$callback = 'index.php?page=products_crud&op=list';
        			    die('<script>window.location.href="'.$callback .'";</script>');
            		}else{
                        // die('<script>console.log("rdo_else");</script>');
            			$callback = 'index.php?page=503';
    			        die('<script>window.location.href="'.$callback .'";</script>');
            		}
                }
            }

            try{
                $daoprod = new DAOProd();
            	$rdo = $daoprod->select_prod($_GET['id']);
                $prod=get_object_vars($rdo);
            }catch (Exception $e){
                // echo('<script>console.log("1_else");</script>');
                $callback = 'index.php?page=503';
			    die('<script>window.location.href="'.$callback .'";</script>');
            }

            if(!$rdo){
                // echo('<script>console.log("2");</script>');
    			$callback = 'index.php?page=503';
    			// die('<script>window.location.href="'.$callback .'";</script>');
    		}else{
                // echo('<script>console.log("2_else");</script>');
        	    include("module/products_crud/view/update_prod.php");
    		}
            break;

        case 'delete';
            if (isset($_POST['delete'])){
                try{
                    $daoprod = new DAOProd();
                    $rdo = $daoprod->delete_prod($_GET['id']);
                }catch (Exception $e){
                    $callback = 'index.php?page=503';
                    die('<script>window.location.href="'.$callback .'";</script>');
                }
                
                if($rdo){
                    echo '<script language="javascript">alert("Product removed sucesfully.")</script>';
                    $callback = 'index.php?page=products_crud&op=list';
                    die('<script>window.location.href="'.$callback .'";</script>');
                }else{
                    $callback = 'index.php?page=503';
                    die('<script>window.location.href="'.$callback .'";</script>');
                }
            }
            
            include("module/products_crud/view/delete_prod.php");
        break;
        case 'deleteall';
            if (isset($_POST['delete'])){
                try{
                    $daoprod = new DAOProd();
                    $rdo = $daoprod->delete_all_products();
                }catch (Exception $e){
                    $callback = 'index.php?page=503';
                    die('<script>window.location.href="'.$callback .'";</script>');
                }
                
                if($rdo){
                    echo '<script language="javascript">alert("All products deleted sucesfully.")</script>';
                    $callback = 'index.php?page=products_crud&op=list';
                    die('<script>window.location.href="'.$callback .'";</script>');
                }else{
                    $callback = 'index.php?page=503';
                    die('<script>window.location.href="'.$callback .'";</script>');
                }
            }
            include("module/products_crud/view/delete_all_products.php");
        break;
        case 'read_modal':
            try {
                $daoprod = new DAOProd();
                $rt = $daoprod->select_prod($_GET['modal']);
            } catch (Exception $e) {
                echo json_encode("error");
                exit;
            }
            if (!$rt) {
                echo json_encode("error");
                exit;
            } else {
                $prod = get_object_vars($rt);
                echo json_encode($prod);
                exit;
            }
        break;
    // case 'dummies':
    //     echo(buildPostQuery($_POST['dummies']));
    //     break;
    default:
        echo("default");
        break;
}