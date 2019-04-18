function fillCart() {
    return new Promise(function (resolve, reject) {
        $.ajax({
            type: 'POST',
            url: 'module/cart/controller/cart_controller.php?op=get_cart_products',
            data: { "id": getUserId().responseText },
            dataType: 'json',
            async: false,
            success: function (data) {

                for (let i = 0; i < data.length; i++) {
                    // prepare data to work as a database product
                    
                        if (data[i][0].length > 5) {
                            console.log(data[i]);
                            datos_api_prod = {
                                0:data[i][0],
                                1:data[i][0],
                                4:data[i][3],
                                9:data[i][2]
                            }
                            var a = Object.values(datos_api_prod);
                            a[9] = a[3];
                            a[4] = a[2];
                            append_products(Object.values([a]),data[i][1]);
                        } else {
                            $.ajax({
                                type: 'POST',
                                url: 'module/shop/controller/shop.php?op=singlelement',
                                data: { "id": data[i][0] },
                                dataType: 'json',
                                async: false,
                                success: function (data2) {    
                                    append_products(data2,data[i][1]);
                                }
                            });
                        }
                    }
            }
        });
        resolve();
    });
}

function append_products(data2,cant) {
    console.log(data2);
        // 1-title
        // 2-price
        // 3-id
        var api_span = "";
        if (data2[0][0].length > 5) {
            api_span = '<span class="badge badge-danger">API Product</span>';
        }
        var template =
            `<div class="row cart-item" id="%s">
            <div class="col-5">
            <div class="product-overview text-left d-flex"><a class="product-img"><img src="%s" alt="product" class="img-fluid"></a>
                <div class="product-details"><a>
                    <h3 class="h4">%s</h3></a><br>%s</div>
            </div>
            </div>
            <div class="col-2"><strong>%s</strong></div>
            <div class="col-2">
            <div class="product-quantity d-flex align-items-center justify-content-center">
                <div class="minus-btn"><i class="icon-android-remove"></i></div>
                <input type="text" value="%s" class="quantity_%s" readonly>
                <div class="plus-btn"><i class="icon-android-add"></i></div>
            </div>
            </div>
            <div class="col-2"><strong id="total_price_%s" class="total_price_c"></strong></div>
            <div class="col-1"><a id="%s" class="remove_item">X</a></div>
        </div>`;
    // var total_products_price = 0;
    
    // print the product
    // console.log(data2);
    $(".cart-body").append(sprintf(template, 
                                    [data2[0][0],
                                     data2[0][9], 
                                     data2[0][1],
                                    api_span, 
                                    data2[0][4],
                                    cant,
                                    data2[0][0],
                                    data2[0][0],
                                    data2[0][0]]));


    // redirect to product details(img)
    $('.cart-body')[0].lastChild.children[0].children[0].children[0].addEventListener("click", function () {
        window.location.href = "index.php?page=shop&op=view_product&id=" + this.parentNode.parentNode.parentNode.id;
    });


    // redirect to product details(a)
    $('.cart-body')[0].lastChild.children[0].children[0].children[1].children[0].addEventListener("click", function () {
        window.location.href = "index.php?page=shop&op=view_product&id=" + this.parentNode.parentNode.parentNode.parentNode.id;
    });


    // delete item from cart page
    $('.cart-body')[0].lastChild.children[4].children[0].addEventListener("click", function () {
        var result = deleteDromCart({ "user": getUserId().responseText, "id_prod": this.id });
        if (result.responseJSON == "deleted") {
            $(this.parentNode.parentNode).remove();
            setProductsNumberCart();

            document.getElementById('total_price_cart').innerHTML = parseInt(document.getElementById('total_price_cart').innerHTML,10) - this.parentNode.parentNode.children[3].children[0].innerHTML;
            console.log(this.parentNode.parentNode.children[3].children[0].innerHTML);
        }
    });

    // increase button
    $('.cart-body')[0].lastChild.children[2].children[0].children[2].addEventListener("click", function () {
        arr_id_oper = {
            "operator": "+",
            "user": getUserId().responseText,
            "id_prod": this.parentNode.parentNode.parentNode.id
        };
        $.ajax({
            type: 'POST',
            url: 'module/cart/controller/cart_controller.php?op=increase_decrease',
            data: arr_id_oper,
            dataType: 'json',
            success: function(data){
                if (data) {
                    document.getElementsByClassName("quantity_" + data2[0][0])[0].attributes[1].value++;
                    document.getElementById('total_price_'+data2[0][0]).innerText =  document.getElementsByClassName("quantity_" + data2[0][0])[0].value * document.getElementsByClassName("quantity_" + data2[0][0])[0].parentNode.parentNode.parentNode.children[1].children[0].innerHTML;

                    document.getElementById('total_price_cart').innerHTML = parseInt(document.getElementById('total_price_cart').innerHTML,10)+ parseInt(document.getElementsByClassName("quantity_" + data2[0][0])[0].parentNode.parentNode.parentNode.children[1].children[0].innerHTML,10);
                }
            }
        });

    });
    
    // decrease button
    $('.cart-body')[0].lastChild.children[2].children[0].children[0].addEventListener("click", function () {
        arr_id_oper = {
            "operator": "-",
            "user": getUserId().responseText,
            "id_prod": this.parentNode.parentNode.parentNode.id
        };
        if (document.getElementsByClassName("quantity_" + data2[0][0])[0].attributes[1].value != 1) {
            $.ajax({
                type: 'POST',
                url: 'module/cart/controller/cart_controller.php?op=increase_decrease',
                data: arr_id_oper,
                dataType: 'json',
                success: function(data){
                    if (data) {
                        document.getElementsByClassName("quantity_" + data2[0][0])[0].attributes[1].value--;
                        document.getElementById('total_price_'+data2[0][0]).innerText =  document.getElementsByClassName("quantity_" + data2[0][0])[0].value * document.getElementsByClassName("quantity_" + data2[0][0])[0].parentNode.parentNode.parentNode.children[1].children[0].innerHTML;
                        document.getElementById('total_price_cart').innerHTML = parseInt(document.getElementById('total_price_cart').innerHTML,10)- parseInt(document.getElementsByClassName("quantity_" + data2[0][0])[0].parentNode.parentNode.parentNode.children[1].children[0].innerHTML,10);
                    }
                }
            });
        } else {
            alert("You can't decrease more the quantity, you can delete the product if you want.");
        }
    });

}

