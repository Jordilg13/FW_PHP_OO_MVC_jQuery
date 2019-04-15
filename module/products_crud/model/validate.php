<?php   
    function validate($product_code){
        //return false if already exists a product with same product_code in DB
        //return true if not
        if (DAOProd::select_prod($product_code)) 
            $rt = false;
        else
            $rt = true;
        return $rt;
    }