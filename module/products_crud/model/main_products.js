function validacode(code) {
    if (code.length > 0) {
        var regexp = /^([A-Z]{1})([0-9]{4})$/;
        return regexp.test(code);
    }
    return false;
}
function validastring(str) {
    if (str.length > 0) {
        var regexp = /^[a-zA-Z0-9]*$/;
        return regexp.test(str);
    }
    return false;
}
function validaemail(email) {
    if (email.length > 0) {
        var regexp = /^[A-Z0-9._%+-]+@(?:[A-Z0-9-]+.)+[A-Z]{2,4}$/i;
        return regexp.test(email);
    }
    return false;
}
function validate_prod(option) {
    var result = true;

    var code = document.getElementById('product_code').value;
    var product = document.getElementById('product').value;
    var brand = document.getElementById('brand').value;
    var m_email = document.getElementById('m_email').value;

    //product code
    if (!validacode(code)) {
        document.getElementById('e_product_code').innerHTML = "Invalid code for the product.";
        result = false;
    } else {
        document.getElementById('e_product_code').innerHTML = "";
    }


    //product name
    if (!validastring(product)) {
        document.getElementById('e_product').innerHTML = "Invalid name for the product.";
        result = false;
    } else {
        document.getElementById('e_product').innerHTML = "";
    }
    //brand
    if (!validastring(brand)) {
        document.getElementById('e_brand').innerHTML = "Invalid brand.";
        result = false;
    } else {
        document.getElementById('e_brand').innerHTML = "";
    }
    //manufacturer email
    if (!validaemail(m_email)) {
        document.getElementById('e_memail').innerHTML = "Invalid email.";
        result = false;
    } else {
        document.getElementById('e_memail').innerHTML = "";
    }
    //state
    if (document.getElementById('state').value == "Other") {
        document.getElementById('e_state').innerHTML = "Invalid state.";
        result = false;
    } else
        document.getElementById('e_state').innerHTML = "";

    //processor type
    var ischecked = false;
    var checkboxes = document.getElementsByName('type_proc[]');
    for (var i = 0; i < checkboxes.length; i++) {
        if (checkboxes[i].checked)
            ischecked = true;
    }
    if (!ischecked) {
        document.getElementById('e_type_proc').innerHTML = "Check at least one type of processor.";
        result = false;
    } else
        document.getElementById('e_type_proc').innerHTML = "";

    //available until
    console.log(document.getElementById('demo1').value);
    if (document.getElementById('demo1').value == "") {
        document.getElementById('e_available_until').innerHTML = "Select a day.";
        result = false;
    }
    else
        document.getElementById('e_available_until').innerHTML = "";


    console.log("fin validacio js: " + result);

    if (result) {
        document.formm.submit();
        document.formm.action = "index.php?page=products_crud&op=" + option;
    }
}

function chargeLikesOfUser() {
    var logged_user = getUserId().responseText;
    $(".like").each(function () {
        var $this = $(this);
        if (logged_user != "no logged") {
            var id_arr = { 
                "id": this.id,
                "user": logged_user 
            };
            // console.log(id_arr);
            
            $.ajax({
                type: 'POST',
                url: 'module/likes/controller/likes_controller.php?op=check_like',
                data: id_arr,
                success: function (data) {
                    // console.log(id_arr['id']);
                    // console.log(data);
                    if (data == '"true"') {
                        $this.removeClass('btn-default').addClass('btn-danger');
                    } else {
                        $this.removeClass('btn-danger').addClass('btn-default');
                    }
                }
            });
        } else {
            $this.removeClass('btn-danger').addClass('btn-default');
        }
    });
    
    
}

$(document).ready(function () {
    $("#details").hide(); //hidden fails

    if ($('#table_crud').length) {
        $('#table_crud').DataTable();
    }

    // change color buttons depending DB
    
    chargeLikesOfUser()


    // toggle like of the clicked product and change button's class depending the state
    $(".like").on("click", function () {

        if (getUserId().responseText != "no logged") {
            var $this = $(this);
            var id_arr = {
                "id": $(this)[0].id,
                "user": getUserId().responseText
            };
            
            console.log(id_arr);
            $.ajax({
                type: 'POST',
                url: 'module/likes/controller/likes_controller.php?op=toggle_like',
                data: id_arr,
                success: function (data) {
                    // console.log(data);
                    if (data == '"false"') {
                        $this.removeClass('btn-default').addClass('btn-danger');
                    } else {
                        // console.log("removed red");
                        $this.removeClass('btn-danger').addClass('btn-default');
                    }
                }
            });
        }
        else {
            window.location.href = "index.php?page=login"
        }   

    });
    $('.prod').on("click", function () {
        var id = this.getAttribute('id');
        //alert(id);

        //request to obtain the product info
        //if succes: print modal
        $.ajax({
            type: 'GET',
            url: 'module/products_crud/controller/products_crud.php?op=read_modal&modal=' + id,
            dataType: 'json',
            success: function (data) {
                console.log("success");
                // console.log(data);

                if (data === 'error') {
                    //console.log(data);
                    //pintar 503
                    window.location.href = 'index.php?page=503';
                } else {
                    console.log(data);

                    $("#p_code").html(data.product_code);
                    $("#p_name").html(data.product_name);
                    $("#p_brand").html(data.brand);
                    $("#p_memail").html(data.m_email);
                    $("#p_price").html(data.price);
                    $("#p_state").html(data.state_product);
                    $("#p_processor").html(data.processor_type);
                    $("#p_availableuntil").html(data.available_until);

                    $("#details").show();
                    $("#prod_modal").dialog({
                        width: 850, //<!-- ------------- ancho de la ventana -->
                        height: 500, //<!--  ------------- altura de la ventana -->
                        // show: "scale", //<!-- ----------- animación de la ventana al aparecer -->
                        // hide: "scale", //<!-- ----------- animación al cerrar la ventana -->
                        resizable: "false", //<!-- ------ fija o redimensionable si ponemos este valor a "true" -->
                        // position: "top", //<!--  ------ posicion de la ventana en la pantalla (left, top, right...) -->
                        modal: "true", //<!-- ------------ si esta en true bloquea el contenido de la web mientras la ventana esta activa (muy elegante) -->
                        buttons: {
                            Ok: function () {
                                $(this).dialog("close");
                            }
                        },
                        show: {
                            effect: "blind",
                            duration: 250
                        },
                        hide: {
                            effect: "blind",
                            duration: 250
                        }
                    });
                }//end-else
            },
            error: function (data) {
                console.log("error");
                console.log(data);
            }
        });
    });

    $('#demo1').datepicker({
        dateFormat: 'dd/mm/yy',
        changeMonth: true,
        changeYear: true,
        yearRange: '1900:2100',
        minDate: -1000000,
    });
}); //end document ready