function deleteDromCart(info) {
    return $.ajax({
        type: 'POST',
        url: 'module/cart/controller/cart_controller.php?op=delete_from_cart',
        data: info,
        dataType: 'json',
        async: false,
        success: function (data) {
            console.log(data);
        }
    })
}
function addToCart(info) {
    console.log(info);
    $.ajax({
        type: 'POST',
        url: 'module/cart/controller/cart_controller.php?op=add_to_cart',
        data: info,
        dataType: 'json',
        success: function (data) {
            console.log(data);
            if (data == "1") {
                disableCartBtn(info);
                setProductsNumberCart();
            }
        }
    })
}

function setProductsNumberCart() {
    var id_arr = { 
        "id": getUserId().responseText 
    };        

    $.ajax({
        type: 'POST',
        url: 'module/cart/controller/cart_controller.php?op=get_cart_products',
        data: id_arr,
        dataType: 'json',
        success: function(data){
            document.getElementsByClassName('lbl_num_cart')[0].innerHTML = data.length;
        }
    });
}
function disableCartBtn(info) {
    var elements = document.getElementsByClassName('cart-btn');
    var url_cart = new URL(window.location.href);

    if (url_cart.searchParams.get("op") == "view_product") {
        document.getElementsByClassName('cart-btn')[0].innerHTML = "Added";
    } else {
        for (let i = 0; i < elements.length; i++) {
            if (document.getElementsByClassName('cart-btn')[i].parentNode.attributes[1].nodeValue == info['id_prod']) {
                document.getElementsByClassName('cart-btn')[i].innerHTML = "Added";
            }
        }
    }
    
    
    
}
function getLastPurchaseId() {
    return $.ajax({
        type: 'GET',
        url: 'module/cart/controller/cart_controller.php?op=lastPurchase',
        dataType: 'json',
        async: false,
        success: function(data){
            console.log(data);
        }
    })
}
function checkout() {
    $.ajax({
        type: 'POST',
        url: 'module/cart/controller/cart_controller.php?op=get_cart_products',
        data: {"id": getUserId().responseText},
        dataType: 'json',
        success: function (cart_prod) {
            var sss = true;
            var current_time = new Date().toISOString().slice(0, 19).replace('T', ' ');
            var last_purchase_id = parseInt(getLastPurchaseId().responseJSON[0][0],10) + 1;
            var user_id = getUserId().responseText;
            cart_prod.forEach(prod => {
                // console.log(prod);
                // adds prod to purhcases
                $.ajax({
                    type: 'POST',
                    url: 'module/cart/controller/cart_controller.php?op=checkout',
                    data: { 
                        "prod":prod,"user": user_id,
                        "curr_time":current_time,
                        "purchase_id":last_purchase_id
                        },
                    dataType: 'json',
                    async:false,
                    success: function(ckout_result){
                        console.log(ckout_result);
                        if (ckout_result != true) {
                            sss = false;
                        }
                        

                    }
                });
                // remove from cart
                deleteDromCart({ "user": user_id, "id_prod":  prod[0]});

            });

            if (sss) {
                alert("The purchase has been completed successfully.");
                window.location.href = "index.php?page=cart_controller&op=view";
            } else {
                alert("Something failed.");
            }


            
        }
    });
}

function fillLastPurchase() {
    $.ajax({
        type: 'GET',
        url: 'module/cart/controller/cart_controller.php?op=lastPurchase',
        dataType: 'json',
        success: function(data){
            
            $.ajax({
                type: 'POST',
                url: 'module/cart/controller/cart_controller.php?op=purchaseProducts',
                data: {"id":data[0][0]},
                dataType: 'json',
                success: function(data2){
                    var table_pur = document.createElement("table");
                    table_pur.setAttribute("class","table");
                    var row = table_pur.insertRow();
                    row.insertCell().innerHTML = "ID_Product"
                    row.insertCell().innerHTML = "Quantity"
                    row.insertCell().innerHTML = "Date";
                    
                    data2.forEach(element => {
                        var new_row = table_pur.insertRow();

                        new_row.insertCell().innerHTML = element[2];
                        new_row.insertCell().innerHTML = element[3];
                        new_row.insertCell().innerHTML = element[4];
                    });
                    document.getElementsByClassName('card-body')[0].append(table_pur);
                }
            })
        }
    })
}

$(document).ready(function () {
    var url_cart = new URL(window.location.href);
    var cart_page = url_cart.searchParams.get("page");
    var cart_op = url_cart.searchParams.get("op");

    // in cart page
    if (cart_page == "cart_controller") {
        if (getUserId().responseText != "no logged") {
            fillCart().then(function(){
                var total_pr = 0;
                document.querySelectorAll('.total_price_c').forEach(element => {
                    element.innerHTML = element.parentNode.parentNode.children[1].children[0].innerHTML*element.parentNode.parentNode.children[2].children[0].children[1].value;
                    total_pr += element.parentNode.parentNode.children[1].children[0].innerHTML*element.parentNode.parentNode.children[2].children[0].children[1].value;
                });
                document.getElementById('total_price_cart').innerHTML = total_pr;
            });
            $('.checkout_btn').on("click",function(){
                checkout();
            });
    
            fillLastPurchase();
        } else {
            window.location.href = "index.php?page=login";
        }

        

        
    }

    if (cart_op == "view_product" && cart_page == "shop") {
        // disable cart btn when load the page if it's already in cart
        var data_to_send = {
            "id_prod": url_cart.searchParams.get("id"),
            "user": getUserId().responseText
        }
        $.ajax({
            type: 'POST',
            url: 'module/cart/controller/cart_controller.php?op=check_if_is_in_cart',
            data: data_to_send,
            dataType: 'json',
            success: function(data){
                console.log(data);
                if (data) {
                    disableCartBtn();
                }
            }
        });

        // when cart btn is clicked
        $('.cart-btn').on("click", function () {
            if (getUserId().responseText != "no logged") {
                if (url_cart.searchParams.get("id") > 5) {
                    addToCart({
                         "user": getUserId().responseText,
                         "id_prod": url_cart.searchParams.get("id"),
                         "img": document.getElementById('product_picture').src,
                         "price": document.getElementById('price').innerHTML,
                         "api": "true"
                    });
                } else {
                    addToCart({
                        "api": "false",
                        "user": getUserId().responseText,
                        "id_prod": url_cart.searchParams.get("id")
                    });
                }

                
            } else {
                window.location.href = "index.php?page=login";
            }

        });
    }
    // in shop, home or products page
    if (cart_op == "list" && cart_page == "shop") {
        // when cart btn is clicked
        $('.cart-btn').on("click", function () {
            console.log('cart btn '+cart_op+" "+cart_page);
            if (getUserId().responseText != "no logged") {
                // addToCart({ "user": getUserId().responseText, "id_prod": this.parentNode.lastElementChild.id });
                console.log(this);
            } else {
                window.location.href = "index.php?page=login";
            }

        });
        
    }

    if (cart_page == null || cart_page == "shop" && cart_op != "view_product") {
        
        document.querySelectorAll('#individual_card').forEach(card => {
            var btn_cartt = document.createElement("p");
            btn_cartt.setAttribute("class", "cart-btn");
            btn_cartt.textContent = "Add to cart";
            btn_cartt.style.fontSize = "13px";
            btn_cartt.style.width = "160px";
            btn_cartt.style.padding = "5px 30px";
            card.append(btn_cartt);
        });


        $('.cart-btn').on("click", function (e) {
            console.log('cart btn no pls');
            e.stopPropagation();
            if (getUserId().responseText != "no logged") {
                addToCart({ "user": getUserId().responseText, "id_prod": this.parentNode.attributes[1].nodeValue, "api": "false" });
            } else {
                window.location.href = "index.php?page=login";
            }

        });
    }

    setProductsNumberCart();



});